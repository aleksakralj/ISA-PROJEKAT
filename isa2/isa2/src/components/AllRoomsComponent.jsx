import React, { Component } from 'react';
import RoomService from '../services/RoomService';
class AllRoomsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            rooms:[]
            
        }

    }
    addRoom(id)
    {   this.props.history.push(`/addroom/${id}`);}

    viewRoom(id){
        
        this.props.history.push(`/roomprofile/${id}`);
        
    }
    componentDidMount(){
        RoomService.getRooms().then((res)=>{
                 this.setState({rooms: res.data});

         });
     }
render() {
        return (
            <div>
                <br/><br/><br/><br/><br/><br/>
                <button onClick={()=>this.addRoom(this.props.match.params.id)} className="loginbtn">Add room</button>
                <h2 className="text-center">Rooms</h2>

                    <div className="row">
                        <table className = "table table-striped table-borderd">
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>Number of beds</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.rooms.map(
                                        rooms =>
                                        <tr key= {rooms.id}>
                                            <td>{rooms.number} </td>
                                            <td>{rooms.numberOfBeds}</td>
                                            <td>{rooms.description} </td>
                                            

                                            <td><button onClick={()=>this.viewRoom(rooms.id)} className="loginbtn">View details</button></td>

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

export default AllRoomsComponent;