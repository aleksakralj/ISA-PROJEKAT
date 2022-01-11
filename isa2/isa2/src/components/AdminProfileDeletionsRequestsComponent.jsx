import React, { Component } from 'react';
import UserService from '../services/UserService';
import ProfileDeletionRequestService from '../services/ProfileDeletionRequestService';
import axios from 'axios';




class AdminProfileDeletionsRequestsComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            profiledeletionrequests:[]
        }
        
        this.writeResponse = this.writeResponse.bind(this);
       
    }
    
    writeResponse(userId,id){
        axios
        .get("http://localhost:8080/api/v1/users/" + userId )
        .then(response => {
            localStorage.setItem('activeRecipient',JSON.stringify(response.data));
            
            });
        
        axios
        .get( "http://localhost:8080/api/v1/profiledeletionrequests/"+ id )
        .then(response => {
            localStorage.setItem('activeRequest', JSON.stringify(response.data));
            
            });
        this.props.history.push('/adminsendemail');
    }
    
     /*acceptDeletion(userId,id){
        
        UserService.deleteUser(userId);  

        axios.delete("http://localhost:8080/api/v1/profiledeletionrequests/"+id);
        window.location.reload();
        window.location.reload();

       // ProfileDeletionRequestService.deleteProfileDeletionRequest(id).then(res=>{
          //  this.setState({profiledeletionrequests: this.state.profiledeletionrequests.filter(request=>request.id !==id)});
       // });
       

       
     }
     denyDeletion(id){
       
        axios.delete("http://localhost:8080/api/v1/profiledeletionrequests/"+id);
        window.location.reload();
        window.location.reload();

     }
*/
   
     componentDidMount(){
        ProfileDeletionRequestService.getProfileDeletionRequests().then((res)=>{
                 this.setState({profiledeletionrequests: res.data});
         });
     } 
 
    render() {
        return (
            <div>
                 <br/><br/>
            <h2 className="text-center">Profile deletion requests</h2>

            <br/><br/>

                <div className="row">
                    <table className = "table table-striped table-borderd">
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>User type</th>
                                <th>Reason for deletion</th>
                                
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.profiledeletionrequests.map(

                                    profiledeletionrequests =>
                                    <tr key= {profiledeletionrequests.id}>

                                        <td>{profiledeletionrequests.userId}</td>
                                        <td>{profiledeletionrequests.userType}</td>
                                        <td>{profiledeletionrequests.reason}</td>
                                        
                                        <td><button onClick={()=>this.writeResponse(profiledeletionrequests.userId,profiledeletionrequests.id)} className="loginbtn"> Respond </button></td>
                                        
                                       
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

export default AdminProfileDeletionsRequestsComponent;
