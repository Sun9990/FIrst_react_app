import Login from "./Login";
import ContactUs from "./ContactUs";
import Navbar from './Navbar';
import About from './About';
import TextForm from './TextForm';
import PageNotFound from './PageNotFound';
import Home from "./Home";
import Protected from "./Protected";
import Signup from "./Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const RoutePath = ()=>{
    return(
<Router>
<Navbar />
<div className="container my-3" >
<Routes>
<Route exact path="/signup" Component={Signup}/> 
<Route exact path="/" Component={Login}/> 
<Route exact path="/login" Component={Login}/> 
<Route exact path="/home"  element = {<Protected Component={Home}/>}/>
<Route exact path="/about" element = {<Protected Component={About}/>}/>
<Route exact path="/textform" element = {<Protected Component={TextForm}/>}/>
<Route exact path="/contactus" element = {<Protected Component={ContactUs}/>}/>
<Route path="*" Component={PageNotFound}/>
</Routes> 
</div>
</Router>
    );
};

export default RoutePath;
