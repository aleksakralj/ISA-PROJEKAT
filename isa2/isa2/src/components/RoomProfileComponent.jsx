import React, { Component } from 'react';
import RoomService from '../services/RoomService';

class RoomProfileComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            number:'',
            numberOfBeds:'',
            description:''
            
        }
       
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.changeNumberOfBedsHandler = this.changeNumberOfBedsHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        

        this.logout= this.logout.bind(this); 
       
    }
    

    delete(id){
        RoomService.deleteRoom(id);
    }

    update(id) {
        
        let room = {number:this.state.number, numberOfBeds: this.state.numberOfBeds, description: this.state.description}
        console.log('room => ' + JSON.stringify(room));

        RoomService.updateRoom( room,id);
    }
    logout(){
        this.props.history.push('/');
        }

    Appointments(){
        this.props.history.push('/'); //TODO
    }

    changeNumberHandler = (event) => {
        this.setState({number: event.target.value});
    }
    changeNumberOfBedsHandler = (event) => {
        this.setState({numberOfBeds: event.target.value});
    }
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    
    componentDidMount(){
        RoomService.getRoomById(this.props.match.params.id).then((res) => {
            let room = res.data;
            this.setState({
                number:room.number,
                numberOfBeds:room.numberOfBeds,
                description:room.description

            });
        });
    }
    render() {
        return (
            <div>
               
                
                <div className="registrationdiv">
                    <br/><br/>
                                <label> Number: </label>
                                <input name="number" className="form-control" value={this.state.number} onChange={this.changeNumberHandler}/>
                                <label> Number of beds: </label>
                                <input name="numberOfBeds" className="form-control" value={this.state.numberOfBeds} onChange={this.changeNumberOfBedsHandler}/>
                                <label> Description: </label>
                                <input name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler}/>

                                
                                
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={() => this.update(this.props.match.params.id)}>Update</button></div>
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={() => this.delete(this.props.match.params.id)}>Delete</button></div>
                                
                                

                </div>
            </div>

        )   ;
    }
}

export default RoomProfileComponent;