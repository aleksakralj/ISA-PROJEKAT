import React, { Component } from 'react';
import UserService from '../services/UserService';
import ComplaintsService from '../services/ComplaintsService';
import axios from 'axios';




class AdminComplaintsComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            complaints:[],
            
        }
        
        this.writeResponse = this.writeResponse.bind(this);
       
    }
    
    writeResponse(id){
        axios
        .get("http://localhost:8080/api/v1/complaints/" + id )
        .then(response => {
            localStorage.setItem('activeComplaint',JSON.stringify(response.data));
            
            });
        
        
    }
    
     componentDidMount(){
        ComplaintsService.getComplaints().then((res)=>{
                 this.setState({complaints: res.data});
         });
     } 
 
    render() {
        return (
            <div>
                 <br/><br/>
            <h2 className="text-center">Complaints</h2>

            <br/><br/>

                <div className="row">
                    <table className = "table table-striped table-borderd">
                        <thead>
                            <tr>
                                <th>Complaint message</th>
                                <th>Users type</th>
                                <th>Users email</th>
                                <th>OnWhoOrWhat</th>
                                <th>onWhoEmail</th>
                                
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.profiledeletionrequests.map(

                                    complaints =>
                                    <tr key= {complaints.id}>

                                        <td>{complaints.message}</td>
                                        <td>{complaints.userType}</td>
                                        <td>{complaints.userEmail}</td>
                                        <td>{complaints.onWhoOrWhat}</td>
                                        <td>{complaints.onWhoEmail}</td>
                                        
                                        <td><button onClick={()=>this.writeResponse(complaints.id)} className="loginbtn"> Respond </button></td>
                                        
                                       
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

export default AdminComplaintsComponent;
