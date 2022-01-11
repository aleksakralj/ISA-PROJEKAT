import React, { Component } from 'react';
import axios from 'axios';

class ShipAppointmentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
                      
        }
      
        
    }

    deleteprofile(id){

        axios.delete("http://localhost:8080/api/v1/users/" + id)
        this.logout();
    }
    
    logout(){
        localStorage.clear();
        this.props.history.push(`/login`);
       
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

    AddAppointment()
    {
        
        this.props.history.push(`/shipaddappointment`);

    }
    
    AddQuickAppointment()
    {
        
        this.props.history.push(`/shipaddquickappointment`);

    }
    shipProfile(){
        this.props.history.push(`/shipprofileso`);
    }


    componentDidMount(){

    }

    
    render() {
        return (
            <div>
                <div className="menu">
               <button onClick={()=>this.profile()}>Profile</button>
               <button onClick={()=>this.ships()}>My ships</button>
               <button onClick={()=>this.shipProfile()}>Ship profile</button>
               
               <button>Appointments</button>
               <button className="menubtnLog"  onClick={()=>this.logout()}>Logout</button>
                </div>
                <div className="registrationdiv">
                    
                                

                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.AddAppointment()}>Add Appointment</button></div>
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.AddQuickAppointment()}>Add Quick Appointment</button></div>
                                

                </div>
            </div>

        )   ;
    }
}

export default ShipAppointmentComponent;