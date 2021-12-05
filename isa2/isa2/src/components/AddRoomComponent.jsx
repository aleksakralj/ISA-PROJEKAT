import React, { Component } from 'react';
import RoomService from '../services/RoomService';

class AddRoomComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            number:'',
            numberOfBeds:'',
            description:'',
            cottageId:'',
            
            
            
            
        }
        this.changeNumberOfBedsHandler = this.changeNumberOfBedsHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        
      
        
       this.addRoom=this.addRoom.bind(this);
       
    
      
    }

    addRoom= (e) => {
        e.preventDefault();
        let room = {number:this.state.number, numberOfBeds:this.state.numberOfBeds, description:this.state.description, cottageId:this.state.cottageid}
        console.log('room => ' + JSON.stringify(room));

        RoomService.createRoom(room);
    }


    
   
    
   
    changeNumberOfBedsHandler = (event) => {
        this.setState({numberOfBeds: event.target.value});
    }
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }
    changeNumberHandler = (event) => {
        this.setState({number: event.target.value});
    }
    
    
    render() {
        return (
            <div>
                
                
                
                <div className="registrationdiv">
                    <br/><br/>
                                <label> Number: </label>
                                <input name="number" className="form-control" value={this.state.number} onChange={this.changeNumberHandler}/>
                                
                                <label> Number of beds: </label>
                                <input name="numberofbeds" className="form-control" value={this.state.address} onChange={this.changeNumberOfBedsHandler}/>
                                <label> Description: </label>
                                <input name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                
                                
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={this.addRoom}>Add</button></div>

                </div>
            </div>

        );
    }
}

export default AddRoomComponent;