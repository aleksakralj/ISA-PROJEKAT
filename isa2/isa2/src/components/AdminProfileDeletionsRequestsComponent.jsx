import React, { Component } from 'react';
import UserService from '../services/UserService';
import ProfileDeletionRequestService from '../services/ProfileDeletionRequestService';
import axios from 'axios';
import emailjs from "emailjs-com";



class AdminProfileDeletionsRequestsComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            profiledeletionrequests:[],
            feedback:''
        }
        this.changeFeedbackHandler = this.changeFeedbackHandler.bind(this);
	    this.acceptDeletion = this.acceptDeletion.bind(this);
       
    }
    
    
     acceptDeletion(userId,id){
        
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
     novisend(){
         //e.preventDefault();

         emailjs.send('gmail', 'template_633ebld', {user_email: 'gedgedfor@gmail.com'},'user_8ZDv9VEXQIiu7UptSVwB3')
         .then((result)=>{
             console.log(result.text);
         },
         (error)=>{console.log(error.text);});

     }
     sendi(userEmail){
        const templateId = 'template_633ebld';

        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: "FISHING BOOKER team", user_email: userEmail})
      
     }
     sendFeedback (templateId, variables) {
        emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
      changeFeedbackHandler(event) {
        this.setState({feedback: event.target.value})
      }
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
                                <th>Message for user</th>
                                
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
                                        <td><textarea 
                                                id="test-mailing"
                                                name="test-mailing"
                                                required
                                                value={this.state.feedback}
                                                onChange={this.changeFeedbackHandler} 
                                                style={{width:'400px', height:'70px'}}>
                                            </textarea> <br/>
                                            <button onClick={()=>this.novisend(profiledeletionrequests.userEmail)}  className="loginbtn">Send</button>
                                        </td>
                                        <td><button onClick={()=>this.acceptDeletion(profiledeletionrequests.userId,profiledeletionrequests.id)} className="loginbtn">Accept</button>
                                        <button onClick={()=>this.denyDeletion(profiledeletionrequests.id)}  className="loginbtn">Deny</button></td>
                                       
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
