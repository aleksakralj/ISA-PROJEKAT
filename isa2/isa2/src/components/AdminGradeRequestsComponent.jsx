import React, { Component } from 'react';

import GradeRequestService from '../services/GradeRequestService';
import axios from 'axios';

class AdminGradeRequestsComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            graderequests:[]
        }
        
        this.writeResponse = this.writeResponse.bind(this);
       
    }
    
    writeResponse(id){
        axios
        .get("http://localhost:8080/api/v1/graderequests/" + id )
        .then(response => {
            localStorage.setItem('activeGradeRequest',JSON.stringify(response.data));
            
            });
        
        
        this.props.history.push('/adminsendemailgra')
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
                                <th>Grade Id</th>
                                <th>Grade</th>
                                <th>User email</th>
                                
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.graderequests.map(

                                    graderequests =>
                                    <tr key= {graderequests.id}>

                                        <td>{graderequests.userId}</td>
                                        <td>{graderequests.grade}</td>
                                        <td>{graderequests.userEmail}</td>
                                        
                                        
                                        <td>
                                            <button onClick={()=>this.writeResponse(graderequests.id)} className="loginbtn"> Accept and respond </button>
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
