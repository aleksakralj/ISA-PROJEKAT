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


import MainAdminProfileComponent from './components/MainAdminProfileComponent';
import AdminChangePasswordComponent from './components/AdminChangePasswordComponent';
import DeleteRequestComponent from './components/DeleteRequestComponent';

import MainRegistrationRequestComponent from './components/MainRegistrationRequestComponent';
import MainIncomeComponent from './components/MainIncomeComponent';
import MainCottageOwnersComponent from './components/MainCottageOwnersComponent';
import MainCottagesComponent from './components/MainCottagesComponent';
import MainShipOwnersComponent from './components/MainShipOwnersComponent';
import MainShipsComponent from './components/MainShipsComponent';
import MainViewRegistrationRequestComponent from './components/MainViewRegistrationRequestComponent';

//import MainClientsComponent from './components/MainClientsComponent'; <Route path = "/mainclients" component={MainClientsComponent}></Route>



import background from './images/stephen-crowley-eh3kB7wAJgs-unsplash.jpg';
import ClientProfileComponent from './components/ClientProfileComponent';
import ShipProfileComponent from './components/ShipProfileComponent';
import ClientsComponent from './components/ClientsComponent';
import MainClientsComponent from './components/MainClientsComponent';
import MainFishingInstructorsComponent from './components/MainFishingInstructorsComponent';
import ClientCottageHistoryComponent from './components/ClientCottageHistoryComponent';
import Clientadvenutreshistorycomponent from './components/ClientAdvenutresHistoryComponent';
import Clientshipshistorycomponent from './components/ClientShipsHistoryComponent';
import Clientschedulecottagecomponent from './components/ClientScheduleCottageComponent';

import CottageAppointmentComponent from './components/CottageAppointmentComponent';
import AddAppointmentComponent from './components/AddAppointmentComponent';

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
              <Route path = "/login" exact component={LoginComponent}></Route>

              <Route path = "/TODO" exact component={HomePageCommponent}></Route>

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

              <Route path = "/mainadminprofile" component={MainAdminProfileComponent}></Route>  
              <Route path = "/adminchangepassword" component={AdminChangePasswordComponent}></Route>
              <Route path = "/deleterequest" component={DeleteRequestComponent}></Route>


              <Route path = "/mainregistrationrequests" component={MainRegistrationRequestComponent}></Route>
              <Route path = "/mainincome" component={MainIncomeComponent}></Route>
              <Route path = "/maincottageowners" component={MainCottageOwnersComponent}></Route>
              <Route path = "/maincottages" component={MainCottagesComponent}></Route>
              <Route path = "/mainshipowners" component={MainShipOwnersComponent}></Route>
              <Route path = "/mainships" component={MainShipsComponent}></Route>
              <Route path = "/mainviewrequests/:id" component={MainViewRegistrationRequestComponent}></Route>
              

              <Route path = "/clientprofile" component={ClientProfileComponent}></Route>

              <Route path = "/shipprofile" component={ShipProfileComponent}></Route>
              <Route path = "/clients" component={ClientsComponent}></Route>
              <Route path = "/mainclients" component={MainClientsComponent}></Route>
              <Route path = "/fishinginstructors" component={FishingInstructorsComponent}></Route>
              <Route path = "/mainfishinginstructors" component={MainFishingInstructorsComponent}></Route>
              <Route path = "/clientcottagehistory" component={ClientCottageHistoryComponent}></Route>
              <Route path = "/clientadventureshistory" component={Clientadvenutreshistorycomponent}></Route>
              <Route path = "/clientshipshistory" component={Clientshipshistorycomponent}></Route>
              <Route path= "/clientschedulecottage" component={Clientschedulecottagecomponent}></Route>
              <Route path= "/cottageappointments" component={CottageAppointmentComponent}></Route>
              <Route path= "/cottageaddappointment" component={AddAppointmentComponent}></Route>
              
              </Switch>
          </div>
                                
        </Router>
     
     
    </div>
    
  );
}

export default App;
