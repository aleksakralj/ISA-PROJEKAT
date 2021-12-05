import React, { Component } from 'react';
import CottageOwnerService from '../services/CottageOwnerService';
class CottageOwnersComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            cottageOwners:[]
        }
         
    }
    deleteCottageOwner(id){
        CottageOwnerService.deleteCottageOwner(id).then(res=>{
                this.setState({cottageOwners: this.state.cottageOwners.filter(cottageowner=>cottageowner.id !==id)});
                this.props.history.push("/cottageowners"); // refresh ne radi nzm zasto
        });
    }
    componentDidMount(){
        CottageOwnerService.getCottageOwners().then((res)=>{
                 this.setState({cottageOwners: res.data});
         });
     } 
    render() {
        return (
            <div>
             
                <br/><br/><br/><br/><br/><br/>
                <h2 className="text-center">Cottage owners</h2>

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
                                    
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cottageOwners.map(
                                        cottageOwners =>
                                        <tr key= {cottageOwners.id}>
                                            <td>{cottageOwners.email}</td>
                                            <td>{cottageOwners.firstName} </td>
                                            <td>{cottageOwners.lastName} </td>
                                            <td>{cottageOwners.address} </td>
                                            <td>{cottageOwners.city} </td>
                                            <td>{cottageOwners.country} </td>
                                            <td>{cottageOwners.phoneNumber} </td>
                                            
                                            
                                            
                                            <td><button onClick={()=>this.deleteCottageOwner(cottageOwners.id)} className="loginbtn">Delete</button></td>
                                            
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

export default CottageOwnersComponent;