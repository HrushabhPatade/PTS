import { Link } from "react-router-dom";
import pts from "./PTS.jpeg"


function NavBar(){


	return(
		<>
		<center>
		<div className="nav nav_top">
        		<div className="logo">
            		<Link to ="/"><img src={ pts }  width="80"/></Link>
        		</div>
        		<div className="nav_side ">
            	<Link to ="/about">About Us</Link>
            	<Link to ="/services">Services</Link>
            	<Link to ="/contact">Contact Us</Link>
            	<Link to ="/login">Login</Link>
				<Link to ="/registration">Reg</Link>
				{/* //conditionalrendering changepassword */}
        		</div>
    	</div>
		</center>




		</>
	);
}
export default NavBar;