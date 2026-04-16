import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Differentials from './components/Differentials'
import InstagramFeed from './components/InstagramFeed'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Differentials />
      <InstagramFeed />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
