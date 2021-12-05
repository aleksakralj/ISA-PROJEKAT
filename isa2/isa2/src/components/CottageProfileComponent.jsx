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
        this.props.history.push('/');
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

    update(id){
        
        let cottage = {name: this.state.name, address: this.state.address, description: this.state.description, rating: this.state.rating, numberOfRooms: this.state.numberofrooms, rules: this.state.rules, ownerId: this.state.ownerId}
        console.log('cottage => ' + JSON.stringify(cottage));

        CottageService.updateCottage( cottage,id)
    }

    delete(id){
        CottageService.deleteCottage(id)
    }
    
    appointments(id){
        this.props.history.push(`/allappointments/${id}`);
    }

    viewRooms(id){
        this.props.history.push(`/allrooms/${id}`);
    }


    componentDidMount(){
        CottageService.getCottageById(this.props.match.params.id).then((res) => {
            let cottage = res.data;
            this.setState({
                
                name:cottage.name,
                address:cottage.address,
                description:cottage.description,
                rating:cottage.rating,
                numberofrooms:cottage.numberOfRooms,
                rules:cottage.rules

            });
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
                                <input name="numberofrooms" className="form-control" value={this.state.numberofrooms} onChange={this.changeNumberOfRoomsHandler}/>
                                
                                <label> Rules: </label>
                                <input name="rules" className="form-control" value={this.state.rules} onChange={this.changeRulesHandler}/>
                                
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={() => this.update(this.props.match.params.id)}>Update</button></div>
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={() => this.viewRooms(this.props.match.params.id)}>View rooms</button></div>
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={() => this.delete(this.props.match.params.id)}>Delete</button></div>
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={() => this.appointments(this.props.match.params.id)}>Appointments</button></div>
                               

                </div>
            </div>

        )   ;
    }
}

export default CottageProfileComponent;