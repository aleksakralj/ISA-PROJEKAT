import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RegistrationRequestComponent from './components/RegistrationRequestComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AdminProfileComponent from './components/AdminProfileComponent';
//import MenuComponent from './components/MenuComponent';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
import RegistrationUserComponent from './components/RegistrationUserComponent';
import RegistrationWaitComponent from './components/RegistrationWaitComponent';
import AddAdminComponent from './components/AddAdminComponent';
import ChangePasswordComponent from './components/ChangePasswordComponent';
import IncomeComponent from './components/IncomeComponent';
import ServiceProfileComponent from './components/ServiceProfileComponent';
import ServicePicturesComponent from './components/ServicePicturesComponent';
import ServiceFreeReservationsComponent from './components/ServiceFreeReservationsComponent';
import ServiceRulesComponent from './components/ServiceRulesComponent';
import ServiceEquipmentComponent from './components/ServiceEquipmentComponent';
import ServicePriceComponent from './components/ServicePriceComponent';

import AllAdminsComponent from './components/AllAdminsComponent';
import UpdateAdminComponent from './components/UpdateAdminComponent';

import HomePageCommponent from './components/HomePageCommponent';
import background from './images/stephen-crowley-eh3kB7wAJgs-unsplash.jpg';
import ClientProfileComponent from './components/ClientProfileComponent';
import ShipsComponent from './components/ShipsComponent';
import AdventuresComponent from './components/AdventuresComponent';
import CottagesComponent from './components/CottagesComponent';
import ShipProfileComponent from './components/ShipProfileComponent';

const backStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover' 
};


function App() {
  return (
    <div style={backStyle}>          
        <Router>
          <HeaderComponent/>
          <div className="container">
            <Switch> 
              <Route path = "/" exact component={HomePageCommponent}></Route>
              <Route path = "/registrationrequests" component={RegistrationRequestComponent}></Route>
              <Route path = "/adminprofile" component={AdminProfileComponent}></Route>
              <Route path = "/register" component={RegistrationComponent}></Route>
              <Route path = "/registeruser" component={RegistrationUserComponent}></Route>
              <Route path = "/registrationwait" component={RegistrationWaitComponent}></Route>
              <Route path = "/addadmin" component={AddAdminComponent}></Route>
              <Route path = "/changepassword" component={ChangePasswordComponent}></Route>
              <Route path = "/income" component={IncomeComponent}></Route>
              <Route path = "/serviceprofile" component={ServiceProfileComponent}></Route>
              <Route path = "/servicepictures" component={ServicePicturesComponent}></Route>
              <Route path = "/servicereservations" component={ServiceFreeReservationsComponent}></Route>
              <Route path = "/servicerules" component={ServiceRulesComponent}></Route>
              <Route path = "/serviceequipment" component={ServiceEquipmentComponent}></Route>
              <Route path = "/serviceprice" component={ServicePriceComponent}></Route>
              <Route path = "/homepage" component={HomePageCommponent} ></Route>
              <Route path = "/login" component={LoginComponent}></Route>
              <Route path = "/alladmins" component={AllAdminsComponent}></Route>
              <Route path = "/updateadmin/:id" component={UpdateAdminComponent}></Route>
              <Route path = "/clientprofile" component={ClientProfileComponent}></Route>
              <Route path = "/ships" component={ShipsComponent}></Route> 
              <Route path = "/adventures" component={AdventuresComponent}></Route>
              <Route path = "/cottages" component={CottagesComponent}></Route>
              <Route path = "/shipprofile" component={ShipProfileComponent}></Route>
              </Switch>
          </div>                      
        </Router>
     
      <FooterComponent/>
    </div>
    
  );
}

export default App;
