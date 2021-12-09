import React, { Component } from 'react';


class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state={
           email: '',
           password: ''
            
        }
        
        
    }
    log(){
        
           
            this.props.history.push('/login');
       
        
    }
       
        
    


  
    render() {
        return (
            <div><br/><br/><br/><br/>
                <div className="container">
                    
                    <div className="logindiv">
                        <h3 className="text-center"> LOGIN </h3>
                
                        <form id="myForm">
                            <div className="form-group">
                                
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.log()}>to login</button></div>
                            </div>
                        </form>
                            
                    </div>
                   
                    
                    
                
                </div> 
                
                
            </div>
        );
    }
}

export default LoginComponent;