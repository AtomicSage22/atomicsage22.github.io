import { HashRouter } from "react-router-dom"

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"
import Hero2 from "./components/Hero copy"

function App() {

  return (
    <HashRouter>
    <div className="relative z-0 bg-primary">
      <div className=" bg-hero-pattern bg-cover bg-no-repeat bg- overflow-x-hidden">
        <Navbar />
        <Hero2 />
        {/* <Hero /> */}
      </div>
      <About />
      <Experience />
      {/* <Tech /> */}
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </HashRouter>
  )
}

export default App
