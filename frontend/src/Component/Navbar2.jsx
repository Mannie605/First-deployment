import { Link, NavLink } from "react-router-dom";

function Navbar2() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active-link">
                    About Page
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar2;