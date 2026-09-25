import Header from './components/Header'
import Hero from './sections/Hero'
import FeatureStrip from './sections/FeatureStrip'
import Coverage from './sections/Coverage'
import Intro from './sections/Intro'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <Coverage />
        <Intro />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
