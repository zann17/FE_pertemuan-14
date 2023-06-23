import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
    return (
        <StyledNavbar>
        <div>
            <nav>
                <div>
                    <h1>Movie App</h1>
                </div>
                <div>
                <ul>
                <li><Link to="/" className="a">Home</Link></li>
                <li><Link to="/movie/create" className="a">Add Movie</Link></li>
                <li><Link to="/movie/popular" className="a">Popular</Link></li>
                <li><Link to="/movie/now" className="a">Now Playing</Link></li>
                <li><Link to="/movie/top" className="a">Top Rated</Link></li>
                </ul>
                </div>
            </nav>
        </div>
        </StyledNavbar>
    );
}

export default Navbar;