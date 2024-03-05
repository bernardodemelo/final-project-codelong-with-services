import { Link } from "react-router-dom";
function HomePage(){
    return (
      <div>
        <h3>Planets Application</h3>
        <p>Welcome to my Application</p>
        <div className="links-div">
          <Link to="/signup">Signup</Link>
          <Link to="/signup">Login</Link>
        </div>
      </div>
    );
}

export default HomePage;