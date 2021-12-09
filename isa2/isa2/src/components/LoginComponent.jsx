import React, { Component } from 'react';
import LoginService from '../services/LoginService';
import axios from 'axios';

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state={
           email: '',
           password: ''
            
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.login = this.login.bind(this);
        this.register=this.register.bind(this);
        this.register=this.registeruser.bind(this);
        this.use=this.use.bind(this);
        
    }
    login(){
        axios
        .get("http://localhost:8080/api/v1/login" + "/" + this.state.email + "/" + this.state.password)
        .then(response => {
            localStorage.setItem('activeUser',JSON.stringify(response.data));
            
            let activeUser =  JSON.parse(localStorage.getItem('activeUser'))
            switch(activeUser.type){
                case 'fishing_instructor':
                    this.props.history.push(`/fishinginstructorprofile`);
                break;
    
                case 'ship_owner':
                    this.props.history.push(`/shipownerprofile`);
                break;
    
                case 'cottage_owner':
                    this.props.history.push('/cottageownerprofile');
                break;
    
                case 'user':
                    this.props.history.push(`/userprofile`);
                break;
                case 'admin':
                    this.props.history.push(`/adminprofile`);
                break;
                default :
                
            }
            
        })
        .catch(error=>{
            console.log("Greska.")	
            alert("Uneti nevalidni ili nepostojeci parametri, pokusajte ponovo.")
            window.location.reload()
            
        })
        
    }
       
        
    


    registeruser(){
        this.props.history.push('/registeruser');
    }
    register(){
        this.props.history.push('/register');
    }
    use(){
        this.props.history.push('/use')
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }


    componentDidMount(){
       // localStorage.removeItem('activeUser');
        localStorage.removeItem('activeCottage');
        localStorage.removeItem('activeRoom');
        
    }
   
    render() {
        return (
            <div><br/><br/><br/><br/>
                <div className="container">
                    
                    <div className="logindiv">
                        <h3 className="text-center"> LOGIN </h3>
                
                        <form id="myForm">
                            <div className="form-group">
                                <label> Email: </label>
                                <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} type="text"/>
                                <label> Password: </label>
                                <input placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler} type="text"/>
                                    
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.login()}>Login</button></div>
                            </div>
                        </form>
                            
                    </div>
                   
                    
                    
                
                </div> 
                <p className="noProfile">You do not have a profile?</p><br/>
                <button className="registeruserbtn" onClick={this.registeruser}> Register here.</button><br/>
                <button className="usebtn" onClick={this.use}> Use without login.</button>

                <button className="registerbtn" onClick={this.register}> Register as adviser or instructor.</button>
                
            </div>
        );
    }
}

export default LoginComponent;