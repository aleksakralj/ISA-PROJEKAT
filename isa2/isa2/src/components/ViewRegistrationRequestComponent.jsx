import React, { Component } from 'react';
import RegistrationRequestService from '../services/RegistrationRequestService';


class ViewRegistrationRequestComponent extends Component {
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
            type:'',
            reason:''
            
            
        }
       
    
        this.acceptRequest= this.acceptRequest.bind(this);
    }
    
    denyRequest(id){
        RegistrationRequestService.deleteRegistrationRequest(id).then(res=>{
                this.setState({registrationRequests: this.state.registrationRequests.filter(request=>request.id !==id)});
                this.props.history.push("/adminsendemailreg"); // refresh ne radi nzm zasto
        });
    }
    acceptRequest= (e) => {
        e.preventDefault();
        let registrationRequests = {email:this.state.email, password:this.state.password, firstName:this.state.firstName, lastName:this.state.lastName, address:this.state.address, city:this.state.city, country:this.state.country, phoneNumber:this.state.phoneNumber, type: this.state.type, reason:this.state.reason}
        console.log('registrationRequests => ' + JSON.stringify(registrationRequests));
        RegistrationRequestService.createUser(registrationRequests).then((res)=>{this.props.history.push('/adminsendemailreg')});
        this.denyRequest(this.props.match.params.id);

        
        //const{type} = props
        /*switch(registrationRequests.type){
            case 'fishing_instructor':
                RegistrationRequestService.createRegistrationRequestFI(registrationRequests).then((res)=>{this.props.history.push('/registrationrequests')});
                this.denyRequest(this.props.match.params.id);
            break;

            case 'ship_owner':
                RegistrationRequestService.createRegistrationRequestSO(registrationRequests).then((res)=>{this.props.history.push('/registrationrequests')});
                this.denyRequest(this.props.match.params.id);
            break;

            case 'cottage_owner':
                RegistrationRequestService.createRegistrationRequestCO(registrationRequests).then((res)=>{this.props.history.push('/registrationrequests')});
                this.denyRequest(this.props.match.params.id);
            break;

            case 'user':
                RegistrationRequestService.createRegistrationRequestU(registrationRequests).then((res)=>{this.props.history.push('/registrationrequests')});
                this.denyRequest(this.props.match.params.id);
            break;
            
            default :
            
        }
        */
    }
    componentDidMount(){
        RegistrationRequestService.getRegistrationRequestById(this.props.match.params.id).then((res) => {
            let request = res.data;
            this.setState({
                email: request.email,
                password: request.password,
                firstName: request.firstName,
                lastName: request.lastName, 
                address: request.address,
                city: request.city,
                country: request.country,
                phoneNumber: request.phoneNumber,
                type:request.type,
                reason:request.reason

            });
        });
    }
    render() {
        return (
            <div>
                 
                <div className="registrationdiv">
                    <br/><br/>
                                <label> Email: </label>
                                <input name="email" className="form-control" value={this.state.email} />
                                <label> Password: </label>
                                <input name="password" className="form-control" value={this.state.password} />
                                

                                <label> First name: </label>
                                <input name="firstname" className="form-control" value={this.state.firstName} />
                                <label> Last name: </label>
                                <input name="lastname" className="form-control" value={this.state.lastName} />
                                
                                <label> Address: </label>
                                <input name="address" className="form-control" value={this.state.address}/>
                                <label> City: </label>
                                <input name="city" className="form-control" value={this.state.city} />   
                                <label> Country: </label>
                                <input name="country" className="form-control" value={this.state.country}/> 

                                <label> Phone number: </label>
                                <input name="phonenumber" className="form-control" value={this.state.phoneNumber}/>

                                <label> Type: </label>
                                <input name="type" className="form-control" value={this.state.type}/>

                                <label> Reason: </label>
                                <input name="reason" className="form-control" value={this.state.reason}/>


                                <br/>
                                <div className="center"><button className="loginbtn" onClick={this.acceptRequest}>Accept</button></div>
                                <div className="center"><button className="loginbtn" onClick={this.denyRequest}>Deny</button></div>

                </div>
            </div>
        );
    }
}

export default ViewRegistrationRequestComponent;