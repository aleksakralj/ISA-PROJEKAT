import React, { Component } from 'react';
import axios from 'axios';

class CottageAppointmentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            email: '',
            password: '',
            firstName:'',
            lastName:'',
            address: '',
            city:'',
            country:'',
            phoneNumber:'',
            type:'',
            
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
        
       
        
    }

    deleteprofile(id){

        axios.delete("http://localhost:8080/api/v1/users/" + id)
        this.logout();
    }
    
    logout(){
        localStorage.removeItem('activeUser')
        localStorage.removeItem('activeCottage')
        localStorage.removeItem('activeRoom')
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
        
        this.props.history.push(`/cottageaddappointment`);

    }
    
    AddQuickAppointment()
    {
        
        this.props.history.push(`/cottageaddquickappointment`);

    }
    email(){    
        this.props.history.push(`/email`);
    }


    componentDidMount(){

        
        localStorage.removeItem('activeRoom');
        let activeUser =  JSON.parse(localStorage.getItem('activeUser'))

            this.setState({
                id:activeUser.id,
            email: activeUser.email,
            password: activeUser.password,
            firstName:activeUser.firstName,
            lastName:activeUser.lastName,
            address: activeUser.address,
            city:activeUser.city,
            country:activeUser.country,
            phoneNumber:activeUser.phoneNumber,
            type:activeUser.type

            });
        
    }

    
    render() {
        return (
            <div>
                <div className="menu">
               <button onClick={()=>this.profile()}>Profile</button>
               <button onClick={()=>this.cottages()}>My cottages</button>
               <button>Cottage profile</button>
               <button onClick={()=>this.viewRooms(this.state.id)}>Rooms</button>
               <button onClick={()=>this.viewAppointmets(this.state.id)}>Appointments</button>
               <button className="menubtnLog"  onClick={()=>this.logout()}>Logout</button>
                </div>
                <div className="registrationdiv">
                    
                                

                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.AddAppointment()}>Add Appointment</button></div>
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.AddQuickAppointment()}>Add Quick Appointment</button></div>
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.email()}>Email</button></div>
                                <br/>

                </div>
            </div>

        )   ;
    }
}

export default CottageAppointmentComponent;