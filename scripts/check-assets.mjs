import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const srcRoot = path.join(root, 'src')
const publicRoot = path.join(root, 'public')
const entry = path.join(srcRoot, 'main.jsx')

const fail = (message) => {
  console.error('[assets] FAIL: ' + message)
  process.exitCode = 1
}

const resolveLocal = (fromFile, specifier) => {
  const base = path.resolve(path.dirname(fromFile), specifier)
  const candidates = [
    base,
    base + '.js',
    base + '.jsx',
    base + '.mjs',
    base + '.css',
    path.join(base, 'index.js'),
    path.join(base, 'index.jsx'),
    path.join(base, 'index.mjs'),
    path.join(base, 'index.css'),
  ]
  return candidates.find((candidate) => {
    try {
      return fs.statSync(candidate).isFile()
    } catch {
      return false
    }
  }) ?? null
}

const visited = new Set()
const queue = [entry]
const sourceImportPattern = /(?:import\s+(?:(?:[^'"]*?)\s+from\s+)?|export\s+[^'"]*?from\s+)['"]([^'"]+)['"]/g
const assetPattern = /\/(?:assets|images)\/[^"' \t\r\n)]+/g
const assets = new Map()

while (queue.length) {
  const file = queue.shift()
  if (!file || visited.has(file)) continue
  visited.add(file)

  if (!fs.existsSync(file)) {
    fail('Missing production source file: ' + path.relative(root, file))
    continue
  }

  const content = fs.readFileSync(file, 'utf8')

  for (const match of content.matchAll(sourceImportPattern)) {
    const specifier = match[1]
    if (!specifier.startsWith('.')) continue
    const resolved = resolveLocal(file, specifier)
    if (resolved) queue.push(resolved)
  }

  for (const match of content.matchAll(assetPattern)) {
    const raw = match[0]
    const clean = raw.split(/[?#]/, 1)[0]
    const relative = clean.slice(1)
    if (!assets.has(relative)) assets.set(relative, new Set())
    assets.get(relative).add(path.relative(root, file).replaceAll(path.sep, '/'))
  }
}

const extensionCounts = new Map()

for (const [relative, sources] of assets) {
  const absolute = path.join(publicRoot, relative)
  if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) {
    fail('Referenced asset does not exist: /' + relative + ' (from ' + [...sources].join(', ') + ')')
    continue
  }

  const ext = path.extname(relative).toLowerCase() || '<none>'
  extensionCounts.set(ext, (extensionCounts.get(ext) ?? 0) + 1)
}

console.log('[assets] PASS: scanned ' + visited.size + ' production source files; found ' + assets.size + ' referenced public assets.')
for (const [ext, count] of [...extensionCounts].sort()) {
  console.log('[assets]   ' + ext + ': ' + count)
}

const pngs = [...assets.keys()].filter((asset) => path.extname(asset).toLowerCase() === '.png')
if (pngs.length) {
  console.log('[assets] INFO: PNG references remain in production source:')
  for (const png of pngs) console.log('[assets]   /' + png)
}
