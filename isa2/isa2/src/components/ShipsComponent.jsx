import React, { Component } from 'react';
import ShipService from '../services/ShipService'

class ShipsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            ships:[]
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
    deleteShip(id){
        ShipService.deleteShip(id).then(res=>{
                this.setState({ships: this.state.ships.filter(ship=>ship.id !==id)});
                this.props.history.push("/ships"); // refresh ne radi nzm zasto
        });
    }
    componentDidMount(){
        ShipService.getShips().then((res)=>{
                 this.setState({ships: res.data});
         });
     } 
    render() {
        return (
            <div>
     {
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
          }  
          
                <br/><br/><br/><br/><br/><br/>
                <h1 className="text-center">Ships</h1>

                    <div className="row">
                        <table className = "table table-striped table-borderd">
                            <thead>
                                <tr>
                                    <th>Address</th>
                                    <th>Description</th>
                                    <th>Name</th>
                                    <th>Rating</th>
                            
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.ships.map(
                                        ships =>
                                        <tr key= {ships.id}>
                                            <td>{ships.address}</td>
                                            <td>{ships.description} </td>
                                            <td>{ships.name} </td>
                                            <td>{ships.rating} </td>
                                            
                                            <td><button onClick={()=>this.deleteShip(ships.id)} className="loginbtn">Delete</button></td>
                                            
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

export default ShipsComponent;
