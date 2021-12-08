import React, { Component, useState } from 'react';
import RegistrationRequestService from '../services/RegistrationRequestService';


class RegistrationUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            country: '',
            dateOfBirth: '',
            phoneNumber: '',
            hiddenRegistration: false,
            shownRegistration: true,
            type: 'Client'


        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePassword2Handler = this.changePassword2Handler.bind(this);

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);

        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);

        this.register = this.register.bind(this);

    }
    register= (e)=> {


        

        e.preventDefault();

        let regWait = {email:this.state.email, password:this.state.password, firstName:this.state.firstName,lastName:this.state.lastName,address:this.state.address,city:this.state.city,country:this.state.country,dateOfBirth:this.state.dateOfBirth,phoneNumber:this.state.phoneNumber,type:this.state.type}
        console.log('registrationWait =>' + JSON.stringify(regWait));

        RegistrationRequestService.createRegistrationRequest(regWait).then(res=> {
            this.props.history.push('/registrationwait')
        });
        
      
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changePassword2Handler = (event) => {
        this.setState({ password2: event.target.value });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    changeCountryHandler = (event) => {
        this.setState({ country: event.target.value });
    }
    changeDateOfBirthHandler = (event) => {
        this.setState({dateOfBirth: event.target.value});
    }
    changePhoneNumberHandler = (event) => {
        this.setState({ phoneNumber: event.target.value });
    }
    changeUserType = (event) => {
        this.setState({type:event.target.value});
    }
    revealHiddenRegistrations() {
        this.setState({
            hiddenRegistration: true,
            shownRegistration: false
            
        })
    }
    hideHiddenRegistration() {
        this.setState({
            hiddenRegistration: false,
            shownRegistration: true
        })
    }
    render() {
        return (
            <div>
                <div className="container">


                    <div style={{ position: 'relative', top: '30px', left: '220px',  height: '600px', width: '900px' }}>
                        <h1 className="text-center"> REGISTRATION </h1>

                        <div style={{  width: '180px', height: '500px' }}>
                            <label style={{ position: 'absolute', top: '80px', left: '2px', fontSize: '23px' }}> Email: </label>
                            <label style={{ position: 'absolute', top: '130px', left: '2px', fontSize: '23px' }}> Password: </label>
                            <label style={{ position: 'absolute', top: '180px', left: '2px', fontSize: '23px' }}> Password again: </label>
                            <label style={{ position: 'absolute', top: '230px', left: '2px', fontSize: '23px' }}> First name: </label>
                            <label style={{ position: 'absolute', top: '280px', left: '2px', fontSize: '23px' }}> Last name: </label>
                            <label style={{ position: 'absolute', top: '330px', left: '2px', fontSize: '23px' }}> Address: </label>
                            <label style={{ position: 'absolute', top: '380px', left: '2px', fontSize: '23px' }}> City: </label>
                            <label style={{ position: 'absolute', top: '430px', left: '2px', fontSize: '23px' }}> Country: </label>
                            <label style={{ position: 'absolute', top: '480px', left: '2px', fontSize: '23px' }}> Phone number: </label>
                            <label style={{ position: 'absolute', top: '530px', left: '2px', fontSize: '23px' }}> Date of Birth: </label>
                        </div>

                        <div style={{  width: '220px', height: '500px', position: 'absolute', top: '42px', left: '178px' }}>
                            <input style={{ position: 'absolute', top: '35px' }} placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                            <input style={{ position: 'absolute', top: '85px' }} placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler} />
                            <input style={{ position: 'absolute', top: '135px' }} placeholder="Confirm Password" name="password2" className="form-control" value={this.state.password2} onChange={this.changePassword2Handler} />
                            <input style={{ position: 'absolute', top: '185px' }} placeholder="FirstName" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                            <input style={{ position: 'absolute', top: '235px' }} placeholder="LastName" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                            <input style={{ position: 'absolute', top: '285px' }} placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler} />
                            <input style={{ position: 'absolute', top: '335px' }} placeholder="City" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler} />
                            <input style={{ position: 'absolute', top: '385px' }} placeholder="Country" name="country" className="form-control" value={this.state.country} onChange={this.changeCountryHandler} />
                            <input style={{ position: 'absolute', top: '435px' }} placeholder="PhoneNumber" name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} />
                            <input type="date" style={{position: 'absolute', top:'490px', width:'220px'}} name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler} />
                        </div>

                    {
                        this.state.shownRegistration?
                        <div style={{  width: '200px', height: '90px', position: 'absolute', top: '440px', left: '520px' }}>
                            <button style={{ position: 'absolute', top: '0px', left: '60px' }} onClick={this.register}>Regiser</button>
                            <button style={{ position: 'absolute', top: '40px', left: '10px' }} onClick={()=>this.revealHiddenRegistrations()}> Regiser with privilages</button>
                        </div>
                        :null
                    }
                        {
                            this.state.hiddenRegistration?
                                <div style={{  width: '250px', height: '200px', position: 'absolute', top: '150px', left: '500px' }}>
                                    <label style={{ fontSize: '18px', position: 'absolute', left: '52px' }}>Choose your role:</label>
                                    <div style={{  width: '20px', height: '100px', position: 'absolute', left: '50px', top: '40px' }}>
                                        <input name="roleRadioButton" value='Administrator' type='radio'></input>
                                        <input name="roleRadioButton" value='Fishing instructor' type='radio' onChange={this.changeUserType}></input>
                                        <input name="roleRadioButton" value='Ship owner' type='radio' onChange={this.changeUserType}></input>
                                        <input name="roleRadioButton" value='Cottage owner' type='radio' onChange={this.changeUserType}></input>
                                    </div>

                                    <div style={{  width: '140px', height: '100px', position: 'absolute', top: '40px', left: '70px' }}>
                                        <label>Administrator</label>
                                        <label>Fishing instructor</label>
                                        <label>Ship owner</label>
                                        <br></br>
                                        <label>Cottage owner</label>
                                    </div>

                                    <div style={{  width: '245px', height: '50px', position: 'absolute', top: '145px' }}>
                                        <button style={{ height: '30px', width: '80px', position: 'absolute', top: '5px', left: '35px' }} onClick={this.register}> Register</button>
                                        <button style={{ height: '30px', width: '80px', position: 'absolute', top: '5px', left: '135px' }} onClick={() => this.hideHiddenRegistration()} >Cancel</button>
                                    </div>
                                </div>
                            : null
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default RegistrationUserComponent;