import React, { Component } from 'react';
import axios from 'axios';

class RoomProfileComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            number:'',
            numberOfBeds:'',
            description:'',
            cottageId:'',
            
        }
       
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.changeNumberOfBedsHandler = this.changeNumberOfBedsHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        

        this.logout= this.logout.bind(this); 
       
    }
    update(){

        let activeCottage =  JSON.parse(localStorage.getItem('activeCottage'));

        let room = {

            id:this.state.id,
            number:this.state.number,
            numberOfBeds:this.state.numberOfBeds,
            description:this.state.description,
            cottageId:activeCottage.id,

        }
        let roid = this.state.id;

        console.log('room => ' + JSON.stringify(room));
        axios.put("http://localhost:8080/api/v1/rooms/"+ roid,room);
        this.props.history.push(`/allrooms`);
        window.location.reload();


    }
    
    logout(){
        localStorage.removeItem('activeUser')
        localStorage.removeItem('activeCottage')
        localStorage.removeItem('activeRoom')
        this.props.history.push(`/login`);
       
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
        let activeRoom =  JSON.parse(localStorage.getItem('activeRoom'))

        this.setState({
            id:activeRoom.id,
            number:activeRoom.number,
            numberOfBeds:activeRoom.numberOfBeds,
            description:activeRoom.description

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
                                <div className="center"><button className="loginbtn" onClick={()=>this.update()}>Update</button></div>
                               
                                

                </div>
            </div>

        )   ;
    }
}

export default RoomProfileComponent;