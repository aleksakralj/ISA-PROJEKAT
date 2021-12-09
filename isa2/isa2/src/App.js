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
import ViewRegistrationRequestComponent from './components/ViewRegistrationRequestComponent';
import HomePageCommponent from './components/HomePageCommponent';
import background from './images/pexels-ron-lach-10412889.jpg';
import CottageOwnerProfileComponent from './components/CottageOwnerProfileComponent';
import CottageProfileComponent from './components/CottageProfileComponent';
import RoomProfileComponent from './components/RoomProfileComponent';
import AllRoomsComponent from './components/AllRoomsComponent';
import CottageOwnersComponent from './components/CottageOwnersComponent';
import ShipOwnersComponent from './components/ShipOwnersComponent';
import FishingInstructorsComponent from './components/FishingInstructorsComponent';
import ShipsComponent from './components/ShipsComponent';
import CottagesComponent from './components/CottagesComponent';
import AdventuresComponent from './components/AdventuresComponent';
import AddAdventureComponent from './components/AddAdventureComponent';
import ViewAdventureComponent from './components/ViewAdventureComponent';
import FishingInstructorProfileComponent from './components/FishingInstructorProfileComponent';
import localhost from './components/localhost.jsx';
import CottageOwnerCottages from './components/CottageOwnerCottages';
import AddCottage from './components/AddCottageComponent';
import AddRoom from './components/AddRoomComponent';
const backStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'
};


function App() {
  return (
    <div style={backStyle}>
      <HeaderComponent />
      
        <Router>
         
          <div className="container">
            <Switch> 
            <Route path = "/" exact component={localhost}></Route>
              <Route path = "/login" exact component={LoginComponent}></Route>
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
              <Route path = "/alladmins" component={AllAdminsComponent}></Route>
              <Route path = "/updateadmin/:id" component={UpdateAdminComponent}></Route>
              <Route path = "/viewrequests/:id" component={ViewRegistrationRequestComponent}></Route>
              <Route path = "/cottageownerprofile" component={CottageOwnerProfileComponent}></Route>
              <Route path = "/cottageprofile" component={CottageProfileComponent}></Route>
              <Route path = "/roomprofile" component={RoomProfileComponent}></Route>
              <Route path = "/allrooms" component={AllRoomsComponent}></Route>
              <Route path = "/cottageowners" component={CottageOwnersComponent}></Route>
              <Route path = "/shipowners" component={ShipOwnersComponent}></Route>
              <Route path = "/fishinginstructors" component={FishingInstructorsComponent}></Route>
              <Route path = "/ships" component={ShipsComponent}></Route>
              <Route path = "/cottages" component={CottagesComponent}></Route>
              <Route path = "/adventures" component={AdventuresComponent}></Route>  
              <Route path = "/addadventure" component={AddAdventureComponent}></Route> 
              <Route path = "/viewadventure/:id" component={ViewAdventureComponent}></Route>
              <Route path = "/fishinginstructorprofile" component={FishingInstructorProfileComponent}></Route>  
              <Route path = "/cottageownercottages" component={CottageOwnerCottages}></Route>
              <Route path = "/addcottage" component={AddCottage}></Route>
              <Route path = "/addroom" component={AddRoom}></Route>
              </Switch>

          </div>
            
        </Router>

      <FooterComponent/>
    </div>
    
  );
}

export default App;
