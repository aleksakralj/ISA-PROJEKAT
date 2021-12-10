import React, { Component } from 'react';

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
        .post("http://localhost:8080/api/v1/login/" + this.state.email + "/" + this.state.password)
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
                    //treba da resetuje lozinku
                    if(activeUser.password=="password"){
                     this.props.history.push(`/adminchangepassword`)   
                    }
                    else this.props.history.push(`/adminprofile`);
                break;

                case 'main_admin':
                    this.props.history.push(`/mainadminprofile`);
                break;
                
                default :
                
            }
            
        })
        .catch(error=>{
            console.log("Error")	
            alert("Invalid email and/or password")
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
                    
                    <div style={{position: 'relative', top: '0px'}} className="logindiv">                        
                        <h3 style={{position: 'relative', top:'20px'}} className="text-center"> LOGIN </h3>
                
                        <form id="myForm">
                            <div className="form-group">

                                <br></br>
                                <label style={{position: 'relative', left:'10px'}}> Email: </label>
                                <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                
                                <label style={{position: 'relative', left:'10px'}}> Password: </label>
                                <input placeholder="Password"  name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>

                                    
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.login()}>Login</button></div>
                            </div>

                            
                        </form>
                            
                    </div>
                    
                    <div style={{position: 'relative',top: '40px',left:'550px'}}>
                        <label> Don't have an account? </label> <br></br>
                        <button style={{position: 'relative',left:'30px'}} className="loginbtn" onClick={event =>  window.location.href='/registeruser'} > Register</button>
                    </div>
                    
                
                </div>                 
            </div>
        );
    }
}

export default LoginComponent;