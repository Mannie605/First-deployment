import React from 'react'
import GloLogo from '../Media/GloLogo.png'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faSignal, faArrowUp, faArrowDown, faTv, faBatteryHalf, faWifi, faBolt } from '@fortawesome/free-solid-svg-icons';
 

function Navbar () {
    return (
        <div className='Container'>
            <div className="menu-bar">
            <img src = {GloLogo} alt ='Glo Logo' className='Logo'/>
            <div className="Language">
                <select>
                    <option>English</option>
                    <option>Yoruba</option>
                    <option>Igbo</option>
                    <option>Hausa</option>
                </select>
                <a className="Help" href="#">Help</a>
                <a className="Login" href="#">Login</a>
                </div>
                <div className='Icons'>
                    <div className='Icon1'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <div className='Icon2'>
                    <FontAwesomeIcon icon={faSignal}/>
                    </div>
                    <div className='Icon3'>
                    <FontAwesomeIcon icon={faArrowUp}/>
                    <FontAwesomeIcon icon={faArrowDown}/>
                    </div>
                    <div className='Icon4'>
                    <FontAwesomeIcon icon={faTv}/> 
                    </div>
                    <div className='Icon5'>
                    <FontAwesomeIcon icon={faBatteryHalf}/> 
                    </div> 
                </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Statistics</a></li>
                <li><a href="#">SMS</a></li>
                <li><a href="#">Selfcare/USSD</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
            </div>
            
            <div className="Glo">
            <h1>Glo</h1>
            </div>
            <img src = {GloLogo} alt ='Glo Logo' className='Pagelogo'/>
            <a className="Connected" href="#">Connected</a>
            <br>
            </br>
            <a className="Connection" href="#">Connection Settings</a>
            <div className='Wifi'>
            <FontAwesomeIcon icon={faSignal}/>
            </div>
            <div className='Go'>
                <h1>4G</h1>
            </div>
            <div className='Arrow'>
            <FontAwesomeIcon icon={faArrowDown}/>
            <FontAwesomeIcon icon={faArrowUp}/>
            </div>
            <div className='Network'>
            <FontAwesomeIcon icon={faWifi}/>
            </div>
            <div className='Pawpaw'>
                <h5></h5>
            </div>
            <div className='Open'>
                <h1>bolt</h1>
            </div>
            <div className='New'>
            <FontAwesomeIcon icon={faBolt}/>
            </div>
            <div className="footer-container">
                <div className="footer">
                    <div className="footer-heading footer-1">
                        <h3><a className="Start" href="#">Current Connection</a></h3>
                        <h5><a className="Data" href="#" >Upload/Download:  64.16 MB / 601.89 MB</a></h5> 
                        <h5><a className="Dan" href="#">Duration:  03:41:37</a></h5>
                    </div>
                    <div className="footer-heading footer-2">
                        <h3><a className="Status" href="#">WLAN status</a></h3>
                        <h5><a className="On" href="#">WLAN status:  ON</a></h5>
                        <h5><a className="Off" href="#">Current User:  2</a></h5> 
                    </div>
                    <div className="footer-heading footer-3">
                        <h3><a className="Info" href="#">Previous login information</a></h3>
                        <h5><a className="Tick" href="#">IP address:   Log in to view</a></h5>  
                        <h5><a className="Logout" href="#">Time:  Log in to view</a></h5>  
                        <h5><a className="Login-p" href="#">Status:   Log in to view</a></h5>  
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default Navbar;