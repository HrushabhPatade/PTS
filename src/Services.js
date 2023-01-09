import NavBar from "./NavBar";
import Quote from "./Quote";
import Footer from "./Footer";
import Cards from "./Cards";
import pphone from "./panasonic phone.jpg";
import router from "./Router.jpg";
import av from "./antivirus.jpg";
import { useState, useEffect} from "react";
import axios from "axios";


function Services() {

    const[product, setProduct] = useState([])

	useEffect( () =>{
		let urladd = "";
		axios.get(urladd)
		.then(res=> console.log(res))
		.catch(err => console.log(err))
	}, [])

    return (
        <>
            <center>
                <NavBar />

                <div className="services" style={{ paddingtop: "100px" }}>
                    <h2>Our Services</h2>
                    <div className="services_container" style={{ paddingbottom: "50px" }}>

                        {/* <div className="services_container">
                            <div className="item">
                                <div className="item_img">
                                    <img src={pphone} />
                                </div>
                                <div className="item_content">
                                    <h3>Panasonic Phone</h3>
                                    <p>Panasonic KX-TG3611BX Digital Cordless Landline Phone (Black)</p>

                                </div>
                                <div className="buy_now">
                                    <a href="">Buy Now</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_img">
                                    <img src={router} />
                                </div>
                                <div className="item_content">
                                    <h3>Routers</h3>
                                    <p>All brand router available with us .</p>

                                </div>
                                <div className="buy_now">
                                    <a href="">Buy Now</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_img">
                                    <img src={av} />
                                </div>
                                <div className="item_content">
                                    <h3>Antivirus</h3>
                                    <p>All brand antivius available with us .</p>

                                </div>
                                <div className="buy_now">
                                    <a href="">Buy Now</a>
                                </div>
                            </div>
                        </div> */}
                        {/* <Cards/> */}
                        
      					{
							product.map((a) =>(
								<>
								<Cards image={a.image} title={a.title} desc={a.desc} />
								</>
								)
							)

						}
      				
                </div>
                </div>


                <Quote />
                <Footer />

            </center>
        </>
    );
}
export default Services;