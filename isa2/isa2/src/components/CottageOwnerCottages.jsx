import axios from 'axios';
import React, { Component } from 'react';

class CottageOwnerCottages extends Component {
    constructor(props){
        super(props)
        this.state = {
            cottages: []
        }
        
    }
    
    logout(){
        this.props.history.push('/'); 
    }
    addroom(){
        this.props.history.push('/addroom');
    }
    viewCottage(id){
        axios
        .get("http://localhost:8080/api/v1/cottages" + "/" + id )
        .then(response => {
            localStorage.setItem('activeCottage',JSON.stringify(response.data));});
            
            this.props.history.push('/cottageprofile');
    }

    deleteCottage(){
//TODO
    }

    componentDidMount(){
        
        let activeUser =  JSON.parse(localStorage.getItem('activeUser'));
        axios.get("http://localhost:8080/api/v1/cottages/owner" + "/" + activeUser.id).then((res)=>{
            this.setState({cottages: res.data});
    });
        
    } 
    render() {
        return (
            <div>
               

                <div> <br/><br/><br/><br/><br/><br/><br/><br/>
                <button onClick={this.addroom} className="loginbtn" > Add room </button>
         
                    <h2 className="text-center">Cottages</h2>

               

                    <div className="row">
                     <table >
                            <thead>
                                <tr>
                                
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Description</th>
                                    <th>Rating</th>
                                    <th>Number of rooms</th>
                                    <th>Rules</th>
                                    
                                
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cottages.map(
                                        cottages =>
                                        <tr key= {cottages.id}>
                                            <td>{cottages.name}</td>
                                            <td>{cottages.address}</td>
                                            <td>{cottages.description}</td>
                                            <td>{cottages.rating}</td>
                                            <td>{cottages.numberOfRooms}</td>
                                            <td>{cottages.rules}</td>
                                            
                                            <td>
                                                <button onClick={()=>this.viewCottage(cottages.id)} className="loginbtn">View</button> 
                                                <button onClick={()=>this.deleteCottage()} className="loginbtn">Delete</button> 
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

export default CottageOwnerCottages;