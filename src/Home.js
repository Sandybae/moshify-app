import { Link } from "react-router-dom";
import Card from "./Card";
import Create from "./Create";
import CustomerSay from "./CustomerSays";
import Discount from "./discount";
import Footer from "./Footer";
import HostDetails from "./Hostdetails";
import PageBlog from "./PageBlog";
import PageGraph from "./PageGraph";
import PageGraph2 from "./PageGraph2";
import PageGraph3 from "./PageGraph3";
import PageGraph4 from "./PageGraph4";
import Testimonial from "./testimonial";

const Home = () => {

  
   const handleClick = () => {
    <Create/>
   }
   
  return ( 
    <div className="Home">
      <div className="home-block">
      <div className="left-home">
        <h1>Cloud Hosting for Pros</h1>
        <p>Deploy your website in less than 60 seconds</p>
        <Link to="./Create">
        <button 
        className="btn btn-accent"
        onClick={handleClick(<Create/>)}>GET STARTED</button>
        </Link>
      </div>
      <div className="right-home">
        <img className="page-banner" src="./banner.webp" alt=""/>
      </div>
      </div>
      
      <Discount />
      <Card />
      <HostDetails/>
      <PageGraph/>
      <PageGraph2/>
      <PageGraph3/>
      <PageGraph4/>
      <PageBlog/>
      <CustomerSay/>
      <Testimonial/>
      <Footer/>
    </div>
   );
}
 
export default Home; 