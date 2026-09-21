import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Coverage from './sections/Coverage'
import FeatureStrip from './sections/FeatureStrip'
import Capability from './sections/Capability'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Coverage />
        <FeatureStrip />
        <Capability />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
