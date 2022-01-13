import React, { Component } from 'react';
import CottageAppointmentsService from '../services/CottageAppointmentsService';
import CottageService from '../services/CottageService';
import CottageFreeAppointmentsService from '../services/CottageFreeAppointmentsService';

class Clientcottageprofilecomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            name: '',
            address: '',
            description: '',
            rating: '',
            numberOfRooms: '',
            rules: '',
            ownerId: '',
            hiddenSchedule: false,
            shownInfo: true,
            startTime:'',
            endTime:'',
            newAppointmentCottageId:'',
            newAppointmentClientId:'',
            newAppointmentStartTime:'',
            newAppointmentEndTime:'',
            appointmentPrice:'',
            appointmentAdditionalServices:''
        }

        this.showSchedule=this.showSchedule.bind(this);
        this.cancelCottages=this.cancelCottages.bind(this);
    }
    componentDidMount() {
        let activeCottage = JSON.parse(localStorage.getItem('activeCottage'))
        let appointments = CottageFreeAppointmentsService.findCottageFreeAppointmentsByCottageId();
        

        this.setState({
            id: activeCottage.id,
            name: activeCottage.name,
            address: activeCottage.address,
            description: activeCottage.description,
            rating: activeCottage.rating,
            numberOfRooms: activeCottage.numberOfRooms,
            rules: activeCottage.rules,
            ownerId: activeCottage.ownerId            
        })

    }
    changeStartTime(event){
        this.setState({ newAppointmentStartTime: event.target.value });
    }
    changeEndTime(event){
        this.setState({newAppointmentEndTime: event.target.value});
    }
    showSchedule() {
        this.setState({
            hiddenSchedule: true,
            shownInfo: false

        })
    }
    cancelCottages(){
        this.setState({
            hiddenSchedule:false,
            shownInfo:true
        })
    }
    schedule(){
        let loggedClient = JSON.parse(localStorage.getItem('activeUser'));
        let activeCottage = JSON.parse(localStorage.getItem('activeCottage'));
        let newAppointment = this.setState({newAppointmentClientId: loggedClient.id, newAppointmentCottageId: activeCottage.id, newAppointmentStartTime: this.state.newAppointmentStartTime, newAppointmentEndTime: this.state.newAppointmentEndTime, newAppointmentPrice: this.state.appointmentPrice, newAppointmentAdditionalServices: this.state.appointmentAdditionalServices })
    
        CottageAppointmentsService.createCottageAppointment(newAppointment);
        this.props.history.push(`/clientscheduledcottages`);        
    }
    render() {
        return (
            <div>

                {this.state.shownInfo ?
                    <label style={{ fontSize: '45px', position: 'absolute', top: '70px', left: '47%' }}> {this.state.name} </label>
                    : null}
                {this.state.shownInfo ?

                    <div style={{ position: 'absolute', top: '190px', left: '70px' }}>
                        <label>Owner name:</label>
                        <input style={{ position: 'absolute', left: '160px' }}>{ }</input>
                        <button style={{ position: 'absolute', left: '380px', height: '30px', width: '180px' }}>See owners info  </button>
                    </div>
                    : null}

                {this.state.shownInfo ?

                    <div style={{ position: 'absolute', left: '70px', top: '250px', width: '150px', height: '400px' }}>
                        <label style={{ position: 'absolute', top: '0px' }}> Address: </label>
                        <label style={{ position: 'absolute', top: '90px' }}> Description: </label>
                        <label style={{ position: 'absolute', top: '260px' }}> Rating: </label>
                        <label style={{ position: 'absolute', top: '310px' }}> Number of rooms: </label>
                        <label style={{ position: 'absolute', top: '360px' }}> Rules: </label>

                    </div>
                    : null}

                {this.state.shownInfo ?

                    <div style={{ position: 'absolute', top: '250px', left: '230px', width: '400px', height: '400px' }} >
                        <input style={{ position: 'absolute', top: '0px' }} name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler} />
                        <textarea style={{ position: 'absolute', top: '80px', width: '395px', height: '160px' }} value={this.state.description}></textarea>
                        <input style={{ position: 'absolute', top: '250px' }} name="rating" className="form-control" value={this.state.rating} onChange={this.changeRatingHandler} />
                        <input style={{ position: 'absolute', top: '300px' }} name="numberOfRooms" className="form-control" value={this.state.numberOfRooms} onChange={this.changeNumberOfRoomsHandler} />
                        <input style={{ position: 'absolute', top: '350px' }} name="rules" className="form-control" value={this.state.rules} onChange={this.changeRulesHandler} />
                    </div>
                    : null}

                {this.state.shownInfo ?

                    <button onClick={this.showSchedule} style={{ position: 'absolute', top: '190px', left: '1000px' }}>Schedule</button>
                    : null}

                {this.state.shownInfo ?

                    <div style={{ position: 'absolute', left: '700px', top: '250px', width: '750px', height: '480px' }} >
                        <table style={{ position: 'absolute', top: '0px', left: '0px', width: '746px' }}>
                            <thead>
                                <tr>
                                    <th>Start time</th>
                                    <th>End time</th>
                                    <th>Price</th>
                                    <th>Number of people</th>
                                    <th>Additional services</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.appointments.map(
                                        appointments =>
                                            <tr key={appointments.id}>
                                                <td>{appointments.startingDate} </td>
                                                <td>{appointments.endingDate}</td>
                                                <td>{appointments.price} </td>
                                                <td>{appointments.numberOfPeople}</td>
                                                <td>{appointments.additionalServices} </td>               
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    : null}


                {this.state.hiddenSchedule ?
                    <div className='container-xl' style={{ position: 'absolute', top: '120px', left: '450px', backgroundColor: 'lightblue', width: '700px', height: '600px', borderStyle: 'dotted', borderRadius: '3%' }}>
                        <div>
                            <label style={{ position: 'absolute', top: '20px', left: '260px', fontWeight: 'bold', fontSize: '50px' }}> Schedule </label>
                        </div>
                        <div style={{ position: 'absolute', top: '120px', width: '300px' }}>
                            <label style={{ position: 'absolute', top: '50px', fontSize: '18px', }}>Cottage name</label>
                            <label style={{ position: 'absolute', top: '100px', fontSize: '18px' }}>Choose start time</label>
                            <label style={{ position: 'absolute', top: '150px', fontSize: '18px' }}>Choose end time</label>
                            <label style={{ position: 'absolute', top: '200px', fontSize: '18px' }}>Insert number of people</label>
                        </div>
                        <div style={{ position: 'absolute', top: '120px', right: '0px', width: '300px' }}>
                            <input type="text" list="allcottages" style={{ position: 'absolute', top: '50px', right: '0px', width: '247px' }} />
                            <input type="datetime-local" onChange={this.changeStartTime} style={{ position: 'absolute', top: '100px', right: '0px', }} />
                            <input type="datetime-local" onChange={this.changeEndTime} style={{ position: 'absolute', top: '150px', right: '0px', width: '247px' }}></input>
                            <input onChange={this.changeNumOfPeopleHandler} value={this.state.numOfPeople} style={{ position: 'absolute', top: '200px', right: '0px', width: '247px' }}></input>
                        </div>
                        <div style={{ width: '200px', height: '80px', position: 'absolute', top: '271px', left: '250px' }}>
                            <label style={{ color: 'red', position: 'absolute', right: '2px' }}>{this.state.numOfDaysError}</label>
                            <label style={{ color: 'red', position: 'absolute', right: '2px', top: '50px' }}>{this.state.numOfPeopleError}</label>
                        </div>
                        <div style={{ position: 'absolute', top: '400px', left: '0px' }}>
                            <button style={{ position: 'absolute', left: '200px', width: '100px', height: '50px', backgroundColor: 'silver' }} onClick={() => this.revealHiddenTable()}> Schedule</button>
                            <button style={{ position: 'absolute', left: '380px', width: '100px', height: '50px' }} onClick={this.cancelCottages} >Cancel</button>
                        </div>
                    </div>
                    : null}

            </div>
        );
    }
}

export default Clientcottageprofilecomponent;
