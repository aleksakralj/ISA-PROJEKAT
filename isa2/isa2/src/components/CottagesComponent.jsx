import React, { Component } from 'react';
import { Fade } from 'react-bootstrap';
import CottageService from '../services/CottageService';


class CottagesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cottages: [],
            clientComponents:false,
            cottageOwnerComponents:true,
            unautentifiedUserComponents: false
        }
        this.adminprofile = this.adminprofile.bind(this);
        this.logout = this.logout.bind(this);
        this.income = this.income.bind(this);
        this.regreq = this.regreq.bind(this);

        this.cottageowners = this.cottageowners.bind(this);
        this.cottages = this.cottages.bind(this);
        this.shipowners = this.shipowners.bind(this);
        this.ships = this.ships.bind(this);
        this.fishinginstructors = this.fishinginstructors.bind(this);
        this.clients = this.clients.bind(this);

        this.clientScheduleCottage = this.clientScheduleCottage.bind(this);
    }
    adminprofile() {
        this.props.history.push('/adminprofile');
    }

    regreq() {
        this.props.history.push('/registrationrequests');
    }
    income() {
        this.props.history.push('/income');
    }

    cottageowners() {
        this.props.history.push('/cottageowners');
    }
    cottages() {
        this.props.history.push('/cottages');
    }
    shipowners() {
        this.props.history.push('/shipowners');
    }
    ships() {
        this.props.history.push('/ships');
    }
    fishinginstructors() {
        this.props.history.push('/fishinginstructors');
    }
    clients() {
        this.props.history.push('/clients');
    }
    logout() {
        localStorage.removeItem('activeUser')
        this.props.history.push(`/login`);
    }
    clientScheduleCottage(){
        this.props.history.push('/clientschedulecottage')
    }
    cottageProfile(id){
        CottageService.getCottageById(id).then(res=>{
            localStorage.setItem('activeCottage', JSON.stringify(res.data));
        })
        this.props.history.push('/cottageprofile')
        
    }
    deleteCottage(id) {
        CottageService.deleteCottage(id).then(res => {
            this.setState({ cottages: this.state.cottages.filter(cottage => cottage.id !== id) });
            this.props.history.push("/cottages"); // refresh ne radi nzm zasto
        });
    }
    componentDidMount() {

        let activeUser = JSON.parse(localStorage.getItem('activeUser'));
        if(activeUser===null){
            this.state.unautentifiedUserComponents = true;
            this.state.cottageOwnerComponents=false;
            this.state.clientComponents=false;
        }
        else{
            if(activeUser.type=='Client'){
             this.state.clientComponents=true;
             this.state.cottageOwnerComponents=false;
             this.state.unautentifiedUserComponents = false;
         }
            if(activeUser.type=='cottage_owner'){
                this.state.clientComponents=false;
                this.state.cottageOwnerComponents=true; 
                this.state.unautentifiedUserComponents = false;       
            }
        }
        CottageService.getCottages().then((res) => {
            this.setState({ cottages: res.data });
        });

        
    }
   
    render() {
        return (
            <div>
                {this.state.cottageOwnerComponents?
            
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
            :null
            }


                <div style={{ height: '50px', width: '400px', position: 'absolute', top: '165px', left: '140px' }}>
                    <text style={{ position: 'absolute',top:'5px' }} >Search by:</text>
                    <select style={{ position: 'absolute', left: '95px', height: '30px' }}>
                        <option>Name</option>
                        <option>Addres</option>
                        <option>Owner</option>
                        <option>Rating</option>
                    </select>
                    <input style={{ position: 'absolute', left: '200px' }}></input>
                </div>

                <h2 style={{position:'absolute',top:'100px',left:'45%'}}>Cottages</h2>
                { this.state.clientComponents?
                <button className='loginbtn' style={{position:'absolute', width:'150px',height:'35px', top:'162px',left:'1200px'}} onClick={this.clientScheduleCottage} >Schedule</button>
                :null}

                <div className="row">
                    <table className="table table-striped table-borderd" style={{ position: 'absolute', top: '200px', left: '0px' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Description</th>
                                <th>Number of rooms</th>
                                <th>Rating</th>
                                <th>Rules</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody onClick=''>
                            {
                                this.state.cottages.map(
                                    cottages =>
                                        <tr key={cottages.id}>
                                            <td>{cottages.name} </td>
                                            <td>{cottages.address}</td>
                                            <td>{cottages.description} </td>
                                            <td>{cottages.numberOfRooms}</td>
                                            <td>{cottages.rating} </td>
                                            <td>{cottages.rules} </td>

                                        {   this.state.cottageOwnerComponents ? 
                                            <td><button onClick={() => this.deleteCottage(cottages.id)} className="loginbtn">Delete</button></td>
                                            :null
                                        }   
                                        {   
                                            this.state.clientComponents ?       
                                            <td><button onClick={() => this.cottageProfile(cottages.id)} className="loginbtn">SEE</button></td>
                                        :null
                                        }
                                        {   
                                            this.state.unautentifiedUserComponents ?       
                                            <td><button onClick={() => this.cottageProfile(cottages.id)} className="loginbtn">SEE</button></td>
                                        :null
                                        }
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

export default CottagesComponent;