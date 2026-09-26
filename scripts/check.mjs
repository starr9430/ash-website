import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const srcDir = path.join(root, 'src')
const requiredFiles = [
  'index.html',
  'package.json',
  'vite.config.js',
  'src/main.jsx',
  'src/App.jsx',
]

const fail = (message) => {
  console.error(`[check] FAIL: ${message}`)
  process.exitCode = 1
}

for (const relative of requiredFiles) {
  if (!fs.existsSync(path.join(root, relative))) {
    fail(`Missing required file: ${relative}`)
  }
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
for (const script of ['dev', 'build', 'check', 'preview']) {
  if (!packageJson.scripts?.[script]) {
    fail(`Missing npm script: ${script}`)
  }
}

const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
if (!/<div\s+id=["']root["']\s*><\/div>/i.test(indexHtml)) {
  fail('index.html does not contain the expected React root element')
}

const mainSource = fs.readFileSync(path.join(root, 'src/main.jsx'), 'utf8')
const mainEntry = mainSource.match(/from\s+['"]\.\/App['"]/)
if (!mainEntry) {
  fail('src/main.jsx does not import ./App')
}

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const absolute = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(absolute) : [absolute]
  })
}

const sourceFiles = walk(srcDir).filter((file) => /\.(?:js|jsx|mjs|css)$/i.test(file))
const sourceImportPattern = /(?:import\s+(?:(?:[^'"]*?)\s+from\s+)?|export\s+[^'"]*?from\s+)['"]([^'"]+)['"]/g
const extensions = ['', '.js', '.jsx', '.mjs', '.css', '.json']

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf8')

  for (const match of content.matchAll(sourceImportPattern)) {
    const specifier = match[1]
    if (!specifier.startsWith('.')) continue

    const base = path.resolve(path.dirname(file), specifier)
    const candidates = extensions.map((ext) => base + ext)
    candidates.push(...extensions.map((ext) => path.join(base, `index${ext}`)))

    if (!candidates.some((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile())) {
      const displayFile = path.relative(root, file).replaceAll(path.sep, '/')
      fail(`Unresolved local import "${specifier}" in ${displayFile}`)
    }
  }
}

if (process.exitCode) {
  process.exit(process.exitCode)
}

console.log(`[check] PASS: ${sourceFiles.length} source files scanned; required files, npm scripts, React entry, and local imports are intact.`)
