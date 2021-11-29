import React, { Component } from 'react';
import RegistrationRequestService from '../services/RegistrationRequestService';

class RegistrationRequestComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            registrationRequests: []
        }
        this.adminprofile = this.adminprofile.bind(this);
        this.logout= this.logout.bind(this); 
        this.income= this.income.bind(this);
        this.addadmin= this.addadmin.bind(this);
        this.regreq= this.regreq.bind(this);
    }
    componentDidMount(){
        RegistrationRequestService.getRegistrationRequests().then((res)=>{
                this.setState({registrationRequests: res.data})
        });
    }

    
    adminprofile(){
        this.props.history.push('/adminprofile');
    }
    addadmin(){
        this.props.history.push('/addadmin');
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
    
    
    render() {
        return (
            
        <div>
            <div className="menu">
                <button onClick={this.adminprofile} > Profile</button>
                <button onClick={this.addadmin}> Add admin </button>
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
                                <th>Id </th>
                                <th>E-mail</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.registrationRequests.map(
                                    registrationRequest =>
                                    <tr key= {registrationRequest.Id}>
                                        <td>{registrationRequest.Email}</td>
                                        <td>{registrationRequest.Password} </td>
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