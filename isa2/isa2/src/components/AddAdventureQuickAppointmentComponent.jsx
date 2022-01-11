import React, { Component } from 'react';
import axios from 'axios';

class AddAdventureQuickAppointmentComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            additionalServices:'',
            endingDate:'',
            numberOfPeople:'',
            price:'',
            startingDate:'',
            instructorId:'',
            allFreeAppointments:[],
            allScheduledAppointments:[],
            allQuickAppointments:[]
        }
       
        this.changeStartingDateHandler = this.changeStartingDateHandler.bind(this);
        this.changeEndingDateHandler = this.changeEndingDateHandler.bind(this);
        this.changeNumberOfPeopleHandler = this.changeNumberOfPeopleHandler.bind(this);
        this.changeAdditionalServicesHandler = this.changeAdditionalServicesHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
 

     
       
    }
    

    changeStartingDateHandler = (event) => {
        this.setState({startingDate: event.target.value});
    }
    changeEndingDateHandler = (event) => {
        this.setState({endingDate: event.target.value});
    }
    changeNumberOfPeopleHandler = (event) => {
        this.setState({numberOfPeople: event.target.value});
    }
    changePriceHandler = (event) => {
        this.setState({price: event.target.value});
    }
    changeAdditionalServicesHandler = (event) => {
        this.setState({additionalServices: event.target.value});
    }
    
    DateTimeIsEmpty(appointment){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;


        if(appointment.startingDate < today){return false}
        else{
            if (appointment.startingDate > appointment.endingDate) {return false}
            else{
                for(let i = 0; i < this.state.allFreeAppointments.length; i++) {    //prolaz kroz sve iz FREE baze
                               
                    if(this.state.allFreeAppointments[i].startingDate > appointment.startingDate && this.state.allFreeAppointments[i].startingDate < appointment.endingDate){return false}  
                    
                    else{   
                        if(this.state.allFreeAppointments[i].endingDate > appointment.startingDate && this.state.allFreeAppointments[i].endingDate < appointment.endingDate){return false}

                        else{   
                            if(this.state.allFreeAppointments[i].startingDate < appointment.startingDate && this.state.allFreeAppointments[i].endingDate > appointment.endingDate){return false}

                        }
                    }

                  }
                  for(let i = 0; i < this.state.allScheduledAppointments.length; i++) {    //prolaz kroz sve iz SCHEDULED baze
                               
                    if(this.state.allScheduledAppointments[i].startingDate > appointment.startingDate && this.state.allScheduledAppointments[i].startingDate < appointment.endingDate){return false}  
                    
                    else{   
                        if(this.state.allScheduledAppointments[i].endingDate > appointment.startingDate && this.state.allScheduledAppointments[i].endingDate < appointment.endingDate){return false}

                        else{   
                            if(this.state.allScheduledAppointments[i].startingDate < appointment.startingDate && this.state.allScheduledAppointments[i].endingDate > appointment.endingDate){return false}

                        }
                    }

                  }
                  
                  for(let i = 0; i < this.state.allQuickAppointments.length; i++) {    //prolaz kroz sve iz QUICK baze
                               
                    if(this.state.allQuickAppointments[i].startingDate > appointment.startingDate && this.state.allQuickAppointments[i].startingDate < appointment.endingDate){return false}  
                    
                    else{   
                        if(this.state.allQuickAppointments[i].endingDate > appointment.startingDate && this.state.allQuickAppointments[i].endingDate < appointment.endingDate){return false}

                        else{   
                            if(this.state.allQuickAppointments[i].startingDate < appointment.startingDate && this.state.allQuickAppointments[i].endingDate > appointment.endingDate){return false}

                        }
                    }

                  }

                return true}
    }
        
    
    }

    Add(){
        let activeUser =  JSON.parse(localStorage.getItem('activeUser'));

        let appointment = {           
            id:this.state.id,
            additionalServices:this.state.additionalServices,
            endingDate:this.state.endingDate,
            numberOfPeople:this.state.numberOfPeople,
            price:this.state.price,
            startingDate:this.state.startingDate,
            instructorId:activeUser.id,
        }
        

        if (this.DateTimeIsEmpty(appointment) == true){

        console.log('appointment => ' + JSON.stringify(appointment));
        axios.post("http://localhost:8080/api/v1/adventurequickappointments/",appointment);
        
        window.location.reload();
    }
    else{window.alert("Invalid date or date is not empty")}
    }
    logout(){
        localStorage.clear();
        this.props.history.push(`/login`);
       
    }
    
    componentDidMount(){
        axios.get("http://localhost:8080/api/v1/adventurefreeappointments").then((res)=>{this.setState({allFreeAppointments: res.data});});
        axios.get("http://localhost:8080/api/v1/adventureappointments").then((res2)=>{this.setState({allScheduledAppointments: res2.data});});
        axios.get("http://localhost:8080/api/v1/adventurequickappointments").then((res3)=>{this.setState({allQuickAppointments: res3.data});});
    }
    render() {
        return (
            <div>
               
                
                <div className="registrationdiv">
                    <br/><br/>
                                <label> Starting date: </label>
                                <input type="date" name="startingDate" className="form-control" value={this.state.startingDate} onChange={this.changeStartingDateHandler}/>
                                <label> Ending Date: </label>
                                <input type="date"  name="endingDate" className="form-control" value={this.state.endingDate} onChange={this.changeEndingDateHandler}/>
                                <label> Number of pepole: </label>
                                <input name="numberOfPeople" className="form-control" value={this.state.numberOfPeople} onChange={this.changeNumberOfPeopleHandler}/>
                                <label> Price: </label>
                                <input name="price" className="form-control" value={this.state.price} onChange={this.changePriceHandler}/>
                                <label> Additional Services: </label>
                                <input name="additionalServices" className="form-control" value={this.state.additionalServices} onChange={this.changeAdditionalServicesHandler}/>
                                
                                
                                
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={()=>this.Add()}>Add Quick Appointment</button></div>
                                
                                
                                

                </div>
            </div>

        )   ;
    }
}

export default AddAdventureQuickAppointmentComponent;