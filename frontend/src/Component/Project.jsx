import { Link } from 'react-router-dom'
const Project = () => {

     return (
       <nav>
        <ul>
            <h1>Project Page</h1>
            <p>Go to:</p>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/About">About</Link></li>
        </ul>
       </nav>
    );
}

export default Project;