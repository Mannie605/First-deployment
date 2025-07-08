import axios from "axios";
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.post("https://first-deployment-gi3z.onrender.com/user/login", {
                email,
                password,
            });
            console.log(res.data);
            localStorage.setItem("Token", res.data.token);
            navigate("/")
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 404) {
                alert(" Login failed: This user does not exist.");
            } else {
            alert("something went wrong. please try again.");
            }
        }
    };
    return (
        <div className="login-page">
        <form className="login-card" onSubmit={handleSubmit}>
            <div className="header">
                <h2>Hello Techie, Welcome Back. </h2>
            </div>
            <div className="header2">
                <h2>Sign In</h2>
            </div>

            <div className="ran">
            < input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="tall">
            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />      
            </div>

            <div className="options">
                <label>
                    <input className="toy" type="checkbox" />
                    Remember me
                </label>
            <a className="forgot" href="#">Forgot Password</a>
                </div>   

            <button type="submit">Sign In</button>

            <div className="line-with-text">
            <span>Sign up here </span>
            </div>

            <p className="signup">
                You do not have an account? <a href="btn">Sign up</a>
            </p>
        </form>
        </div>
    );
};

export default SignIn;

// import useFormInput from "../hooks/useFormInput";
// function SignIn () {
//     const navigate = useNavigate();
//     const email = useFormInput("");
//     const password = useFormInput("");

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         console.log(email);

//         try {
//             const res = await axios.post("http://localhost:2468/user/login" {
//                 email: email.value,
//                 password: password.value,
//             });
//             console.log(res.data);
//             localStorage.setItem("Token", res.data.token);
//                 navigate("/")
//         }   catch (error) {
//             console.log(error);
//         }
//     };

//      return (
//                 <form onSubmit={handleLogin}>
//                     <div>
//                         <label>Email</label>
//                         <input type="text" {...email} />
//                     </div>
//                     <div>
//                         <label>Password</label>
//                         <input type="password" {...password} />
//                     </div>
//                     <button type="submit">Login</button>
//                 </form>
//            );
// };
