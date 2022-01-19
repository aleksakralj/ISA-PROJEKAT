import React, { Component } from 'react';

import GradeRequestService from '../services/GradeRequestService';
import axios from 'axios';
import emailjs from "emailjs-com";

class AdminGradeRequestsComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            graderequests:[]
        }
        
        this.accept = this.accept.bind(this);
       
    }
    
    accept(id){
        
        axios.get("http://localhost:8080/api/v1/graderequests/" + id)
        .then(response => {
            localStorage.setItem('activeRequest', JSON.stringify(response.data));
        });
        
        let activeRequest=JSON.parse(localStorage.getItem('activeRequest'));
        this.sendEmail(activeRequest.type);

        //axios.post("http://localhost:8080/api/v1/grades" , id);
        
        
        //accept and send email
    }
    sendEmail(type){
        let activeRequest=JSON.parse(localStorage.getItem('activeRequest'));

            var template_params = {
                "email": this.findEmail(),
                "message":"Your grade for " +  activeRequest.type  + " is accepted.",
                "subject": "Grade"
            }

            emailjs.send('service_h91s9bd', 'template_633ebld',template_params,'user_8ZDv9VEXQIiu7UptSVwB3')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
               
             }, function(error) {
                console.log('FAILED...', error);
             });
             

            
      
    }
    findEmail(){
        let activeRequest=JSON.parse(localStorage.getItem('activeRequest'));
        var email;
        var cottageOwnerId;
        var shipOwnerId;
        
        switch(activeRequest.type){
            
            case 'cottage_owner':  email = (axios.get("http://localhost:8080/api/v1/users/" + activeRequest.typeId)).email ; return email;

            case 'ship_owner': email = (axios.get("http://localhost:8080/api/v1/users/" + activeRequest.typeId)).email ; return email;

            case 'cottage': {

               cottageOwnerId= axios.get("http://localhost:8080/api/v1/cottages/"+ activeRequest.typeId).ownerId ;
                email = (axios.get("http://localhost:8080/api/v1/users/" + cottageOwnerId)).email;
                return email;
            }
           

            case 'ship': {
                 shipOwnerId= axios.get("http://localhost:8080/api/v1/ships/"+ activeRequest.typeId).ownerId ;
                 email = (axios.get("http://localhost:8080/api/v1/users/" + shipOwnerId)).email;
                return email;
            }

            case 'fishing_instructor':  email= (axios.get("http://localhost:8080/api/v1/users/" + activeRequest.typeId)).email ; return email;

            default: return "EmailNotFound";
        }
    }
     deny(){
        axios.delete("http://localhost:8080/api/v1/graderequests/"+ JSON.parse(localStorage.getItem('activeRequest')).id)
                                            
     }
   
     componentDidMount(){
        GradeRequestService.getGradeRequests().then((res)=>{
                 this.setState({graderequests: res.data});
         });
         
     } 
 
    render() {
        return (
            <div>
                 <br/><br/>
            <h2 className="text-center">Grade requests</h2>

            <br/><br/>

                <div className="row">
                    <table className = "table table-striped table-borderd">
                        <thead>
                            <tr>
                                <th>Grade</th>
                                <th>Type</th>
                                
                                
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.graderequests.map(

                                    graderequests =>
                                    <tr key= {graderequests.id}>

                                        <td>{graderequests.grade}</td>
                                        <td>{graderequests.type}</td>
                                        
                                        <td>
                                            <button onClick={()=>this.accept(graderequests.id)} className="loginbtn"> Accept </button>
                                            <button onClick={()=>this.deny(graderequests.id)} className="loginbtn" > Deny </button>
                                        </td>
                                        
                                       
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

export default AdminGradeRequestsComponent;
