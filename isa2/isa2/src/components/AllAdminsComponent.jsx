import React, { Component } from 'react';
import UserService from '../services/UserService';
import axios from 'axios';
class AllAdminsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            admins: []
        }
        this.alladmins=this.alladmins.bind(this);
        this.editAdmin=this.editAdmin.bind(this);
        this.deleteAdmin = this.deleteAdmin.bind(this);

        this.adminprofile = this.adminprofile.bind(this);
        this.logout= this.logout.bind(this); 
        this.income= this.income.bind(this);
        this.addadmin= this.addadmin.bind(this);
        this.regreq= this.regreq.bind(this);

        this.cottageowners=this.cottageowners.bind(this);
        this.cottages=this.cottages.bind(this);
        this.shipowners=this.shipowners.bind(this);
        this.ships=this.ships.bind(this);
        this.clients=this.clients.bind(this);
        this.admins=this.admins.bind(this);
        
    }
    alladmins(){
        this.props.history.push("/alladmins");
    }
    editAdmin(id){
        this.props.history.push(`/updateadmin/${id}`);
    }

    adminprofile(){
        this.props.history.push('/mainadminprofile');
    }

    regreq(){
        this.props.history.push('/mainregistrationrequests');
    }
    income(){
        this.props.history.push('/mainincome');
    }
    cottageowners(){
        this.props.history.push('/maincottageowners');
    }
    cottages(){
        this.props.history.push('/maincottages');
    }
    shipowners(){
        this.props.history.push('/mainshipowners');
    }
    ships(){
        this.props.history.push('/mainships');
    }
    clients(){
        this.props.history.push('/mainclients');
    }
    admins(){
        this.props.history.push('/alladmins');
    }
    logout(){
        localStorage.removeItem('activeUser')
        this.props.history.push(`/login`);
    }
    addadmin(){
        this.props.history.push('/addadmin');
    }
    deleteAdmin(id){
       UserService.deleteUser(id).then(res=>{
                this.setState({admins: this.state.admins.filter(admin=>admin.id !==id)});
                this.props.history.push("/alladmins"); // refresh ne radi nzm zasto
        });
    }
    componentDidMount(){

        axios.get("http://localhost:8080/api/v1/users/type/admin" ).then((res)=>{
                this.setState({admins: res.data});
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
                    <button onClick={this.clients}> Clients </button>
                    <button onClick={this.alladmins}> Admins </button>
                    <button className="menubtnLog" onClick={()=>this.logout()} >Logout</button>
                </div>

                <div> <br/><br/><br/><br/><br/><br/><br/><br/>
                    <button onClick={this.addadmin} className="loginbtn" > Add admin </button>
         
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
                                    <th>Action</th>
                                
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
                                            <td>{admins.phoneNumber}</td>
                                            <td>
                                                <button onClick={()=>this.editAdmin(admins.id)} className="loginbtn">Update</button> 
                                                <button style={{marginLeft:"10px"}} onClick={()=>this.deleteAdmin(admins.id)} className="loginbtn">Delete</button>
                                            </td>
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