import React, { Component } from 'react';
import AdminService from '../services/AdminService';
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
        
    }
    alladmins(){
        this.props.history.push("/alladmins");
    }
    editAdmin(id){
        this.props.history.push(`/updateadmin/${id}`);
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
    logout(){
        this.props.history.push('/'); //ne znam kako ga ga vratim samo na localhost
    }
    addadmin(){
        this.props.history.push('/addadmin');
    }
    deleteAdmin(id){
        AdminService.deleteAdmin(id).then(res=>{
                this.setState({admins: this.state.admins.filter(admin=>admin.id !==id)});
                this.props.history.push("/alladmins"); // refresh ne radi nzm zasto
        });
    }
    componentDidMount(){
        AdminService.getAdmins().then((res)=>{
                this.setState({admins: res.data});
        });
    } 
    render() {
        return (
            <div>
                <div className="menu">
                    <button onClick={this.adminprofile} > Profile</button>
                    <button onClick={this.alladmins}> All admins </button>
                    <button onClick={this.regreq}> Registration requests</button>
                    <button onClick={this.income}> Income </button>

                    <button className="menubtnLog" onClick={this.loguot} >Logout</button>
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