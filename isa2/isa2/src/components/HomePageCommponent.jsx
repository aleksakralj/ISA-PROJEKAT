import React, { Component } from 'react';
import background from './try/pexels-ron-lach-10412889.jpg';

const homeBackgroundStyle = {
    width: '100%',
    height: '800px',
    backgrounImage: '',
    backgroundSize: 'cover'
};

const recStyle1 = {
    border: '2px outset black',  
    margin: 0,
    position: 'relative',
    top: '-10px',
    right: '-950px',
    width: '170px',
    height: '180px'  
};

const recStyle2 = {
    border: '2px outset black',  
    margin: 0,
    position: 'relative',
    top: '-190px',
    right: '-1150px',
    width: '170px',
    height: '180px'    
};

const welcomingStyle = {
    width: '200px',
    position: 'relative',
    top:'130px',
    right:'-932px'

};


 class HomePageCommponent extends Component {
    constructor(props){
        super(props)
        this.state={
          
        }        
    }
    
    render() {
        return (
           <div>
                           
               <div style={welcomingStyle}>
                    <h1 align="center"> WELCOME </h1>
                    <h3 align="center"> Look at our </h3>
                </div>

                <div className="cardrectangle" >
                    <br></br>
                    <img src="https://cdn-icons.flaticon.com/png/512/3395/premium/3395262.png?token=exp=1638562981~hmac=cc0d11cbe1769c12f75f1f7506d3fe33"  align="left" alt="" width="165" height="68"/> 
                    <h3 align="center"> <br></br> Adventures </h3>
                </div>
                
                <div className="cardrectangle" style={recStyle1} >
                    <br></br>
                    <img src="https://d1bd5u3q1t3nu7.cloudfront.net/icons/50/cargo-ship-icon.png"    align="left" alt="" width="165" height="68"/> 
                    <h3 align="center"> <br></br> Ships </h3>
                </div>

                <div className="cardrectangle" style={recStyle2} >
                    <br></br>
                    <img src="https://cdn-icons-png.flaticon.com/512/20/20176.png" align="left"  alt="" width="165" height="68"/> 
                    <h3 align="center"><br></br> Cottages </h3>
                </div>
        


            </div>
        );
    }
}

export default HomePageCommponent