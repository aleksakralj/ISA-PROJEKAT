import React, { Component } from 'react';
import AdventureService from '../services/AdventureService';

class ViewAdventureComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            address: '',
            description: '',
            maxPeople: '',
            rulesOfConduct: '',
            termsOfReservation: '',
            instructorId: '',
            additionalServices:'',
            prices:'',
            fishingEquipment:'',
            clientComponents: false,
            fishingInstructorComponents: true,
            unautentifiedUserComponents: false

        }
        this.adventures = this.adventures.bind(this);
        this.fishinginstructorprofile = this.fishinginstructorprofile.bind(this);

        this.updateAdventure = this.updateAdventure.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeMaxPeopleHandler = this.changeMaxPeopleHandler.bind(this);
        this.changeRulesOfConductHandler = this.changeRulesOfConductHandler.bind(this);
        this.changeTermsOfReservationHandler = this.changeTermsOfReservationHandler.bind(this);
        this.changeAdditionalServicesHandler = this.changeAdditionalServicesHandler.bind(this);
        this.changePricesHandler = this.changePricesHandler.bind(this);
        this.changeFishingEquipmentHandler = this.changeFishingEquipmentHandler.bind(this);
    }
    updateAdventure = (e) => {
        e.preventDefault();
        let adventure = { name: this.state.name, address: this.state.address, description: this.state.description, maxPeople: this.state.maxPeople, rulesOfConduct: this.state.rulesOfConduct, termsOfReservation: this.state.termsOfReservation, instructorId: this.state.instructorId, additionalServices: this.state.additionalServices, prices: this.state.prices, fishingEquipment: this.state.fishingEquipment }
        console.log('adventure => ' + JSON.stringify(adventure));

        AdventureService.updateAdventure(adventure, this.props.match.params.id).then(res => {
            this.props.history.push('/adventures');
        });
    }
    fishinginstructorprofile() {
        this.props.history.push('/fishinginstructorprofile')
    }
    adventures() {
        this.props.history.push("/adventures");
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changeMaxPeopleHandler = (event) => {
        this.setState({ maxPeople: event.target.value });
    }
    changeRulesOfConductHandler = (event) => {
        this.setState({ rulesOfConduct: event.target.value });
    }
    changeTermsOfReservationHandler = (event) => {
        this.setState({ termsOfReservation: event.target.value });
    }
    changeAdditionalServicesHandler = (event) => {
        this.setState({ additionalServices: event.target.value });
    }
    changePricesHandler = (event) => {
        this.setState({ prices: event.target.value });
    }
    changeFishingEquipmentHandler = (event) => {
        this.setState({ fishingEquipment: event.target.value });
    }

    addAppointment()
    {
        this.props.history.push('/addadventureappointment')
    }

    addQuickAppointment()
    {
        this.props.history.push('/addadventurequickappointment')
    }

    componentDidMount() {

        /*
        let activeUser = JSON.parse(localStorage.getItem('activeUser'));
        if (activeUser === null) {
            this.state.unautentifiedUserComponents = true;
            this.state.clientComponents = false;
            this.state.fishingInstructorComponents = false;
        }
        else {
            if (activeUser.type == 'Clinet') {
                this.state.clientComponents = true;
                this.state.fishingInstructorComponents = false;
                this.state.unautentifiedUserComponents = false;
            }
            if (activeUser.type == 'fishing_instructor') {
                this.state.clientComponents = false;
                this.state.fishingInstructorComponents = true;
                this.state.unautentifiedUserComponents = false;
            }
        }
        
        AdventureService.getAdventureById(this.props.match.params.id).then((res) => {
            let adventure = res.data;
            this.setState({
                name: adventure.name,
                address: adventure.address,
                description: adventure.description,
                maxPeople: adventure.maxPeople,
                rulesOfConduct: adventure.rulesOfConduct,
                termsOfReservation: adventure.termsOfReservation,
                additionalServices: adventure.additionalServices,
                prices: adventure.prices,
                fishingEquipment: adventure.fishingEquipment

            });
        });
        */

        let activeAdventure =  JSON.parse(localStorage.getItem('activeAdventure'))

        this.setState({
            id:activeAdventure.id,
            name:activeAdventure.name,
            address:activeAdventure.address,
            description:activeAdventure.description,
            maxPeople:activeAdventure.maxPeople,
            rulesOfConduct:activeAdventure.rulesOfConduct,
            termsOfReservation:activeAdventure.termsOfReservation,
            additionalServices:activeAdventure.additionalServices,
            prices:activeAdventure.prices,
            fishingEquipment:activeAdventure.fishingEquipment,
            instructorId:activeAdventure.instructorId,


        });
    }
    render() {
        return (
            <div>

                
                <h2 className='text-center'>Adventure profile</h2>
                <div style={{position:'absolute',top:'25px'}} className="center"><button className="transparentbtn" onClick={()=>this.addAppointment()}>Add appointment</button></div>
                <div style={{position:'absolute',top:'25px',left:'830px'}} className="center"><button className="transparentbtn" onClick={()=>this.addQuickAppointment()}>Add Quick appointment</button></div>
                    

                <div style={{position:'absolute',top:'150px',left:'35%'}} className="registrationdiv">
                    <br /><br />
                    <label> Name: </label>
                    <input name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                    <label> Address: </label>
                    <input name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler} />
                    <label> Description: </label>
                    <input name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} />
                    <label> Max number of people: </label>
                    <input name="maxPeople" className="form-control" value={this.state.maxPeople} onChange={this.changeMaxPeopleHandler} />

                    <label> Rules of conduct: </label>
                    <input name="rulesOfConduct" className="form-control" value={this.state.rulesOfConduct} onChange={this.changeRulesOfConductHandler} />
                    <label> Terms of reservation: </label>
                    <input name="termsOfReservation" className="form-control" value={this.state.termsOfReservation} onChange={this.changeTermsOfReservationHandler} />

                    <label> Additional services: </label>
                    <input name="additionalServices" className="form-control" value={this.state.additionalServices} onChange={this.changeAdditionalServicesHandler} />
                    <label> Prices: </label>
                    <input name="prices" className="form-control" value={this.state.prices} onChange={this.changePricesHandler} />
                    <label> Fishing equipment: </label>
                    <input name="fishingEquipment" className="form-control" value={this.state.fishingEquipment} onChange={this.changeFishingEquipmentHandler} />
                    <br />

                   
                    <div className="center"><button className="loginbtn" onClick={()=>this.updateAdventure}>Update</button><br/><br/></div>
                    
                    
                </div>
            </div>
        );
    }
}

export default ViewAdventureComponent;