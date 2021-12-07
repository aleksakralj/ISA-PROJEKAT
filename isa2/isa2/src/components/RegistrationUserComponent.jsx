import React, { Component, useState } from 'react';



class RegistrationUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            adress: '',
            city: '',
            country: '',
            phonenumber: '',
            hiddenRegistration: false,
            shownRegistration: true


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

        this.register = this.register.bind(this);

    }
    register() {
        this.props.history.push('/registrationwait');
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
        this.setState({ firstname: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastname: event.target.value });
    }

    changeAdressHandler = (event) => {
        this.setState({ adress: event.target.value });
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    changeCountryHandler = (event) => {
        this.setState({ country: event.target.value });
    }

    changePhoneNumberHandler = (event) => {
        this.setState({ phonenumber: event.target.value });
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
                            <label style={{ position: 'absolute', top: '330px', left: '2px', fontSize: '23px' }}> Adress: </label>
                            <label style={{ position: 'absolute', top: '380px', left: '2px', fontSize: '23px' }}> City: </label>
                            <label style={{ position: 'absolute', top: '430px', left: '2px', fontSize: '23px' }}> Country: </label>
                            <label style={{ position: 'absolute', top: '480px', left: '2px', fontSize: '23px' }}> Phone number: </label>
                        </div>

                        <div style={{  width: '220px', height: '500px', position: 'absolute', top: '42px', left: '178px' }}>
                            <input style={{ position: 'absolute', top: '35px' }} placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                            <input style={{ position: 'absolute', top: '85px' }} placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler} />
                            <input style={{ position: 'absolute', top: '135px' }} placeholder="Confirm Password" name="password2" className="form-control" value={this.state.password2} onChange={this.changePassword2Handler} />
                            <input style={{ position: 'absolute', top: '185px' }} placeholder="FirstName" name="firstname" className="form-control" value={this.state.firstname} onChange={this.changeFirstNameHandler} />
                            <input style={{ position: 'absolute', top: '235px' }} placeholder="LastName" name="lastname" className="form-control" value={this.state.lastname} onChange={this.changeLastNameHandler} />
                            <input style={{ position: 'absolute', top: '285px' }} placeholder="Adress" name="adress" className="form-control" value={this.state.adress} onChange={this.changeAdressHandler} />
                            <input style={{ position: 'absolute', top: '335px' }} placeholder="City" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler} />
                            <input style={{ position: 'absolute', top: '385px' }} placeholder="Country" name="country" className="form-control" value={this.state.country} onChange={this.changeCountryHandler} />
                            <input style={{ position: 'absolute', top: '435px' }} placeholder="PhoneNumber" name="phonenumber" className="form-control" value={this.state.phonenumber} onChange={this.changePhoneNumberHandler} />
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
                                        <input name="roleRadioButton" type='radio'></input>
                                        <input name="roleRadioButton" type='radio'></input>
                                        <input name="roleRadioButton" type='radio'></input>
                                        <input name="roleRadioButton" type='radio'></input>
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