
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Achi from './Achi';
import Contact from './Contact';
import Footer from "./Footer";
import {Route, Switch} from "react-router-dom"; 

function App() {
  return (
    <>
    <Nav />


    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/skills" component={Skills}/>
      <Route exact path="/achi" component={Achi}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    
    <Footer />
    
    
    

    
  
    
   
  
  
    </>
  );
}

export default App;
