import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Dashboard () {
    const {logOut, user} = useAuth();

    return(
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {user.name}</p>
            <Outlet />
            <Link to={`/dashboard/profile/${user.userId}`}>User Profile</Link>
            <button onClick={logOut}>Log Out</button>
            <div>
            <Link to="/">
                    <button variant="warning">Go Back to Home</button>
             </Link>
             </div>
        </div>
    );
}

export default Dashboard;