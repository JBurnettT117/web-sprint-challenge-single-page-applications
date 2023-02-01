import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div className="image">
            <p className="pizzatext">Your favorite food, delivered while coding</p>
            <div className="imgButton">
                <Link to="/pizza" id="order-pizza">Pizza?</Link>
            </div>
        </div>
    )
};
export default Main;