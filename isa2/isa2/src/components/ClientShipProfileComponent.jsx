import React, { Component } from 'react';

class Clientshipprofilecomponent extends Component {
    constructor(props){
        super(props);
        this.state = {appointments: [],
            name: '',
            address: '',
            description: '',
            rating: '',
           
            rules: '',
            ownerId: ''
        }}
    componentDidMount(){
        let activeShip = JSON.parse(localStorage.getItem('activeShip'))

        this.setState({
            id: activeShip.id,
            name: activeShip.name,
            address: activeShip.address,
            description: activeShip.description,
            rating: activeShip.rating,
            numberOfRooms: activeShip.numberOfRooms,
            rules: activeShip.rules,
            ownerId : activeShip.ownerId
        })

    }
    render() {
        return (
            <div>
                                <label style={{ fontSize: '45px', position: 'absolute', top: '70px', left: '47%' }}> {this.state.name} </label>

<div style={{ position: 'absolute', top: '190px', left: '70px' }}>
    <label>Owner name:</label>
    <input style={{ position: 'absolute', left: '160px' }}>{}</input>
    <button style={{ position: 'absolute', left: '380px',height:'30px', width:'180px' }}>See owners info  </button>
</div>
<div style={{ position: 'absolute', left: '70px', top: '250px', width: '150px', height: '400px' }}>
    <label style={{ position: 'absolute', top: '0px' }}> Address: </label>
    <label style={{ position: 'absolute', top: '90px' }}> Description: </label>
    <label style={{ position: 'absolute', top: '260px' }}> Rating: </label>

    <label style={{ position: 'absolute', top: '360px' }}> Rules: </label>
    
</div>
<div style={{ position: 'absolute', top: '250px', left: '230px', width: '400px', height: '400px' }} >
    <input style={{ position: 'absolute', top: '0px' }} name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler} />
    <textarea style={{ position: 'absolute', top: '80px', width: '395px', height: '160px' }} value={this.state.description}></textarea>
    <input style={{ position: 'absolute', top: '250px' }} name="rating" className="form-control" value={this.state.rating} onChange={this.changeRatingHandler} />
    <input style={{ position: 'absolute', top: '350px' }} name="rules" className="form-control" value={this.state.rules} onChange={this.changeRulesHandler} />
</div>

<div style={{  position: 'absolute', left: '700px', top: '180px', width: '750px', height: '480px' }} >
    <table style={{ position: 'absolute', top: '0px', left: '0px', width: '746px' }}>
        <thead>
            <tr>
                <th>Start time</th>
                <th>End time</th>
                <th>Price</th>
                <th>Number of people</th>
                <th>Additional services</th>
                <th>Action</th>
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
                            <td><button className="loginbtn">SCHEDULE</button></td>
                       
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

export default Clientshipprofilecomponent;