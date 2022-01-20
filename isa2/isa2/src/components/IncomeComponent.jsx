import React, { Component } from 'react';
import IncomeService from '../services/IncomeService';
class IncomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            
           incomeFromReservations:'',
           percentageOfReservations:''
        }
        this.changeIncomeHandler = this.changeIncomeHandler.bind(this);
        this.changePercentageHandler = this.changePercentageHandler.bind(this);
        
        this.change=this.change.bind(this);
        
    }
    
    
    change(){
       
        let income = {percentageOfReservations: this.state.percentageOfReservations,
            incomeFromReservations:this.state.incomeFromReservations}
        console.log('income =>' + JSON.stringify(income));

        IncomeService.updateIncome(1,income);
        
    }
    changeIncomeHandler = (event) => {
        this.setState({incomeFromReservations: event.target.value});
    }
    changePercentageHandler = (event) => {
        this.setState({percentageOfReservations: event.target.value});
    }
    
    logout(){
       
        localStorage.clear();
        this.props.history.push(`/login`);
       
    }
    componentDidMount(){
        let activeUser =  JSON.parse(localStorage.getItem('activeUser'))
        if (activeUser.type == "admin" || activeUser.type == "main_admin" ){
          IncomeService.getIncomeById(1).then((res) => {
                let income = res.data;
                this.setState({
                    incomeFromReservations: income.incomeFromReservations,
                    percentageOfReservations: income.percentageOfReservations
                    
                });
            });
        }  
        
        else{this.logout(); alert("Unauthorised access")}

        }
    
    render() {
        return (
                <div className="container">
                    
                    <div className="incomediv">
                        <h3 className="text-center"> INCOME DATA </h3>
                
                        <form>
                            <div className="form-group">
                                <label> Income from reservations:  </label>
                                <input  name="incomeFromReservations" className="form-control" value={this.state.incomeFromReservations} onChange={this.changeIncomeHandler}/>
                                <br/> <br/> 
                                <label> Percentage of reservations: </label>
                                <input  name="percentageOfReservations" className="form-control" value={this.state.percentageOfReservations} onChange={this.changePercentageHandler}/>
                                    
                                <div className="center"><button className="changepercentagebtn" onClick={()=>this.change()}>Change percentage</button></div>
                            </div>
                        </form>
                     </div>    
                </div>
            
        );
    }
}

export default IncomeComponent;