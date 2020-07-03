import React,{Component} from 'react';

import Sidemenu from './Sidemenu';

class About extends Component{
    /* constructor(){
        super()
    } */
    render () {
        return (
            <div>
            <Sidemenu />
            <div>About</div>
            </div>
        );
    }
}

export default About;