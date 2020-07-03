//App.js
import React,{Component} from 'react';
import './App.css';
//import Login from "./components/Login";

//import About from './components/About';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Team from './components/Team';
import {connect} from 'react-redux';

class App extends Component {
  
componentDidMount(){
  fetch("http://localhost:9000/users").then(response=>{
    response.json().then(res=>{
      //console.log(JSON.parse(JSON.stringify(res)));
       // this.props.users = this.props.users.concat(res);
       this.setState({users : res});
        console.log(this.state.users);
        console.log(this.props)
    });
}).then();
}
  render(){
    //console.log(this.props.users);
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/about" component={About}/>
          <Route path="/team" component={Team}/>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state=>{
  return{
      users: state.users,
      isAuthenticated : state.isAuthenticated,
      currentUser : state.currentUser
    }
}
const mapDispatchToProps =(dispach)=>{
  return{
    setUser :(userObj)=>dispach({type:"SET_USER",value:userObj}),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
