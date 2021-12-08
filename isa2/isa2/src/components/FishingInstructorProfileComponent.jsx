import React, { Component } from 'react';
import FishingInstructorService from '../services/FishingInstructorService';
class FishingInstructorProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            address:'',
            city:'',
            country:'',
            phoneNumber:''
            
        }
       
    }
    update(id) {
        
        let fishinginstructor = {email:this.state.email, password:this.state.password, firstName:this.state.firstName, lastName:this.state.lastName, address: this.state.address, city:this.state.city, country:this.state.country, phoneNumber:this.state.phoneNumber}
        console.log('fishinginstructor => ' + JSON.stringify(fishinginstructor));

        FishingInstructorService.updateFishingInstructor(fishinginstructor,id) ;
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
    componentDidMount(){
        FishingInstructorService.getFishingInstructorById(this.props.match.params.id).then((res) => {
            let fishinginstructor = res.data;
            this.setState({
                email:fishinginstructor.email,
                password:fishinginstructor.password,
                firstName:fishinginstructor.firstName,
                lastName:fishinginstructor.lastName,
                address: fishinginstructor.address,
                city:fishinginstructor.city,
                country:fishinginstructor.country,
                phoneNumber:fishinginstructor.phoneNumber

            });
        });
    }
    render() {
        return (
            <div>
                <div className="registrationdiv">
                    <br/><br/>
                                <label> Email: </label>
                                <input name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                <label> Password: </label>
                                <input name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                <label> Password again: </label>
                                <input name="password2" className="form-control" value={this.state.password2} onChange={this.changePassword2Handler}/>

                                <label> First name: </label>
                                <input name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                <label> Last name: </label>
                                <input name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                
                                <label> Address: </label>
                                <input name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler}/>
                                <label> City: </label>
                                <input name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler}/>   
                                <label> Country: </label>
                                <input name="country" className="form-control" value={this.state.country} onChange={this.changeCountryHandler}/> 

                                <label> Phone number: </label>
                                <input name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>

                                <br/>
                                <div className="center"><button className="loginbtn" onClick={this.update}>Update</button></div>

                </div>
            </div>
        );
    }
}

export default FishingInstructorProfile;