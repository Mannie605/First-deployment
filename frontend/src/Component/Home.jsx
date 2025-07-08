import { Link } from "react-router-dom";
import ThemedButton from "../context/ThemedButton";
import Form from "./Form";
import Login from "./Login";

function Home() {
    return (
        <>
        <h1>Welcome to Home page</h1>
        <ul>
            <li><Link to="/login">Login</Link></li>
             <li><Link to="/About">About</Link></li>
             <li><Link to="/Dashboard">Dashboard</Link></li>
             <li><Link to="/Project">Project</Link></li>
             <li><Link to="/Settings">Settings</Link></li>
        </ul>
        </>
    );
}

export default Home;