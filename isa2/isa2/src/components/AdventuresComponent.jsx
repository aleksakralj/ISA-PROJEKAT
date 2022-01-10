import axios from 'axios';
import React, { Component } from 'react';
import AdventureService from '../services/AdventureService';

class AdventuresComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            adventures: [],
            clientComponents: false,
            fishingInstructorComponents: true,
            unautentifiedUserComponents: false

        }
        this.addAdventure = this.addAdventure.bind(this);
        this.viewAdventure = this.viewAdventure.bind(this);
        this.deleteAdventure = this.deleteAdventure.bind(this);
    }
    deleteAdventure(id) {
        AdventureService.deleteAdventure(id).then(res => {
            this.setState({ adventures: this.state.adventures.filter(adventure => adventure.id !== id) });
            window.location.refresh(); //zasto ni ovkao nece da refrehuje ni sa reload nece 
        });
    }
    fishinginstructorprofile() {
        this.props.history.push('/fishinginstructorprofile')
    }
    addAdventure() {
        this.props.history.push("/addadventure");
    }
    viewAdventure(id) {
        this.props.history.push(`/viewadventure/${id}`);
    }
    logout() {
        localStorage.removeItem('activeUser')
        this.props.history.push(`/login`);
    }
    adventures() {
        this.props.history.push('/adventures');
    }
    search(search) {
        //this.setState({seach: this.state.seach})
        axios.get("http://localhost:8080/api/v1/adventures/name/" + search).then((res) => {
            this.setState({ adventures: res.data });
        });
    }
    componentDidMount() {
        let activeUser = JSON.parse(localStorage.getItem('activeUser'));

        if(activeUser===null)
        {
            this.state.unautentifiedUserComponents= true;
            this.state.fishingInstructorComponents=false;
           this.state.clientComponents=false;

           AdventureService.getAdventures().then((res) => {
            this.setState({ adventures: res.data });
        });
        }

        else{
        if(activeUser.type==='fishing_instructor'){
           axios.get("http://localhost:8080/api/v1/adventures/instructorid/" + activeUser.id).then((res) => {
                this.setState({ adventures: res.data });
           });
           this.state.fishingInstructorComponents=true;
           this.state.clientComponents=false;
           this.state.unautentifiedUserComponents= false;
        }
        if(activeUser.type==='Client'){
            AdventureService.getAdventures().then((res) => {
                this.setState({ adventures: res.data });
            });
            this.state.fishingInstructorComponents=false;
            this.state.clientComponents=true;
            this.state.unautentifiedUserComponents= false;
        }
    }
    }

    changeSearchHandler = (event) => {
        this.setState({ search: event.target.value });
    }
    render() {
        return (
            <div>
                {this.state.fishingInstructorComponents ?

                    <div className="menu">
                        <button onClick={() => this.fishinginstructorprofile()} > Profile</button>
                        <button onClick={() => this.adventures()}> Adventures</button>


                        <button className="menubtnLog" onClick={() => this.logout()} >Logout</button>
                    </div>

                    : null

                }

            {this.state.fishingInstructorComponents?  
                <button style={{position:'absolute', top:'100px', left:'1200px'}} onClick={() => this.addAdventure(this.props.match.params.id)} className="loginbtn">Add</button>
            :null
            }
            { this.state.clientComponents?
            <button style={{position:'absolute', top:'100px', left:'1200px'}} className='loginbtn'>Schedule</button>
            :null
            }
                <br />
                <input style={{position:'absolute',top:'100px'}} name="name" value={this.state.search} onChange={this.changeSearchHandler}></input>
                <button style={{position:'absolute',top:'100px',left:'310px', height:'35px'}} onClick={() => this.search(this.state.search)} className="loginbtn">Search</button>


                <h2 style={{position:'absolute',top:'70px',left:'45%'}} className="text-center">Adventures</h2>

                <div className="row">
                    <table style={{position:'absolute', left:'0px',top:'140px'}} className="table table-striped table-borderd">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Description</th>
                                <th>Max number of people</th>
                                <th>Rules of conduct</th>
                                <th>Terms of reservation</th>


                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.adventures.map(
                                    adventures =>
                                        <tr key={adventures.id}>
                                            <td>{adventures.name} </td>
                                            <td>{adventures.address}</td>
                                            <td>{adventures.description}</td>
                                            <td>{adventures.maxPeople}</td>
                                            <td>{adventures.rulesOfConduct}</td>
                                            <td>{adventures.termsOfReservation}</td>

                                            {this.state.fishingInstructorComponents ?
                                                <td><button onClick={() => this.deleteAdventure(adventures.id)} className="loginbtn">Delete</button></td>
                                                : null
                                            }
                                            {this.state.clientComponents ?
                                                <td><button onClick={() => this.viewAdventure(adventures.id)} className="loginbtn">View</button></td>
                                                : null
                                            }
                                             {this.state.unautentifiedUserComponents ?
                                                <td><button onClick={() => this.viewAdventure(adventures.id)} className="loginbtn">View</button></td>
                                                : null
                                            }
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

export default AdventuresComponent;