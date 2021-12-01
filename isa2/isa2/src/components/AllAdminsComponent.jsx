import React, { Component } from 'react';
import AllAdminsService from '../services/AllAdminsService';
class AllAdminsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            admins: []
        }
        
    }
    componentDidMount(){
        AllAdminsService.getAdmins().then((res)=>{
                this.setState({admins: res.data});
        });
    } 
    render() {
        return (
            <div>
                 <div>
            
         <br/><br/><br/><br/><br/><br/><br/><br/>
            <h2 className="text-center">Admins</h2>

               

                <div className="row">
                    <table >
                        <thead>
                            <tr>
                                
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Phone number</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.admins.map(
                                    admins =>
                                    <tr key= {admins.id}>
                                        <td>{admins.email}</td>

                                        <td>{admins.firstName}</td>
                                        <td>{admins.lastName}</td>
                                        <td>{admins.address}</td>
                                        <td>{admins.city}</td>
                                        <td>{admins.country}</td>
                                        <td>{admins.phonenumber}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );
    }
}

export default AllAdminsComponent;