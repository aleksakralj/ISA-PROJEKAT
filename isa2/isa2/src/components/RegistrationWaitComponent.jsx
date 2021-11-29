import React, { Component } from 'react';


class RegistrationWaitComponent extends Component {
    constructor(props){
    super(props)
   
    this.proceed=this.proceed.bind(this);
}
proceed(){
    this.props.history.push('/login'); //treba da ide na index str ondnosno na login page koji je na localhostu 
}
    render() {
        
        return (
            <div><br/><br/>
            
                <div className="container">
                    
                    <div className="registrationwaitdiv">
                        <h3 className="text-center"> WAIT </h3>
                
                        <form>
                            <div className="form-group">
                                <br/><br/>
                                <h3>Wait for administrator to confirm your registration.</h3><br/>
                                <button className="proceedbtn"  onClick={this.proceed}><h3>Then proceed to login page.</h3></button>
                               
                            </div>
                        </form>
                            
                    </div>
                   
                    
                    
                
                </div>
            </div>
        );
    }
}

export default RegistrationWaitComponent;