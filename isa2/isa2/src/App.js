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
import AddQuickAppointmentComponent from './components/AddQuickAppointmentComponent';
import EmailComponent from './components/EmailComponent';
import ShipOwnerProfileComponent from './components/ShipOwnerProfileComponent';
import ShipOwnerShipsComponent from './components/ShipOwnerShipsComponent';
import AddShipComponent from './components/AddShipComponent';
import ShipProfileSOComponent from './components/ShipProfileSOComponent';
import ShipAppointmentComponent from './components/ShipAppointmentComponent';
import AddShipAppointmentComponent from './components/AddShipAppointmentComponent';
import AddShipQuickAppointmentComponent from './components/AddShipQuickAppointment';


import Clientupdateprofile from './components/ClientUpdateProfile';
import DeleteProfileComponent from './components/DeleteProfileComponent';
import Profiledeletionrequestwait from './components/ProfileDeletionRequestWait';
import AdminProfileDeletionsRequestsComponent from './components/AdminProfileDeletionsRequestsComponent';
import Unautentifieduserheader from './components/UnautentifiedUserHeader';
import AdminHeaderComponent from './components/AdminHeaderComponent';
import MainAdminHeaderComponent from './components/MainAdminHeaderComponent';
import FishingInstructorHeaderComponent from './components/FishingInstructorHeaderComponent';
import AdminSendEmailComponent from './components/AdminSendEmailComponent';
import AdminSendEmailREGComponent from './components/AdminSendEmailREGComponent';
import AdminSendEmailCOMComponent from './components/AdminSendEmailCOMComponent';
import AdminSendEmailGRAComponent from './components/AdminSendEmailGRAComponent';
import AdminComplaintsComponent from './components/AdminComplaintsComponent';
import AdminGradeRequestsComponent from './components/AdminGradeRequestsComponent';

import CottageOwnerHeaderComponent from './components/CottageOwnerHeaderComponent';

import AddAdventureAppointmentComponent from './components/AddAdventureAppointmentComponent';
import AddAdventureQuickAppointmentComponent from './components/AddAdventureQuickAppointmentComponent';



import ClientCottagesComponent from './components/ClientCottagesComponent';
import ClientAdventuresComponent from './components/ClientAdventuresComponent';
import ClientShipsComponent from './components/ClientShipsComponent';
import ClientHomePageCommponent from './components/ClientHomePageComponent';
import FishingInstructorScheduleComponent from './components/FishingInstructorScheduleComponent';
import Clientcottageprofilecomponent from './components/ClientCottageProfileComponent';
import Clientadventureprofilecomponent from './components/ClientAdventureProfileComponent';
import Clientshipprofilecomponent from './components/ClientShipProfileComponent';
import CottageScheduleForClientComponent from './components/CottageScheduleForClientComponent';
import ShipScheduleForClientComponent from './components/ShipScheduleForClientComponent';
import AdventureScheduleForClientComponent from './components/AdventureScheduleForClientComponent';
import CottageAppointmentHistoryComponent from './components/CottageAppointmentHistoryComponent';
import ClientReviewComponent from './components/ClientReviewComponent';
import WriteClientReviewComponent from './components/WriteClientReviewComponent';
import ShipAppointmentHistoryComponent from './components/ShipAppointmentHistoryComponent';
import ClientReviewShipComponent from './components/ClientReviewShipComponent';
import WriteClientReviewShipComponent from './components/WriteClientReviewShipComponent';
import AdventureAppointmentHistoryComponent from './components/AdventureAppointmentHistoryComponent';
import WriteClientReviewAdventureComponent from './components/WriteClientReviewAdventureComponent';
import ClientReviewAdventureComponent from './components/ClientReviewAdventureComponent';
import CottageAppointmentReservationsComponent from './components/CottageAppointmentReservationsComponent';
import ClientReviewReservationComponent from './components/ClientReviewReservationComponent';
import ShipAppointmentReservationComponent from './components/ShipAppointmentReservationComponent';
import ClientReviewShipReservation from './components/ClientReviewShipReservation';
import AdventureAppointmentReservationComponent from './components/AdventureAppointmentReservationComponent';
import ClientReviewAdventureReservationComponent from './components/ClientReviewAdventureReservationComponent';
import CottageStatisticsComponent from './components/CottageStatisticsComponent';
import AdventureStatisticsComponent from './components/AdventureStatisticsComponent';
import ShipStatisticsComponent from './components/ShipStatisticsComponent';


import AdminReviewRequestsComponent from './components/AdminReviewRequestsComponent';
import UploadImageComponent from './components/UploadImageComponent';
import DisplayPictureComponent from './components/DisplayPictureComponent';

import UploadImageShipComponent from './components/UploadImageShipComponent';
import DisplayPictureShipComponent from './components/DisplayPictureShipComponent';

import UploadImageAdventureComponent from './components/UploadImageAdventureComponent';
import DisplayPictureAdventureComponent from './components/DisplayPictureAdventureComponent';

const backStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover' 
};


function headerDefinition(){

  if(localStorage.getItem('activeUser')==null){
    return(<Unautentifieduserheader/>)
  }
else{
  let activeUser = JSON.parse(localStorage.getItem('activeUser'))
    
  switch (activeUser.type) {    
    case 'Client': return( <HeaderComponent/>)      
      break;
    case 'fishing_instructor': return(<FishingInstructorHeaderComponent/>)    
      break;
    case 'ship_owner':  return(<div><br/><br/><br/></div>)  
      break;
    case 'cottage_owner':   return(<div><br/><br/><br/></div>)   
      break;
      case 'admin':    return(<AdminHeaderComponent/>)   
      break;
      case 'main_admin':    return(<MainAdminHeaderComponent/>)   
      break;
      case '' :    return(<h1>WRONG</h1>)   
      break;
    default: 
      break;
  
  }
}

  
}


function App() {
  
  return (

    <div style={backStyle}> 
      
        <Router>
          
         {headerDefinition() } 
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


              
              <Route path = "/homepage" component={HomePageCommponent} ></Route>

              <Route path = "/serviceprice" component={ServicePriceComponent}></Route>
              <Route path = "/homepageclient" component={HomePageCommponent} ></Route>

              <Route path = "/login" component={LoginComponent}></Route>

             
              <Route path = "/homepage" component={HomePageCommponent} ></Route>
              


              <Route path = "/alladmins" component={AllAdminsComponent}></Route>
              <Route path = "/updateadmin/:id" component={UpdateAdminComponent}></Route>

              <Route path = "/viewrequest" component={ViewRegistrationRequestComponent}></Route>
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
              <Route path = "/viewadventure" component={ViewAdventureComponent}></Route>
              <Route path = "/fishinginstructorprofile" component={FishingInstructorProfileComponent}></Route>  

              <Route path = "/cottageownercottages" component={CottageOwnerCottages}></Route>
              <Route path = "/addcottage" component={AddCottage}></Route>
              <Route path = "/addroom" component={AddRoom}></Route>

              <Route path = "/mainadminprofile" component={MainAdminProfileComponent}></Route>  
              <Route path = "/adminchangepassword" component={AdminChangePasswordComponent}></Route>
              

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
              <Route path= "/cottageaddquickappointment" component={AddQuickAppointmentComponent}></Route>
              <Route path= "/shipownerprofile" component={ShipOwnerProfileComponent}></Route>
              <Route path= "/email" component={EmailComponent}></Route>
              <Route path= "/shipownerships" component={ShipOwnerShipsComponent}></Route>
              <Route path= "/addship" component={AddShipComponent}></Route>
              <Route path= "/shipprofileso" component={ShipProfileSOComponent}></Route>
              <Route path= "/shipappointments" component={ShipAppointmentComponent}></Route>
              <Route path= "/shipaddappointment" component={AddShipAppointmentComponent}></Route>
              <Route path= "/shipaddquickappointment" component={AddShipQuickAppointmentComponent}></Route>


              <Route path= "/clientupdateprofile/:id" component={Clientupdateprofile}></Route>
              <Route path="/deleteprofile" component={DeleteProfileComponent}></Route>
              <Route path="/profiledeletionrequestwait" component={Profiledeletionrequestwait}></Route>

              <Route path="/adminprofiledeletionrequests" component={AdminProfileDeletionsRequestsComponent}></Route>
              <Route path="/adminsendemail" component={AdminSendEmailComponent}></Route>
              <Route path="/adminsendemailreg" component={AdminSendEmailREGComponent}></Route>
              <Route path="/adminsendemailcom" component={AdminSendEmailCOMComponent}></Route>
              <Route path="/adminsendemailgra" component={AdminSendEmailGRAComponent}></Route>
              <Route path="/admincomplaints" component={AdminComplaintsComponent}></Route>
              <Route path="/admingraderequests" component={AdminGradeRequestsComponent}></Route>
              <Route path="/addadventureappointment" component={AddAdventureAppointmentComponent}></Route>
              <Route path="/addadventurequickappointment" component={AddAdventureQuickAppointmentComponent}></Route>

 
              <Route path="/clientcottages" component={ClientCottagesComponent}></Route> 
              <Route path="/clientadventures" component={ClientAdventuresComponent}></Route>
              <Route path="/clientships" component={ClientShipsComponent}></Route>
              <Route path="/homepageclient" component={ClientHomePageCommponent}></Route>
              <Route path="/schedule" component={FishingInstructorScheduleComponent}></Route>
              <Route path="/clientcottageprofile" component={Clientcottageprofilecomponent}></Route>
              <Route path="/clientshipprofile" component={Clientshipprofilecomponent}></Route>
              <Route path="/clientadventureprofile" component={Clientadventureprofilecomponent}></Route>

              <Route path="/cottagescheduleforclient" component={CottageScheduleForClientComponent}></Route>
              <Route path="/shipscheduleforclient" component={ShipScheduleForClientComponent}></Route>
              <Route path="/adventurescheduleforclient" component={AdventureScheduleForClientComponent}></Route>
              <Route path="/cottageappointmentshistory" component={CottageAppointmentHistoryComponent}></Route>
              <Route path="/clientreview" component={ClientReviewComponent}></Route>
              <Route path="/writeclientreview" component={WriteClientReviewComponent}></Route>

              <Route path="/shipappointmentshistory" component={ShipAppointmentHistoryComponent}></Route>
              <Route path="/clientreviewship" component={ClientReviewShipComponent}></Route>
              <Route path="/writeclientreviewship" component={WriteClientReviewShipComponent}></Route>
              <Route path="/adventureappointmentshistory" component={AdventureAppointmentHistoryComponent}></Route>
              <Route path="/clientreviewadventure" component={ClientReviewAdventureComponent}></Route>
              <Route path="/writeclientreviewadventure" component={WriteClientReviewAdventureComponent}></Route>
              <Route path="/cottageappointmentsreservations" component={CottageAppointmentReservationsComponent}></Route>
              <Route path="/clientreviewreservation" component={ClientReviewReservationComponent}></Route>
              <Route path="/shipappointmentsreservation" component={ShipAppointmentReservationComponent}></Route>
              <Route path="/clientreviewshipreservation" component={ClientReviewShipReservation}></Route>
              <Route path="/adventureappointmentsreservation" component={AdventureAppointmentReservationComponent}></Route>
              <Route path="/clientreviewadventurereservation" component={ClientReviewAdventureReservationComponent}></Route>
              <Route path="/cottagestatistics" component={CottageStatisticsComponent}></Route>
              <Route path="/adventurestatistics" component={AdventureStatisticsComponent}></Route>
              <Route path="/shipstatistics" component={ShipStatisticsComponent}></Route>
              <Route path="/adminreviewequests" component={AdminReviewRequestsComponent}></Route>
              <Route path="/uploadimage" component={UploadImageComponent}></Route>
              <Route path="/displaypicture" component={DisplayPictureComponent}></Route>
              <Route path="/uploadimageship" component={UploadImageShipComponent}></Route>
              <Route path="/displaypictureship" component={DisplayPictureShipComponent}></Route>
              <Route path="/uploadimageadventure" component={UploadImageAdventureComponent}></Route>
              <Route path="/displaypictureadventure" component={DisplayPictureAdventureComponent}></Route>


              </Switch>
          </div>
                                
        </Router>
     
     
    </div>
    
  );
}

export default App;
