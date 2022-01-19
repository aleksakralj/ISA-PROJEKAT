import axios from 'axios';
import React, { Component } from 'react';
import ReviewService from '../services/ReviewService';

class AdminReviewRequestsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            
           reviewRequests:[]
        }
        
    
        this.denyRequest= this.denyRequest.bind(this);
        this.acceptRequest= this.acceptRequest.bind(this);
    }
    
    
    denyRequest(id){
        ReviewService.deleteReview(id).then(res=>{
                this.setState({reviewRequests: this.state.reviewRequests.filter(review=>review.id !==id)});
                this.props.history.push("/adminreviewequests"); // refresh ne radi nzm zasto
        });
        
    }
    
    acceptRequest(id){
        ReviewService.deleteReview(id).then(res=>{
            this.setState({reviewRequests: this.state.reviewRequests.filter(review=>review.id !==id)});
            
    });
    //davanje penala 
    //kolegini penali u bazi ne rade , tako da mu ne dodeli zapravo penal
    axios.post("http://localhost:8080/api/v1/clientPenalties", this.state.reviewRequests.idOfReceiver);

    window.location.reload();
    }
    
    

    componentDidMount(){
       ReviewService.getReviews().then((res)=>{
                this.setState({reviewRequests: res.data});
        });
    } 
    render() {
        return (
            
        <div>
        
            <br/><br/><br/><br/><br/><br/>
            <h2 className="text-center">Review requests</h2>

               

                <div className="row">
                    <table className = "table table-striped table-borderd">
                        <thead>
                            <tr>
                                <th>Email of sender</th>
                                <th>Email of receiver</th>
                                <th>Review message</th>
                                
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.reviewRequests.map(

                                    reviewRequests =>
                                    <tr key= {reviewRequests.id}>
                                        <td>{reviewRequests.emailOfSender}</td>
                                        <td>{reviewRequests.emailOfReceiver} </td>
                                        <td>{reviewRequests.reviewMessage} </td>
                                        
                                        <td><button onClick={()=>this.denyRequest(reviewRequests.id)} className="loginbtn">Deny</button>
                                        <button onClick={()=>this.acceptRequest(reviewRequests.id)} className="loginbtn">Accept</button></td>

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

export default AdminReviewRequestsComponent;