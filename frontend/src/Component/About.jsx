import { Link } from 'react-router-dom'
const About = () => {
    return (
        <>
        <nav>
        <div>
          <h2>About</h2>
        <p>This is about page</p>
        <p>We sell Goods and Provide Services</p>
        </div>
        <ul>
          <li><Link to="/Settings">Settings</Link></li>
             <li><Link to="/Dashboard">Dashboard</Link></li>
             <li><Link to="/Project">Project</Link></li>
        </ul>
       </nav>
        </>
    );
}

export default About;