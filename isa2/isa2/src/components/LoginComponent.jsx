import React, { Component } from 'react';

import axios from 'axios';
import validator from 'validator';

import UserService from '../services/UserService';
import ClientPointsService from '../services/ClientPointsService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailErrorMessage: '',
            pointsId: ''
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.register = this.registeruser.bind(this);
        this.use = this.use.bind(this);

    }

    login() {

        if (validator.isEmail(this.state.email)) {

         

          
            axios.post("http://localhost:8080/api/v1/login/" + this.state.email + "/" + this.state.password).then(response => {
                localStorage.setItem('activeUser', JSON.stringify(response.data));

                let activeUser = JSON.parse(localStorage.getItem('activeUser'));

                this.setState({ pointsId: activeUser.id })
                ClientPointsService.getClientPointsById(this.state.pointsId).then(response => {
                    localStorage.setItem('activeUserPoints', JSON.stringify(response.data));
                });

                switch (activeUser.type) {
                    case 'fishing_instructor':
                        this.props.history.push(`/fishinginstructorprofile`);
                        
                        break;
                    case 'ship_owner':
                        this.props.history.push(`/shipownerprofile`);
                        break;
    
                    case 'cottage_owner':
                        this.props.history.push('/cottageownerprofile');
                        break;
    
                    case 'Clinet':
    
    
                        this.props.history.push('/homepageclient');
                        break;
                    case 'admin':
                        //treba da resetuje lozinku
                        if (activeUser.password == "password") {
                            this.props.history.push(`/adminchangepassword`)
                            break;
                        }
                        else this.props.history.push(`/adminprofile`);
                        break;
    
                    case 'main_admin':
                        this.props.history.push(`/mainadminprofile`);
                        break;
    
                    default:
                        return 'NE ZNAM';
    
                }


            })





        } else {
            this.setState({ emailErrorMessage: 'Email is invalid' })

        }

    }





    registeruser() {
        this.props.history.push('/registeruser');
    }
    register() {
        this.props.history.push('/register');
    }
    use() {
        this.props.history.push('/use')
    }

    changeEmailHandler = (event) => {


        this.setState({ email: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    componentDidMount() {
        //localStorage.clear(); Ne moze da stoji jer sam backuje na login page u procesu logina
        

    }

    render() {
        return (
            <div>
                <div style={{ position: 'absolute', top: '150px', left: '33%', height: '300px', width: '500px' }} >

                    <div style={{ position: 'absolute', top: '0px', left: '0px' }} className="logindiv">
                        <h3 style={{ position: 'absolute', top: '20px', left: '40%' }} className="text-center"> LOGIN </h3>

                        <form>
                            <div className="form-group">

                                <label style={{ position: 'absolute', left: '10px', top: '100px' }}> Email: </label>
                                <input style={{ position: 'absolute', top: '125px' }} placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                <div style={{ position: 'absolute', top: '165px', color: 'red', left: '38%' }}>{this.state.emailErrorMessage}</div>

                                <label style={{ position: 'absolute', left: '10px', top: '200px' }}> Password: </label>
                                <input style={{ position: 'absolute', top: '225px' }} type='password' placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler} />

                                <div style={{ position: 'absolute', top: '315px' }} className="center"><button className="loginbtn" onClick={()=>this.login()}>Login</button></div>
                            </div>


                        </form>

                    </div>

                </div>

               
            </div>
        );
    }
}

export default LoginComponent;