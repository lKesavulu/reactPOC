import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
//import Dashboard from './Dashboard';
//import About from './About';
//import Team from './Team'
//import { Router } from 'react-router-dom/cjs/react-router-dom.min';

class Sidemenu extends Component{
    
    render () {
        return (
            
                <div>
                    <div width="30%">
                    
                        <div>
                            <ul>
                                <li>
                                    <NavLink to="/dashboard">DASHBOARD</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">ABOUT</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/team">TEAM</NavLink>
                                </li>
                            </ul>
                            {/* <Route path="/dashboard" Component={Dashboard}/>
                            <Route path="/about" Component={About}/>
                            <Route path="/team" Component={Team}/> */}
                        </div>
                    
                    </div>
                </div>
            
        );
    }
}

export default Sidemenu;