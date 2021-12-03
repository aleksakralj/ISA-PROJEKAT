import React, { Component } from 'react';
import RegistrationRequestService from '../services/RegistrationRequestService';

class RegistrationRequestComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            registrationRequests:[]
        }
        //let registrationRequests= {email:this.state.email, password:this.state.password, firstName:this.state.firstName, lastName:this.state.lastName, address:this.state.address, city:this.state.city, country:this.state.country, phoneNumber:this.state.phoneNumber, type: this.state.type}
        this.adminprofile = this.adminprofile.bind(this);
        this.logout= this.logout.bind(this); 
        this.income= this.income.bind(this);
        this.regreq= this.regreq.bind(this);
    
        this.viewRequest= this.viewRequest.bind(this);
    }
    
    
    adminprofile(){
        this.props.history.push('/adminprofile');
    }

    regreq(){
        this.props.history.push('/registrationrequests');
    }
    income(){
        this.props.history.push('/income');
    }
    logout(){
        this.props.history.push('/'); //ne znam kako ga ga vratim samo na localhost
    }
    denyRequest(id){
        RegistrationRequestService.deleteRegistrationRequest(id).then(res=>{
                this.setState({registrationRequests: this.state.registrationRequests.filter(request=>request.id !==id)});
                this.props.history.push("/registrationrequests"); // refresh ne radi nzm zasto
        });
    }
    
    viewRequest(id){
        this.props.history.push(`/viewrequests/${id}`);
    }
    

    componentDidMount(){
       RegistrationRequestService.getRegistrationRequests().then((res)=>{
                this.setState({registrationRequests: res.data});
        });
    } 
    render() {
        return (
            
        <div>
            <div className="menu">
                <button onClick={this.adminprofile} > Profile</button>
                <button onClick={this.regreq}> Registration requests</button>
                <button onClick={this.income}> Income </button>

                <button className="menubtnLog" onClick={this.loguot} >Logout</button>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <h2 className="text-center">Registration requests</h2>

               

                <div className="row">
                    <table className = "table table-striped table-borderd">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Phone number</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.registrationRequests.map(
                                    registrationRequests =>
                                    <tr key= {registrationRequests.id}>
                                        <td>{registrationRequests.email}</td>
                                        <td>{registrationRequests.firstName} </td>
                                        <td>{registrationRequests.lastName} </td>
                                        <td>{registrationRequests.address} </td>
                                        <td>{registrationRequests.city} </td>
                                        <td>{registrationRequests.country} </td>
                                        <td>{registrationRequests.phoneNumber} </td>
                                        <td>{registrationRequests.type} </td>
                                        <td><button onClick={()=>this.denyRequest(registrationRequests.id)} className="loginbtn">Deny</button></td>
                                        <td><button onClick={()=>this.viewRequest(registrationRequests.id)} className="loginbtn">View details</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default RegistrationRequestComponent;