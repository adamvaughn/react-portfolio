import Intro from "./components/intro/intro"
import About from "./components/about/About"
import ProjectList from "./components/projectList/ProjectList"
import Contact from "./components/contact/Contact"

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default App;