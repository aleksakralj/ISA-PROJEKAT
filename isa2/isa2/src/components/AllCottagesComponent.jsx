import React, { Component } from 'react';
import CottageService from '../services/CottageService';
class AllCottagesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            cottages:[]
            
        }

    }
    addCottage(id)
    {   this.props.history.push(`/addcottage/${id}`);}

    viewCottage(id){
        
        this.props.history.push(`/cottageprofile/${id}`);
        
    }
    componentDidMount(){
        CottageService.getCottages().then((res)=>{
                 this.setState({cottages: res.data});

         });
     }
render() {
        return (
            <div>
                <br/><br/><br/><br/><br/><br/>
                <button onClick={()=>this.addCottage(this.props.match.params.id)} className="loginbtn">Add cottage</button>
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
                                            <td>{cottages.numberOfRooms} </td>
                                            <td>{cottages.rating} </td>
                                            <td>{cottages.rules} </td>

                                            <td><button onClick={()=>this.viewCottage(cottages.id)} className="loginbtn">View details</button></td>

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

export default AllCottagesComponent;