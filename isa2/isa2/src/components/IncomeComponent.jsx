import React, { Component } from 'react';

class IncomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            income: '',
            percentage: ''
        }
        this.changeIncomeHandler = this.changeIncomeHandler.bind(this);
        this.changePercentageHandler = this.changePercentageHandler.bind(this);
        this.adminprofile = this.adminprofile.bind(this);
        this.logout= this.logout.bind(this); 
        this.income= this.income.bind(this);
        this.addadmin= this.addadmin.bind(this);
        this.regreq= this.regreq.bind(this);

        this.cottageowners=this.cottageowners.bind(this);
        this.cottages=this.cottages.bind(this);
        this.shipowners=this.shipowners.bind(this);
        this.ships=this.ships.bind(this);
        this.clients=this.clients.bind(this);
        
    }

    
    change(){
        this.props.history.push('/income')
    }
    changeIncomeHandler = (event) => {
        this.setState({eincome: event.target.value});
    }
    changePercentageHandler = (event) => {
        this.setState({percentage: event.target.value});
    }
    adminprofile(){
        this.props.history.push('/adminprofile');
    }
    addadmin(){
        this.props.history.push('/addadmin');
    }
    regreq(){
        this.props.history.push('/registrationrequests');
    }
    income(){
        this.props.history.push('/income');
    }
    cottageowners(){
        this.props.history.push('/cottageowners');
    }
    cottages(){
        this.props.history.push('/cottages');
    }
    shipowners(){
        this.props.history.push('/shipowners');
    }
    ships(){
        this.props.history.push('/ships');
    }
    clients(){
        this.props.history.push('/clients');
    }
    logout(){
        localStorage.removeItem('activeUser')
        this.props.history.push(`/login`);
    }
    render() {
        return (
            <div>
                <div className="menu">
                <button onClick={this.adminprofile} > Profile</button>
                
                <button onClick={this.regreq}> Registration requests</button>
                <button onClick={this.income}> Income </button>
                <button onClick={this.cottageowners}> Cottage owners </button>
                <button onClick={this.cottages}> Cottages </button>
                <button onClick={this.shipowners}> Ship owners </button>
                <button onClick={this.ships}> Ships </button>
                <button onClick={this.clients}> Clients </button>

                <button className="menubtnLog" onClick={()=>this.logout()} >Logout</button>
                </div>

                <div className="container">
                    
                    <div className="incomediv">
                        <h3 className="text-center"> INCOME DATA </h3>
                
                        <form>
                            <div className="form-group">
                                <label> Income from reservations: </label>
                                <input  name="income" className="form-control" value={this.state.income} onChange={this.changeIncomeHandler}/>
                                <br/> <br/> 
                                <label> Percentage of reservation: </label>
                                <input  name="percentage" className="form-control" value={this.state.percenrtage} onChange={this.changePercentageHandler}/>
                                    
                                <div className="center"><button className="changepercentagebtn" onClick={this.change}>Change percentage</button></div>
                            </div>
                        </form>
                     </div>    
                </div>
            </div>
        );
    }
}

export default IncomeComponent;