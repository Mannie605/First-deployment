// import './App.css'
// import './App2.css'
// import './App3.css'
import './Login.css'

import Rules from './Component/Rules.jsx'
import Counter from './Component/Counter.jsx'
import Counter2 from './Component/Counter2.jsx'
import ClassComponent from './Component/ClassComponent.jsx'
import Greeting from './Component/Greeting.jsx'
import Greeting2 from './Component/Greeting2.jsx'
import ClassGreeting from './Component/ClassGreeting.jsx'
import Button from './Component/Button.jsx'
import Css from './Component/Css.jsx'
import Parent from './Component/Parent.jsx'
import Timer from './Component/Timer'
import DataFetching from "./Component/DataFetching"
import Navbar from './Component/Navbar.jsx'
import AxiosFetch from './Component/AxiosFetch.jsx'
import ControlledInput from './Component/ControlledInput.jsx'
import TodoApp from './Component/TodoApp.jsx'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Component/Home.jsx"
import About from './Component/About.jsx'
import Dashboard from './Component/Dashboard.jsx'
import Settings from './Component/Settings.jsx'
import Profile from './Component/Profile.jsx'
import UserProfile from './Component/UserProfile.jsx'
import NotFound from './Component/NotFound.jsx'
import ProtectedRoute from './Component/ProtectedRoute.jsx'
import SignIn from './Component/Login.jsx'
// import ThemedButton from './context/ThemedButton.js'



function App() {
  // const handleClick = () => alert("Button clicked");
  const isAuthenticated = true;

    
  return (
    <>
      {/* <Rules /> */}
      {/* {/* <Counter/> */}
     {/* <Counter2/>
      <ClassComponent/>
      <Greeting name="John" age="40"/>
      <Greeting2/>
      <ClassGreeting name="Manny"/> 
      <Greeting3/>
    <Button label="Submit" color="green" onClick={handleClick} />
    <Button label="Cancel" color="Red" onClick={() => alert("Cancelled")} />
      <Css />
      <Parent message= "Message from Grand pa" />  */}
      {/* <Timer /> */}
      {/* <DataFetching /> */}
      {/* <Navbar /> */}
      {/* <AxiosFetch /> */}
      {/* <ControlledInput /> */}
      {/* <TodoApp /> */}
      {/* <Navbar2 /> */}
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="settings" element={<Settings />} />

        <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute isAuth={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
        >
        <Route path="profile/:id" element={<Profile />} />
        </Route>

        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/old-path" element={<Navigate to="/" />} />.
      </Routes>
    </>
  );
}

export default App;

