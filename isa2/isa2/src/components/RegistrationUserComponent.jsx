import React, { Component } from 'react';
import RegistrationRequestService from '../services/RegistrationRequestService';


class RegistrationUserComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            firstName:'',
            lastName:'',
            address: '',
            city:'',
            country:'',
            phoneNumber:'',
            type:'',
            reason: '', 
            password2:''
            
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePassword2Handler = this.changePassword2Handler.bind(this);

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);

        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this);
        this.changeReasonHandler=this.changeReasonHandler.bind(this);
        
        this.register=this.register.bind(this);
        
    }
    register= (e) => {
        e.preventDefault();
        let user = {email:this.state.email, password:this.state.password, firstName:this.state.firstName, lastName:this.state.lastName, address:this.state.address, city:this.state.city, country:this.state.country, phoneNumber:this.state.phoneNumber, type:this.state.type, reason:this.state.reason}
        console.log('user => ' + JSON.stringify(user));
       
        RegistrationRequestService.createRegistrationRequest(user).then(res=> {
            this.props.history.push('/registrationwait')
        });

        //provera da li su password i password2 isti NE RADI VAJ?
        /*
        if(user.password==password2.value){
            RegistrationRequestService.createRegistrationRequest(user).then(res=> {
                        this.props.history.push('/registrationwait')
                    });
        }
        else {
            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Popup content here !!</div>
            </Popup>
        } 
        */
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
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }
    changeCityHandler = (event) => {
        this.setState({city: event.target.value});
    }
    changeCountryHandler = (event) => {
        this.setState({country: event.target.value});
    }

    changePhoneNumberHandler = (event) => {
        this.setState({phoneNumber: event.target.value});
    }
    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }
    changeReasonHandler = (event) => {
        this.setState({reason: event.target.value});
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    
                    <div className="registrationdiv">
                        <h3 className="text-center"> REGISTRATION </h3>
                
                        <form>
                            <div className="form-group" style={{height:1000}}>
                                <label> Email: </label>
                                <input name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                <label> Password: </label>
                                <input  name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                <label> Password again: </label>
                                <input  name="password2" className="form-control" value={this.state.password2} onChange={this.changePassword2Handler}/>

                                <label> First name: </label>
                                <input  name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                <label> Last name: </label>
                                <input  name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                
                                <label> Address: </label>
                                <input  name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler}/>
                                <label> City: </label>
                                <input  name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler}/>   
                                <label> Country: </label>
                                <input  name="country" className="form-control" value={this.state.country} onChange={this.changeCountryHandler}/> 

                                <label> Phone number: </label>
                                <input  name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>

                                <label> Type: </label>
                                <input name="type" className="form-control" value={this.state.type} onChange={this.changeTypeHandler}/>

                                <label> Reason: </label>
                                <input  name="reason" className="form-control" value={this.state.reason} onChange={this.changeReasonHandler}/>
                                <div className="center"><button className="loginbtn" onClick={this.register}>Regiser</button></div>
                            </div>
                        </form>
                            
                    </div>
                   
                    
                    
                
                </div> 
            </div>
        );
    }
}

export default RegistrationUserComponent;