// Dashboard.js
import React,{Component} from 'react'
import Sidemenu from './Sidemenu';
//import { Router, Route } from 'react-router-dom';
//import Sidemenu from './Sidemenu'

class Dashboard extends Component{
    /* constructor(){

    } */
    render () {
        return (
            <div>
                <Sidemenu />
                <div>Dashboard</div>
            </div>
            
        );
    }
}

export default Dashboard;