import Hero2 from "./components/hero2"
import Hero from "./components/hero"
import Capabilities from "./components/capabilities"
import Works from "./components/works"
import Architecture from "./components/architecture"
import Workflow from "./components/workflow"
import Community from "./components/community"
import Footer from "./components/footer"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />  
      <Hero2 />
      <Capabilities />
      <Works />
      <Architecture />
      <Workflow />
      <Community />
      <Footer />
    </>
  )
}

export default App