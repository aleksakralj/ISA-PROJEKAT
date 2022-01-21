import React, { Component } from 'react';
import IncomeService from '../services/IncomeService';
import axios from 'axios';

class IncomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            
           incomeFromReservations:'',
           percentageOfReservations:'',
           adventureAppointments:[],
           startingDate:"2022-01-01"
        }
        //this.changeIncomeHandler = this.changeIncomeHandler.bind(this);
        this.changePercentageHandler = this.changePercentageHandler.bind(this);
        
        this.change=this.change.bind(this);
        
    }
    
    
    change(){
       
        let income = {percentageOfReservations: this.state.percentageOfReservations,
            incomeFromReservations:this.state.incomeFromReservations}
        console.log('income =>' + JSON.stringify(income));

        IncomeService.updateIncome(1,income);
        
    }
    /*changeIncomeHandler = (event) => {
        this.setState({incomeFromReservations: event.target.value});
    }*/
    changePercentageHandler = (event) => {
        this.setState({percentageOfReservations: event.target.value});
    }

    CalculateIncomeFromReservations(){
        var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //Januar je 0
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
    
            
    
        let sum =0;
        for(let i = 0; i < this.state.adventureAppointments.length; i++) {    //prolaz kroz sve iz baze
                               
            if(this.state.adventureAppointments[i].startingDate >= this.state.startingDate && this.state.adventureAppointments[i].endingDate<= this.state.today){sum=sum+this.state.adventureAppointments[i].price}  
    
        }
          
        this.setState({incomeFromReservations:sum})
    
    }
    
    logout(){
       
        localStorage.clear();
        this.props.history.push(`/login`);
       
    }
    componentDidMount(){
        let activeUser =  JSON.parse(localStorage.getItem('activeUser'))
        if (activeUser.type == "admin" || activeUser.type == "main_admin" ){
          IncomeService.getIncomeById(1,activeUser.type).then((res) => {
                let income = res.data;
                this.setState({
                   
                    percentageOfReservations: income.percentageOfReservations
                    
                });
            });

            axios.get("http://localhost:8080/api/v1/adventurehistoryappointments/type/"+ activeUser.type).then((res)=>{
                this.setState({adventureAppointments: res.data});
            }) ;
            console.log(this.state.adventureAppointments);

        this.CalculateIncomeFromReservations();
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
                                <input  name="incomeFromReservations" className="form-control" defaultValue={this.state.incomeFromReservations} />
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





