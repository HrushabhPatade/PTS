import { Link } from "react-router-dom";
import pts from "./PTS.jpeg"
import { IconName } from "react-icons/ci";


function Footer() {

    return (
        <>
            <div className="footer">
                <div className="footer_logo">
                    <Link to="/"><img src= {pts}  width="80 " /></Link>
                </div><br/>
                <div className="pages">
                    <h3>Pages</h3>
                    <Link to="/about">About Us</Link>|
                    <Link to="/services">Services</Link>|
                    <Link to="/contact">Contact Us</Link>|
                    <Link to="/loginc">Login</Link>
                </div><br/>
                <div className="doc">
                    <h3>Documents</h3>
                    <a href="">Privacy Policy</a>|
                    <a href="documents/Bank Details .pdf" target="_blank">Bank Details</a>|
                    <a href="documents/Terms and Conditions .pdf" target="_blank">Terms & Conditions</a>
                </div><br/>
                <div className="social">
                    <h3>Follow Us</h3>
                    <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>

                </div><br/>
                <div className="contact">
                    <h3>Contact Us </h3>
                    <a href="https://api.WhatsApp.com/send?phone=+919820459044 " target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                    <a href="tel: +919773148489" target="_blanks"><i className="fa fa-mobile" aria-hidden="true"></i></a>
                    <a href="mailto: nandupts@gmail.com" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>

                </div>
                <hr style={{ color: "white" }}/>
                <p style={{ textalign: "center" }}>Copyright &copy; 2022 PERFECT TELECOM SOLUTIONS . All Right Reserved</p>
            </div>


        </>
    );
}
export default Footer;