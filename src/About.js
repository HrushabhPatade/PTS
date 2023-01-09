import NavBar from "./NavBar";
import Quote from "./Quote";
import Footer from "./Footer";

function About() {

    return (
        <>
            <center>
                <NavBar />

                <div className="about_us">
                    <h2>About Us</h2>
                    <div className="about_content">
                        <p>We started our Company in 2005 in month of February with very less investment . Thanks to God and all the helping hands , with help of all this Today we are here to give the Best & Reliable Service . we provide service all over Mumbai and
                            in Down-Side too , such as Bhiwandi, Dombivali , Kalyan , Asangoan , etc . We have 2 offices located in Kalva & Bhandup .</p>
                    </div>

                    <hr />
                    <h2>Our Mission</h2>
                    <p>Our Mission is to scale our company service all over India & and give efficient and reasonable service at your Doorstep.</p>
                </div>
                <Quote />
                <Footer />

            </center>


        </>
    );
}

export default About;