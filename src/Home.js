import NavBar from "./NavBar";
import Quote from "./Quote";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import repair from "./LRepair.jpg"
import victus from "./HP Victus.jpg";
import g15 from "./dell g15.jpg";
import omen from "./hp-omen-16.jpg";
import cs from "./Customer-Service2.png";
import c2900 from "./canon 2900.jpg";
import delldesk from "./dell desktop.jpg";
import nec from "./NEC.jpg";
import video from "./repairv.mp4";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

// const data =[
// 	{
// 	  title:'DELL G15',
// 	  specs: 'Dell Gaming G15 Ryzen Edition D560804WIN9W R5-5600H Win 11 + Office H&S 2021 8GB DDR4 512GB SSD NVIDIA® GEFORCE® RTX 3050 (4GB GDDR6) 15.6" FHD WVA AG 250 nits 120Hz Narrow Border Backlit Keyboard Orange Phantom Grey with speckles Dell Gaming Lite 1 Year Onsite Hardware',
	  
// 	},
	
//   ]

function Home() {

	const[product, setProduct] = useState([])

	useEffect( () =>{
		let urladd = "";
		axios.get(urladd)
		.then(res=> console.log(res))
		.catch(err => console.log(err))
	}, [])


	const myStyle = {
		backgroundImage: `url(${repair})`
		// background-Size: 'cover';
		// backgroundRepeat: 'no-repeat';
	}

	return (
		<>
			<center>
				<NavBar />
				<div className="main" style={myStyle} >
					{/* <img src={repair} /> */}
					<div className="main_content">
						<h2>We Service and Sales in Laptop, Desktop, Printer, Telecom system, etc</h2>
						<div className="btn">
							<Link to="/services">Services</Link>
						</div>
					</div>
				</div>
				<br />
				<div className="services">
					<h2>Our Services</h2>
					<div className="d-flex">
      					{
							product.map((a) =>(
								<>
								<Cards image={a.image} title={a.title} desc={a.desc} />
								</>
								)
							)

						}
      				</div>
					<div className="services_btn">
						<Link to="/services">Explore More Products</Link>
					</div>
				</div>

				<hr color="white"></hr>

				<div className="keypoint">
					<h2>Our Key Features</h2>
					<div className="key_container">
						<div className="key_content">
							<li>All Software installation and activation of Software will be done by us </li>
							<li>Door Step Delivery </li>
							<li>Microsoft Account creation and linking</li>
							<li>Any issues with product , we will directly contact with Manufacturer</li>
							<li>All necessary Software installation</li>
							<li>Best Customer Service</li>
						</div>
						<div className="key_img">
							<img src={cs} />
						</div>
					</div>
				</div>
				<div className="os">
					<h2>Our Other Services</h2>
					<div className="os_container">
						<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
							{/* <!-- Indicators --> */}
							<ol className="carousel-indicators">
								<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
								<li data-target="#carousel-example-generic" data-slide-to="1"></li>
								<li data-target="#carousel-example-generic" data-slide-to="2"></li>
							</ol>

							{/* <!-- Wrapper for slides --> */}
							<div className="carousel-inner" role="listbox">
								<div className="item active">
									<div className="item_img">
										<img src={c2900} />
									</div>
									<div className="item_content">
										<h3>Canon LBP2900</h3>
										<p>A robust printer with all the feature benefits, the LBP2900B fits into any small office environment while ensuring the equivalent of high 2 400 x 600dpi laser-quality and jam-free operations for perfect prints, fast.</p>
									</div>
								</div>
								<div className="item">
									<div>
										<img src={delldesk} />
									</div>
									<div className="item_content">
										<h3>Branded & Assembled Desktop</h3>
										<p>We also Sale Assembled and Branded Desktop PC with all customizition as needed for you. </p>
									</div>
								</div>
								<div className="item">
									<div>
										<img src={nec} />
									</div>
									<div className="item_content">
										<h3>EPBX & KTS System</h3>
										<p>We also give service for Telephone System and KTS System .</p>
									</div>
								</div>
							</div>

							{/* <!-- Controls --> */}
							<Link className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
								<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								<span className="sr-only">Previous</span>
							</Link>
							<Link className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
								<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
								<span className="sr-only">Next</span>
							</Link>
						</div>
					</div>
				</div>

				<hr />

				<div className ="team">
					<h2>Demo Service Video</h2>

					<div className="team_container">
						<div className="team_video">
							<video controls>
								<source src={ video } type="video/mp4"/>
							</video>
						</div>
						<div className="team_content">
							<p>This is a Demo Video of our work .</p>
						</div>
					</div>
				</div>
				<Quote/>
				<Footer/>

			</center>
		</>
	);
}
export default Home;