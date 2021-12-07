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
                    
                    <div style={{position: 'relative', top: '0px'}} className="logindiv">                        
                        <h3 style={{position: 'relative', top:'20px'}} className="text-center"> LOGIN </h3>
                
                        <form>
                            <div className="form-group">
                                <br></br>
                                <label style={{position: 'relative', left:'10px'}}> Email: </label>
                                <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                
                                <label style={{position: 'relative', left:'10px'}}> Password: </label>
                                <input placeholder="Password"  name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                    
                                <div className="center"><button className="loginbtn" onClick={this.login}>Login</button></div>
                            </div>

                            
                        </form>
                            
                    </div>
                    
                    <div style={{position: 'relative',top: '40px',left:'550px'}}>
                        <label> Don't have an account? </label> <br></br>
                        <button style={{position: 'relative',left:'30px'}} className="loginbtn">Register</button>
                    </div>
                    
                
                </div>                 
            </div>
        );
    }
}

export default LoginComponent;