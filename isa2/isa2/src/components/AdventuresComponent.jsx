import axios from 'axios';
import React, { Component } from 'react';
import AdventureService from '../services/AdventureService';

class AdventuresComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

            adventures:[]
            
        }
        this.addAdventure=this.addAdventure.bind(this);
        this.viewAdventure=this.viewAdventure.bind(this); 
        this.deleteAdventure=this.deleteAdventure.bind(this);   
    }
    deleteAdventure(id){
        AdventureService.deleteAdventure(id).then(res=>{
                this.setState({adventures: this.state.adventures.filter(adventure=>adventure.id !==id)});
                window.location.refresh(); //zasto ni ovkao nece da refrehuje ni sa reload nece 
        });
    }
    fishinginstructorprofile(){
        this.props.history.push('/fishinginstructorprofile')
    }
    addAdventure(){
        this.props.history.push("/addadventure");
    }
    viewAdventure(id){
        this.props.history.push(`/viewadventure/${id}`);
    }
    logout(){
        localStorage.removeItem('activeUser')
        this.props.history.push(`/login`);
    }
    adventures(){
        this.props.history.push('/adventures');
    }
    search(search){
        //this.setState({seach: this.state.seach})
        axios.get("http://localhost:8080/api/v1/adventures/name/" + search ).then((res)=>{
                this.setState({adventures: res.data});
        });
    }
    componentDidMount(){
        let activeUser =  JSON.parse(localStorage.getItem('activeUser'));
        axios.get("http://localhost:8080/api/v1/adventures/instructorid/" + activeUser.id ).then((res)=>{
                this.setState({adventures: res.data});
        });
     } 
     changeSearchHandler = (event) => {
        this.setState({search: event.target.value});
    }
    render() {
        return (
            <div>
                <div className="menu">
                <button onClick={()=>this.fishinginstructorprofile()} > Profile</button>
                <button onClick={()=>this.adventures()}> Adventures</button>
                

                <button className="menubtnLog" onClick={()=>this.logout()} >Logout</button>
                </div>

                <br/><br/><br/><br/><br/><br/>
                <button onClick={()=>this.addAdventure(this.props.match.params.id)} className="loginbtn">Add</button>
                <br/>
                <input name="name" value={this.state.search} onChange={this.changeSearchHandler}></input>
                <button onClick={()=>this.search(this.state.search)} className="loginbtn">Search</button>

                <h2 className="text-center">Adventures</h2>

                    <div className="row">
                        <table className = "table table-striped table-borderd">
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
                                        <tr key= {adventures.id}>
                                            <td>{adventures.name} </td>
                                            <td>{adventures.address}</td>
                                            <td>{adventures.description}</td>
                                            <td>{adventures.maxPeople}</td>
                                            <td>{adventures.rulesOfConduct}</td>
                                            <td>{adventures.termsOfReservation}</td>
                                            
                                            
                                            <td><button onClick={()=>this.deleteAdventure(adventures.id)} className="loginbtn">Delete</button></td>
                                            <td><button onClick={()=>this.viewAdventure(adventures.id)} className="loginbtn">View</button></td>
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