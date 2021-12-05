import React, { Component } from 'react';
import CottageOwnerService from '../services/CottageOwnerService';
class CottageOwnerProfileComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            email: '',
            password: '',
            firstName:'',
            lastName:'',
            address: '',
            city:'',
            country:'',
            phoneNumber:'',
            
        }
        
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePassword2Handler = this.changePassword2Handler.bind(this);

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        
        this.changeAdressHandler = this.changeAdressHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);

        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        
       
        
    }
    

    
    logout(){
        this.props.history.push('/'); //ne znam kako ga ga vratim samo na localhost
    }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }
    changePassword2Handler = (event) => {
        this.setState({password2: event.target.value});
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstname: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastname: event.target.value});
    }

    changeAdressHandler = (event) => {
        this.setState({adress: event.target.value});
    }
    changeCityHandler = (event) => {
        this.setState({city: event.target.value});
    }
    changeCountryHandler = (event) => {
        this.setState({country: event.target.value});
    }

    changePhoneNumberHandler = (event) => {
        this.setState({phonenumber: event.target.value});
    }
    componentDidMount(){
        CottageOwnerService.getCottageOwnerById().then((res) => {
            this.setState({cottageOwner: res.data})
        });

    }

    update(id){
        this.props.history.push(`/updatecottageowner/${id}`);
    }
    render() {
        return (
            <div>
               
                
                <div className="registrationdiv">
                    <br/><br/>
                                <label> Email: </label>
                                <input name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                <label> Password: </label>
                                <input name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                <label> Password again: </label>
                                <input name="password2" className="form-control" value={this.state.password2} onChange={this.changePassword2Handler}/>

                                <label> First name: </label>
                                <input name="firstname" className="form-control" value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                <label> Last name: </label>
                                <input name="lastname" className="form-control" value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                
                                <label> Adress: </label>
                                <input name="adress" className="form-control" value={this.state.adress} onChange={this.changeAdressHandler}/>
                                <label> City: </label>
                                <input name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler}/>   
                                <label> Country: </label>
                                <input name="country" className="form-control" value={this.state.country} onChange={this.changeCountryHandler}/> 

                                <label> Phone number: </label>
                                <input name="phonenumber" className="form-control" value={this.state.phonenumber} onChange={this.changePhoneNumberHandler}/>

                                <br/>
                                <div className="center"><button className="loginbtn" onClick={this.update}>Update</button></div>

                </div>
            </div>

        )   ;
    }
}

export default CottageOwnerProfileComponent;