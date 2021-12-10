import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class ClientsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            clients:[]
        }
        this.adminprofile = this.adminprofile.bind(this);
        this.logout= this.logout.bind(this); 
        this.income= this.income.bind(this);
        this.regreq= this.regreq.bind(this);

        this.cottageowners=this.cottageowners.bind(this);
        this.cottages=this.cottages.bind(this);
        this.shipowners=this.shipowners.bind(this);
        this.ships=this.ships.bind(this);
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
    clients(){
        this.props.history.push('/clients');
    }
    logout(){
        localStorage.removeItem('activeUser')
        this.props.history.push(`/login`);
    }
    deleteClient(id){
        ClientService.deleteClient(id).then(res=>{
                this.setState({sclients: this.state.clients.filter(client=>client.id !==id)});
                this.props.history.push("/clients"); 
        });
    }
    componentDidMount(){
        ClientService.getClients().then((res)=>{
                 this.setState({clients: res.data});
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
            
            <button className="menubtnLog" onClick={()=>this.logout()} >Logout</button>
            </div>
                <br/><br/><br/><br/><br/><br/>
                <h2 className="text-center">Ships</h2>

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
                                    this.state.clients.map(
                                        clients =>
                                        <tr key= {clients.id}>
                                            <td>{clients.email}</td>
                                            <td>{clients.firstName}</td>
                                            <td>{clients.lastName}</td>
                                            <td>{clients.address}</td>
                                            <td>{clients.city}</td>
                                            <td>{clients.country}</td>
                                            <td>{clients.phoneNumber}</td>
                                            
                                            <td><button onClick={()=>this.deleteClient(clients.id)} className="loginbtn">Delete</button></td>
                                            
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

export default ClientsComponent;
