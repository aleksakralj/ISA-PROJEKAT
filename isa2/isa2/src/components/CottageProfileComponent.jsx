import React, { Component } from 'react';
import CottageService from '../services/CottageService';

class CottageProfileComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            address:'',
            description:'',
            rating:'',
            numberOfRooms:'',
            rules:'',

        }
       
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
        this.changeNumberOfRoomsHandler = this.changeNumberOfRoomsHandler.bind(this);
        this.changeRulesHandler = this.changeRulesHandler.bind(this);
        
        
       
   
        this.logout= this.logout.bind(this); 
       
    }
    
    
    logout(){
        localStorage.removeItem('activeUser')
        this.props.history.push(`/login`);
        }

    Rooms(){
        this.props.history.push('/'); //TODO
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeRatingHandler = (event) => {
        this.setState({rating: event.target.value});
    }
    changeNumberOfRoomsHandler = (event) => {
        this.setState({numberofrooms: event.target.value});
    }

    changeRulesHandler = (event) => {
        this.setState({rules: event.target.value});
    }

    viewRooms(id){
        this.props.history.push(`/allrooms`);
    }
    
    componentDidMount(){
        
       
        let activeCottage =  JSON.parse(localStorage.getItem('activeCottage'))

            this.setState({
                id:activeCottage.id,
                name:activeCottage.name,
            address:activeCottage.address,
            description:activeCottage.description,
            rating:activeCottage.rating,
            numberOfRooms:activeCottage.numberOfRooms,
            rules:activeCottage.rules,
                
            

            });
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
                                <input name="numberofrooms" className="form-control" value={this.state.numberOfRooms} onChange={this.changeNumberOfRoomsHandler}/>
                                
                                <label> Rules: </label>
                                <input name="rules" className="form-control" value={this.state.rules} onChange={this.changeRulesHandler}/>
                                
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.update}>Update</button></div>
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.viewRooms(this.state.id)}>Rooms</button></div>
                                

                </div>
            </div>

        )   ;
    }
}

export default CottageProfileComponent;