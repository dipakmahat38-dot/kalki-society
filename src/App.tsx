import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Objectives from './components/Objectives'
import Truth from './components/Truth'
import Foundation from './components/Foundation'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Objectives />
        <Truth />
        <Foundation />
      </main>
      <Footer />
    </>
  )
}
