import NavBar from "./NavBar";
import Quote from "./Quote";
import Footer from "./Footer";

function Contact() {

    return (
        <>
            <center>
                <NavBar />

                <div className="contact_container" style={{top:"150px"}}>
                    <h2>Contact us</h2>
                    <div className="g_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.871137931129!2d72.98999557961379!3d19.200829881969604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b932b9b0f6fd%3A0x86258d696936bd6d!2sSomeshwar%20Society%20Rd%2C%20Manisha%20Nagar%2C%20Kalwa%2C%20Thane%2C%20Maharashtra%20400605!5e0!3m2!1sen!2sin!4v1672340202533!5m2!1sen!2sin" width="100%" height="600" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    <div className="contact_content"></div>
                    <p>
                        <b>Address : A/5, Gangeshwar Nivas, Chavan Chawl, Shivaji Nagar, TP Road, Bhandup (w) - 400 078 </b><br/><br/>
                        <b>Address : 3rd Floor, Flat No. 53, 5/29, Rangwala Bldg, Kika Street, Gulal Wadi, Mumbai - 400 004</b><br/><br/>
                        <b>Address : D/8, Someshwar Soc, Hanuman Tekdi, Manisha Nagar, Gate No-2, Kalwa (W), Thane- 400 605</b>
                    </p>
                    <p>
                        <b>Call : +91 9773148489, +91 9820459044</b></p>
                    <p>
                        <b>Mail : nandupts@gmail.com</b></p>
                    <p>
                        <b>GSTIN : 27ABSPP1746K1Z0</b></p>
                </div>

                <Quote />
                <Footer />

            </center>


        </>
    );
}

export default Contact;