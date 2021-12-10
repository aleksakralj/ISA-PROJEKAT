import React, { Component } from 'react';
import CottageService from '../services/CottageService';
class CottagesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            cottages:[]
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
    deleteCottage(id){
        CottageService.deleteCottage(id).then(res=>{
                this.setState({cottages: this.state.cottages.filter(cottage=>cottage.id !==id)});
                this.props.history.push("/cottages"); // refresh ne radi nzm zasto
        });
    }
    componentDidMount(){
        CottageService.getCottages().then((res)=>{
                 this.setState({cottages: res.data});
         });
     } 
    render() {
        return (
            <div><div className="menu">
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
                <h2 className="text-center">Cottages</h2>

                    <div className="row">
                        <table className = "table table-striped table-borderd">
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
                            <tbody>
                                {
                                    this.state.cottages.map(
                                        cottages =>
                                        <tr key= {cottages.id}>
                                            <td>{cottages.name} </td>
                                            <td>{cottages.address}</td>
                                            <td>{cottages.description} </td>
                                            <td>{cottages.numberOfRooms}</td>
                                            <td>{cottages.rating} </td>
                                            <td>{cottages.rules} </td>
                                            
                                            <td><button onClick={()=>this.deleteCottage(cottages.id)} className="loginbtn">Delete</button></td>
                                            
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
/*

import React, { Component } from 'react'


const nameStyle = {
    position: 'relative',
    top: '100px',
    left: '260px',
    fontSize: '40px',
    fontWeight: '600'     
}

const searchStyle = {
    position: 'relative',
    top: '160px',
    left: '640px',
    fontSize: '20px'   
}

const tablePosition = {
    position: 'relative',
    top: '120px',
    left: '250px'
}

const dropdownStle = {
    position: 'relative',
    top: '160px',
    left: '650px'
}

const searchInputStyle = {
    position: 'relative',
    top: '160px',
    left: '660px'
}


class CottagesComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <text style={searchStyle}>Search by:</text>
                    <select style={dropdownStle}>
                        <option>Name</option>
                        <option>Addres</option>
                        <option>Owner</option>
                        <option>Rating</option>
                    </select>
                    <input style={searchInputStyle}></input>
                </div>
                <div>
                    <text style={nameStyle}>COTTAGES</text>
                    <table style={tablePosition}>
                    <thead>
                            <th> Name </th>
                            <th> Addres </th>
                            <th> Owner </th>
                            <th> Cottages Rating </th>
                            <th>See more info</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td>
                                    <button className="seeMoreButton"> Nesto </button>
                                </td>
                            </tr>
                            <tr>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td>
                                    <button className="seeMoreButton"> Nesto </button>
                                </td>
                            </tr>
                            <tr>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td>
                                    <button className="seeMoreButton"> Nesto </button>
                                </td>
                            </tr>
                            <tr>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td>
                                    <button className="seeMoreButton"> Nesto </button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}


*/
export default CottagesComponent;