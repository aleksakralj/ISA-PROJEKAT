import React, { Component } from 'react';

class Clientupdateprofile extends Component {
    constructor(props){
        super(props)
        this.state={}

        this.cancelUpdate=this.cancelUpdate.bind(this);
    }
    updateAccount(){
        
    }
    cancelUpdate(){
        this.props.history.push("/clientprofile")
    }
    render() {
        return (
            <div>
                <div className='container-xxl' style={{ border: '3px solid #111111', borderRadius:'5%', width: '700px', height: '650px', backgroundColor:'lightgray', position: 'absolute', left: '27%' }}>
                    <text style={{ position: 'absolute', fontSize: '45px', top: '25px', left: '33%' }}> Update data </text>
                    <div style={{ width: '180px', height: '500px', position:'absolute', left:'150px',top:'-90px' }}>
                        <label style={{ position: 'absolute', top: '230px', fontSize: '23px' }}> First name: </label>
                        <label style={{ position: 'absolute', top: '280px', fontSize: '23px' }}> Last name: </label>
                        <label style={{ position: 'absolute', top: '330px', fontSize: '23px' }}> Address: </label>
                        <label style={{ position: 'absolute', top: '380px', fontSize: '23px' }}> City: </label>
                        <label style={{ position: 'absolute', top: '430px', fontSize: '23px' }}> Country: </label>
                        <label style={{ position: 'absolute', top: '480px', fontSize: '23px' }}> Phone number: </label>
                        <label style={{ position: 'absolute', top: '530px', fontSize: '23px' }}> Date of Birth: </label>
                    </div>

                    <div style={{ width: '220px', height: '500px', position: 'absolute', top: '-48px', right: '120px' }}>
                        <input style={{ position: 'absolute', top: '185px' }} placeholder="FirstName" name="firstName" className="form-control" onChange={this.changeFirstNameHandler} />
                        <input style={{ position: 'absolute', top: '235px' }} placeholder="LastName" name="lastName" className="form-control" onChange={this.changeLastNameHandler} />
                        <input style={{ position: 'absolute', top: '285px' }} placeholder="Address" name="address" className="form-control" onChange={this.changeAddressHandler} />
                        <input style={{ position: 'absolute', top: '335px' }} placeholder="City" name="city" className="form-control" onChange={this.changeCityHandler} />
                        <input style={{ position: 'absolute', top: '385px' }} placeholder="Country" name="country" className="form-control" onChange={this.changeCountryHandler} />
                        <input style={{ position: 'absolute', top: '435px' }} placeholder="PhoneNumber" name="phoneNumber" className="form-control" onChange={this.changePhoneNumberHandler} />
                        <input type="date" style={{ position: 'absolute', top: '490px', width: '220px' }} name="dateOfBirth" onChange={this.changeDateOfBirthHandler} />
                    </div>

                    <div style={{position: 'absolute', top: '520px', left: '0px'}}>
                        <button style={{width:'150px',height:'60px', position: 'absolute',  left: '150px' ,backgroundColor:'lightgreen'}}>Update</button>
                        <button style={{width:'150px',height:'60px', position: 'absolute',  left: '380px'}} onClick={this.cancelUpdate} >Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clientupdateprofile;
