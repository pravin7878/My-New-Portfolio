
import { Box } from "@chakra-ui/react"
import  "../src/App.css"
import HomeSec1 from "./Pages/HomeSec1"
import Navbar from "./component/Navbar"
import DIsplay from "./component/chaack/DIsplay"
// import { MyComponent } from "./component/Transition/Transition"
// import { MyTransition } from "./component/Transition/Transitio

import { ThreeDCardDemo } from "./test"

const App = ()=>{
  return(<>
  <div className="sec-1">
 <Navbar/>
  <HomeSec1/>


  </div>
  </>)
}

export default App