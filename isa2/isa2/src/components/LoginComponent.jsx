import React, { Component } from 'react';

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
        //ovde ce se raditi i proveravanje da li postoji i koji je on u bazi, rahimov video: 1:40
        this.props.history.push('/adminprofile');
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
    render() {
        return (
            <div><br/><br/><br/><br/>
                <div className="container">
                    
                    <div className="logindiv">
                        <h3 className="text-center"> LOGIN </h3>
                
                        <form>
                            <div className="form-group">
                                <label> Email: </label>
                                <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                <label> Password: </label>
                                <input placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                    
                                <div className="center"><button className="loginbtn" onClick={this.login}>Login</button></div>
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