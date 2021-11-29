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
function App() {
  return (
    <div>
      <HeaderComponent />
      
        <Router>
         
          <div className="container">
            <Switch> 
              <Route path = "/" exact component={LoginComponent}></Route>
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
                  
            </Switch>
          </div>
            
        </Router>

      <FooterComponent/>
    </div>
    
  );
}

export default App;
