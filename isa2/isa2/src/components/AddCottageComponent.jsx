import React, { Component, useState } from 'react';
import axios from 'axios';

class AddCottageComponent extends Component {
    constructor(props){
        
        
        super(props)
        this.state={
            name:'',
            address:'',
            description:'',
            rating:'',
            numberOfRooms:'',
            rules:'',
            ownerId:'',
            baseImage:''

        }
       
    }
    cottages()
    {
        
        this.props.history.push(`/cottageownercottages`);

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
        this.setState({numberOfRooms: event.target.value});
    }

    changeRulesHandler = (event) => {
        this.setState({rules: event.target.value});
    }
    changeImageHandler = (event) => {
        this.setState({image: event.target.value});
    }

    profile()
    {
        
        this.props.history.push(`/cottageownerprofile`);

    }
    

    Add(){
        let activeUser =  JSON.parse(localStorage.getItem('activeUser'));

        let image=this.state.image
       
        let cottage = {           
            name:this.state.name,
        address:this.state.address,
        description:this.state.description,
        rating:this.state.rating,
        numberOfRooms:this.state.numberOfRooms,
        rules:this.state.rules,
        ownerId:activeUser.id}

        console.log('cottage => ' + JSON.stringify(cottage));

        axios.post("http://localhost:8080/api/v1/cottages/cottage_owner",cottage);
        axios.post("http://localhost:8080/api/v1/cottages/save/cottage_owner",image);


        this.props.history.push(`/cottageownercottages`);
        window.location.reload();

    }


    uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await this.convertBase64(file);
        this.state.baseImage=base64.src;
    }

    convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };


    componentDidMount(){
        let activeUser = JSON.parse(localStorage.getItem('activeUser'));
        if (activeUser.type != "cottage_owner") { this.logout(); alert("Unauthorised access") }
        
    }
    render() {
        return (
            <div>
               <div className="menu">
               <button onClick={()=>this.profile()}>Profile</button>
               <button onClick={()=>this.cottages()}>My cottages</button>
               <button className="menubtnLog"  onClick={()=>this.logout()}>Logout</button>
</div>
                
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
                                <div className="center"><button className="loginbtn" onClick={()=>this.Add()}>Add</button></div>
                                <br></br>
                                <label>Photos: </label>
                                <input type="file" name="image" accept="image/png, image/jpeg" onChange={(e) => {this.uploadImage(e);}}/>    
                                <br></br>
                                <img src={this.state.baseImage}  height="200px"/>   
                               

                                

                </div>
            </div>

        )   ;
    }
}

export default AddCottageComponent;