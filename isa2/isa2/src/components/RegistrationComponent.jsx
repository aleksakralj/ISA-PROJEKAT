import React, { Component } from 'react';

class RegistrationComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            firstname:'',
            lastname:'',
            adress: '',
            city:'',
            country:'',
            phonenumber:'',
            type:''
            
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePassword2Handler = this.changePassword2Handler.bind(this);

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        
        this.changeAdressHandler = this.changeAdressHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);

        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        
        this.changeTypeHandler = this.changeTypeHandler.bind(this);

        this.register=this.register.bind(this);
        
    }
    register(){
        this.props.history.push('/registrationwait');
    }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }
    changePassword2Handler = (event) => {
        this.setState({password2: event.target.value});
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstname: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastname: event.target.value});
    }

    changeAdressHandler = (event) => {
        this.setState({adress: event.target.value});
    }
    changeCityHandler = (event) => {
        this.setState({city: event.target.value});
    }
    changeCountryHandler = (event) => {
        this.setState({country: event.target.value});
    }

    changePhoneNumberHandler = (event) => {
        this.setState({phonenumber: event.target.value});
    }

    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    
                    <div className="registrationdiv">
                        <h3 className="text-center"> REGISTRATION </h3>
                
                        <form>
                            <div className="form-group">
                                <label> Email: </label>
                                <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                <label> Password: </label>
                                <input placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                <label> Password again: </label>
                                <input placeholder="Password" name="password2" className="form-control" value={this.state.password2} onChange={this.changePassword2Handler}/>

                                <label> First name: </label>
                                <input placeholder="FirstName" name="firstname" className="form-control" value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                <label> Last name: </label>
                                <input placeholder="LastName" name="lastname" className="form-control" value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                
                                <label> Adress: </label>
                                <input placeholder="Adress" name="adress" className="form-control" value={this.state.adress} onChange={this.changeAdressHandler}/>
                                <label> City: </label>
                                <input placeholder="City" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler}/>   
                                <label> Country: </label>
                                <input placeholder="Country" name="country" className="form-control" value={this.state.country} onChange={this.changeCountryHandler}/> 

                                <label> Phone number: </label>
                                <input placeholder="PhoneNumber" name="phonenumber" className="form-control" value={this.state.phonenumber} onChange={this.changePhoneNumberHandler}/>

                                <label> Type: </label>
                                <input placeholder="Type" name="type" className="form-control" value={this.state.type} onChange={this.changeTypeHandler}/>
                                
                                <div className="center"><button className="loginbtn" onClick={this.register}>Register</button></div>
                            </div>
                        </form>
                            
                    </div>
                   
                    
                    
                
                </div> 
            </div>
        );
    }
}

export default RegistrationComponent;