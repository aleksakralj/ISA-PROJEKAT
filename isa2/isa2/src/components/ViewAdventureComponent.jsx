import React, { Component } from 'react';
import AdventureService from '../services/AdventureService';

class ViewAdventureComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            name: '',
            address: '',
            description:'',
            maxPeople:'',
            rulesOfConduct: '',
            termsOfReservation:'',
            instructorId:''
             
        }
        this.updateAdventure=this.updateAdventure.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeMaxPeopleHandler=this.changeMaxPeopleHandler.bind(this);
        this.changeRulesOfConductHandler=this.changeRulesOfConductHandler.bind(this);
        this.changeTermsOfReservationHandler=this.changeTermsOfReservationHandler.bind(this);
    }
    updateAdventure= (e) => {
        e.preventDefault();
        let adventure = {name:this.state.name, address:this.state.address, description:this.state.description, maxPeople:this.state.maxPeople, rulesOfConduct:this.state.rulesOfConduct, termsOfReservation:this.state.termsOfReservation, instructorId:this.state.instructorId}
        console.log('adventure => ' + JSON.stringify(adventure));

        AdventureService.updateAdventure( adventure,this.props.match.params.id).then(res => {
            this.props.history.push('/adventures');
        });
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
    changeMaxPeopleHandler = (event) => {
        this.setState({maxPeople: event.target.value});
    }
    changeRulesOfConductHandler = (event) => {
        this.setState({rulesOfConduct: event.target.value});
    }
    changeTermsOfReservationHandler = (event) => {
        this.setState({termsOfReservation: event.target.value});
    }
    componentDidMount(){
        AdventureService.getAdventureById(this.props.match.params.id).then((res) => {
            let adventure = res.data;
            this.setState({
                name:adventure.name,
                address:adventure.address,
                description:adventure.description,
                maxPeople:adventure.maxPeople,
                rulesOfConduct:adventure.rulesOfConduct,
                termsOfReservation:adventure.termsOfReservation


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
                                <label> Max number of people: </label>
                                <input name="maxPeople" className="form-control" value={this.state.maxPeople} onChange={this.changeMaxPeopleHandler}/>

                                <label> Rules of conduct: </label>
                                <input name="rulesOfConduct" className="form-control" value={this.state.rulesOfConduct} onChange={this.changeRulesOfConductHandler}/>
                                <label> Terms of reservation: </label>
                                <input name="termsOfReservation" className="form-control" value={this.state.termsOfReservation} onChange={this.changeTermsOfReservationHandler}/>
                                
                                <br/>
                                <div className="center"><button className="loginbtn" onClick={this.updateAdventure}>Update</button></div>

                </div>
            </div>
        );
    }
}

export default ViewAdventureComponent;