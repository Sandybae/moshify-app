import Collapsibles from "./Collapsibles";

const Navbar = () => {

    return ( 
        <div className="navbar">
            <div className="left-navbar">
                <img className="page-logo" src="./logo.svg" alt="" />
            </div>
            <div clssName="right-navbar">
            <Collapsibles/>
            </div>
        </div>
     );
}
 
export default Navbar;