import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";



function App() {
  return (
     <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
        <Route exact path="/" element={ <Home /> }></Route>
        <Route path="Create/" element={ <Create />}> </Route>
        </Routes>
      </div>
     </div>
     </Router>
   
    
  );
}

export default App;
