import React from 'react';
import { NavLink } from 'react-router-dom';
import Wblogo from '../src/images/logo-wanderer.svg';

const Navbar = () => {
    return(
        <>         

            <div className="container wb-navbar">                  
                    
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink className="navbar-brand" to="/Home"><img src={Wblogo} alt="Wanderer Bucket" /></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/FindDestination" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Explore Destiny
                                </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/FindDestination">Epic Trekking</NavLink>
                                <NavLink className="dropdown-item" to="/FindDestination">Epic Roads</NavLink>
                            <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/FindDestination">Ancient Architecture</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>                            
                        </li>
                        <li className="nav-item">                             
                            <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
                        </li>
                        
                         
                        </ul>
                         
                    </div>
                    </nav>
                    
                    
                    
                    
                   

                </div> 

        </>
    )
}

export default Navbar;