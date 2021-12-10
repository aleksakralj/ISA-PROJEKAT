import axios from 'axios';
import React, { Component } from 'react';
import UserService from '../services/UserService';
 
class CottageOwnersComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            cottageOwners:[]
        }
        this.adminprofile = this.adminprofile.bind(this);
        this.logout= this.logout.bind(this); 
        this.income= this.income.bind(this);
        this.regreq= this.regreq.bind(this);

        this.cottageowners=this.cottageowners.bind(this);
        this.cottages=this.cottages.bind(this);
        this.shipowners=this.shipowners.bind(this);
        this.ships=this.ships.bind(this);
        this.fishinginstructors=this.fishinginstructors.bind(this);
        this.clients=this.clients.bind(this);
    }
    
    adminprofile(){
        this.props.history.push('/adminprofile');
    }

    regreq(){
        this.props.history.push('/registrationrequests');
    }
    income(){
        this.props.history.push('/income');
    }
    
    cottageowners(){
        this.props.history.push('/cottageowners');
    }
    cottages(){
        this.props.history.push('/cottages');
    }
    shipowners(){
        this.props.history.push('/shipowners');
    }
    ships(){
        this.props.history.push('/ships');
    }
    fishinginstructors(){
        this.props.history.push('/fishinginstructors');
    }
    clients(){
        this.props.history.push('/clients');
    }
    logout(){
        localStorage.removeItem('activeUser')
        this.props.history.push(`/login`);
    }
    deleteCottageOwner(id){
        UserService.deleteUser(id).then(res=>{
                this.setState({cottageOwners: this.state.cottageOwners.filter(cottageowner=>cottageowner.id !==id)});
                this.props.history.push("/cottageowners"); 
        });
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/v1/users/type/cottage_owner").then((res)=>{
            this.setState({cottageOwners: res.data});
    });
     } 
    render() {
        return (
            <div>
              <div className="menu">
                <button onClick={this.adminprofile} > Profile</button>
                <button onClick={this.regreq}> Registration requests</button>
                <button onClick={this.income}> Income </button>
                <button onClick={this.cottageowners}> Cottage owners </button>
                <button onClick={this.cottages}> Cottages </button>
                <button onClick={this.shipowners}> Ship owners </button>
                <button onClick={this.ships}> Ships </button>
                <button onClick={this.fishinginstructors}> Fishing instructors </button>
                <button onClick={this.clients}> Clients </button>
                
                <button className="menubtnLog" onClick={()=>this.logout()} >Logout</button>
                </div>

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