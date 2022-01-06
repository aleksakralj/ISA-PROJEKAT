import React, { Component } from 'react';
import ProfileDeletionRequestService from '../services/ProfileDeletionRequestService';


class Adminprofiledeletionsrequestscomponent extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            profiledeletionrequests:[]
        }
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
            <h2 className="text-center">Registration requests</h2>

            <br/><br/>

                <div className="row">
                    <table className = "table table-striped table-borderd">
                        <thead>
                            <tr>
                                <th>Id</th>
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
                                        <td>{profiledeletionrequests.reason}</td>
                                        <td><button  className="loginbtn">Deny</button>
                                        <button  className="loginbtn">View details</button></td>

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

export default Adminprofiledeletionsrequestscomponent;
