import { Link } from "react-router-dom";

function Settings() {
    return (
        <>
        <h2>Settings Section</h2>
        <Link to="/">
                <button variant="warning">Go Back to Home</button>
        </Link>
        </>
    )
    
};

export default Settings;