import React, { Component } from 'react';
import CottageService from '../services/CottageService';

class AddCottageComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            address: '',
            description: '',
            rating: '',
            numberOfRooms:'',
            rules:'',
            ownerId:'',
            
            
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
        this.changeNumberOfRoomsHandler = this.changeNumberOfRoomsHandler.bind(this);
        this.changeRulesHandler = this.changeRulesHandler.bind(this);       
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
      
        
       this.addCottage=this.addCottage.bind(this);
       
    
      
    }

    addCottage= (e) => {
        e.preventDefault();
        let cottage = {name:this.state.name, address:this.state.address, description:this.state.description, rating:this.state.rating, numberOfRooms:this.state.numberOfRooms, rules:this.state.rules, ownerId:this.state.ownerId}
        console.log('cottage => ' + JSON.stringify(cottage));

        CottageService.createCottage(cottage);
    }


    
   
    
   
    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }
    changeRatingHandler = (event) => {
        this.setState({rating: event.target.value});
    }
    changeNumberOfRoomsHandler = (event) => {
        this.setState({numberOfRooms: event.target.value});
    }

    changeRulesHandler = (event) => {
        this.setState({rules: event.target.value});
    }
    

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }
    
    render() {
        return (
            <div>
                
                
                
                <div className="registrationdiv">
                    <br/><br/>
                                <label> Name: </label>
                                <input name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                
                                <label> Address: </label>
                                <input name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler}/>
                                <label> Description: </label>
                                <input name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                <label> Rating: </label>
                                <input name="rating" className="form-control" value={this.state.rating} onChange={this.changeRatingHandler}/>

                                <label> Number of rooms: </label>
                                <input name="numberOfRooms" className="form-control" value={this.state.numberOfRooms} onChange={this.changeNumberOfRoomsHandler}/>
                                <label> Rules: </label>
                                <input name="rules" className="form-control" value={this.state.rules} onChange={this.changeRulesHandler}/>
                                
                                
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={this.addCottage}>Add</button></div>

                </div>
            </div>

            

        );
    }
}

export default AddCottageComponent;