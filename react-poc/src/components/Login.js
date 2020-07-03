//Login.js
import React,{Component} from 'react'
//import {useHistory} from "react-router-dom";
//import Dashboard from './Dashboard';

class Login extends Component{
    constructor(props){
        super(props);
        //const history = useHistory();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserIdChange = this.handleUserIdChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleUserIdChange=event=>{
        let inputValue = event.target.value;
        this.setState({userId:inputValue});
    }
    handlePasswordChange=event=>{
        let inputValue = event.target.value;
        this.setState({password:inputValue});
    }
    handleSubmit(){
        const requestOptions={
            method:'POST',
            headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json',
            }
        }
        fetch("http://localhost:9000/authenticate?userId="+this.state.userId+"&&password="+this.state.password,requestOptions).then(response=>{
            response.json().then(res=>{
                //console.log("Response "+ res.result);
                //this.setState({currentUser:res.user})

                if("Success"===res.result){
                    //dispach("SET_USER",{user:res.user,isAuthenticated:true});
                   // this.props.setUser({user:res.user,isAuthenticated:true})
                    this.setState({isAuthenticated: true})
                   window.location.href="/dashboard";
                }
            });
        }).then();
    }
    

    render(){
        return (
            <div>
                <label style={{fontFamily: 'Arial', fontSize: '18px', color: '#FF'}}>User ID </label>
                <input type="textbox" name="userId" placeholder ="Enter User ID" onChange={this.handleUserIdChange}/>
                <br/>
                <label style={{fontFamily: 'Arial', fontSize: '18px', color: '#FF'}}>Password </label>
                <input type="password" name="password" placeholder ="Password" onChange={this.handlePasswordChange}/>
                <br/>
                <button onClick={this.handleSubmit} >Login</button>
            </div>
        )
    }
}
export default Login;
