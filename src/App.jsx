
import "../src/App.css"
import Navbar from "./component/Navbar"
import About from "./Pages/about page/About"
import HomeSec1 from "./Pages/Home page/HomeSec1"

const App = () => {
  return (<>
    <div className="sec-1">
      <Navbar />
      <HomeSec1 />
      <About />

    </div>
  </>)
}

export default App