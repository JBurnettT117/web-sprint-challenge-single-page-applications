import { Link } from "react-router-dom";

const Header = () => {
    return (
      <>
        <div className="Header">
          <div className="Title">
            <h1>Lambda Eats</h1>
          </div>
          <div className="Navigation">
            <Link className="Nav-link" to="/">Home</Link>
            <Link className="Nav-link" to="/pizza">Help</Link>
          </div>  
        </div>
        
      </>
    );
  };
  export default Header;