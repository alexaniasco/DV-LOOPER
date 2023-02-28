
import "./App.css";

import { Nav } from "./components/Nav";
import { Grid1 } from "./components/Grid1";

import {Route } from "react-router-dom";
import { Home } from "./components/Home";

import { HojaCodigo } from "./components/HojaCodigo";
function App() {
  return (
    <div className="App">
      <Nav></Nav>

  
      <Route exact path="/home" ><Home></Home></Route>
      <Route exact path="/codigo"><HojaCodigo/></Route>
      <Route exact path={"/landing"}><Grid1></Grid1></Route>
      
     
      
     
    
    </div>
  );
}

export default App;
