import React, { Component } from 'react';
import CottageService from '../services/CottageService';
class CottagesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            cottages:[]
        }
         
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
            <div>
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

export default CottagesComponent;