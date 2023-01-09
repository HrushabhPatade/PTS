import { Link } from "react-router-dom";
import g15 from "./dell g15.jpg";


function Card(props) {

    return (
        <div className="services_container">
            <div className="item">
                <div className="item_img">
                    <img src={props.image} />
                </div>
                <div className="item_content">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>

                </div>

                <div className="buy_now">
                    <Link to="/">Buy Now</Link>
                </div>

            </div>
        </div>

    );

}

export default Card;