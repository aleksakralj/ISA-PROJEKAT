import './App.css';
 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RegistrationRequestComponent from './components/RegistrationRequestComponent';
import AdminProfileComponent from './components/AdminProfileComponent';
//import MenuComponent from './components/MenuComponent';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
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

import CottageOwnerCottages from './components/CottageOwnerCottages';
import AddCottage from './components/AddCottageComponent';
import AddRoom from './components/AddRoomComponent';

import MainAdminProfileComponent from './components/MainAdminProfileComponent';
import AdminChangePasswordComponent from './components/AdminChangePasswordComponent';

import MainRegistrationRequestComponent from './components/MainRegistrationRequestComponent';
import MainIncomeComponent from './components/MainIncomeComponent';
import MainCottageOwnersComponent from './components/MainCottageOwnersComponent';
import MainCottagesComponent from './components/MainCottagesComponent';
import MainShipOwnersComponent from './components/MainShipOwnersComponent';
import MainShipsComponent from './components/MainShipsComponent';
import MainViewRegistrationRequestComponent from './components/MainViewRegistrationRequestComponent';
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
import AdminSendEmailComponent from './components/AdminSendEmailComponent';
import AdminSendEmailREGComponent from './components/AdminSendEmailREGComponent';
import AdminSendEmailCOMComponent from './components/AdminSendEmailCOMComponent';
import AdminSendEmailGRAComponent from './components/AdminSendEmailGRAComponent';
import AdminComplaintsComponent from './components/AdminComplaintsComponent';
import AdminGradeRequestsComponent from './components/AdminGradeRequestsComponent';


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
import Homepageclient from './Pages/HomePageClient';
import Navbar from './Conponents/Navbar';
import LogInPage from './Pages/LogInPage';
import UserRegistrationPage from './Pages/UserRegistrationPage';
import AdventuresListPage from './Pages/AdventuresListPage';
import ShipsListPage from './Pages/ShipsListPage';
import CottagesListPage from './Pages/CottagesListPage';
import AdventureProfilePage from './Pages/AdventureProfilePage';
import CottageProfilePage from './Pages/CottagesProfilePage';
import ShipProfilePage from './Pages/ShipProfilePage';
import ClientProfilePage from './Pages/ClientProfilePage';
import ClientAdventures from './Pages/ClientAdventures';
import PastAdventures from './Pages/PastAdventures';
import PastCottages from './Pages/PastCottages';
import PastShips from './Pages/PastShips';
import AdventureWriteFeedbackPage from './Pages/AdventureWriteFeedbackPage';
import CottageWriteComplaint from './Pages/CottageWriteComplaint';
import ShipWriteComplaint from './Pages/ShipWriteComplaint';
import AdventureQuickAppointmentsPage from './Pages/AdventureQuickAppointmentsPage';
import AdventureFreeTermsPage from './Pages/AdventureFreeTermsPage';
import CottagesQuickAppointmentsPage from './Pages/CottagesQuickAppointmentsPage';
import ShipQuickAppointmentsPage from './Pages/ShipQuickAppointmentsPage';
import AdventureSubscriptionsPage from './Pages/SubscriptionView/AdventureSubscriptionsPage';
import SubscriptionNavigatorPage from './Pages/SubscriptionView/SubscriptionNavigatorPage';
import ScheduleAppointmentsPage from './Pages/ScheduleEntitys/ScheduleAppointments/ScheduleAppointmentsPage'
import PossibleAdventureAppointments from './Pages/ScheduleEntitys/ScheduleAppointments/PossibleAdventureAppointments';
import ScheduleShip from './Pages/ScheduleEntitys/ScheduleShips/ScheduleShip';
import PossibleShipAppointments from './Pages/ScheduleEntitys/ScheduleShips/PossibleShipAppointments';
import ScheduleCottagesPage from './Pages/ScheduleEntitys/ScheduleCottages/ScheduleCottagesPage';
import PossibleCottageAppointments from './Pages/ScheduleEntitys/ScheduleCottages/PossibleCottageAppointments';

/*
const backStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover' 
};
*/
/*
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
*/

function App() {
  
  return (

    <div className='main-content'> 
        <Router>
        <Navbar/>
          
            <Switch> 
        
              <Route path = "/" exact component={Homepageclient}></Route> 
              <Route path = "/homepage" exact component= {Homepageclient}></Route>
              <Route path = "/login" exact component={LogInPage}></Route>
              <Route path = "/TODO" exact component={HomePageCommponent}></Route>
              <Route path = "/registrationrequests" component={RegistrationRequestComponent}></Route>
              <Route path = "/adminprofile" component={AdminProfileComponent}></Route>
              <Route path = "/register" component={RegistrationComponent}></Route>
              <Route path = "/registeruser" component={UserRegistrationPage}></Route>
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
              <Route path = "/homepageclient" component={HomePageCommponent} ></Route>

              <Route path = "/login" component={LoginComponent}></Route>

             
              


              <Route path = "/alladmins" component={AllAdminsComponent}></Route>
              <Route path = "/updateadmin/:id" component={UpdateAdminComponent}></Route>

              <Route path = "/viewrequest" component={ViewRegistrationRequestComponent}></Route>
              <Route path = "/cottageownerprofile" component={CottageOwnerProfileComponent}></Route>
              <Route path = "/cottageprofilenesto" component={CottageProfileComponent}></Route>
              <Route path = "/roomprofile" component={RoomProfileComponent}></Route>
              <Route path = "/allrooms" component={AllRoomsComponent}></Route>
              <Route path = "/cottageowners" component={CottageOwnersComponent}></Route>
              <Route path = "/shipowners" component={ShipOwnersComponent}></Route>
              <Route path = "/fishinginstructors" component={FishingInstructorsComponent}></Route>
              <Route path = "/ships" component={ShipsListPage}></Route>
              <Route path = "/cottages" component={CottagesListPage}></Route>
              <Route path = "/adventuress" component={AdventuresComponent}></Route>  
              <Route path = "/adventures" component={AdventuresListPage}></Route>
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
              

              <Route path = "/clientprofile" component={ClientProfilePage}></Route>
              <Route path = "/shipprofile" component={ShipProfilePage}></Route>
              <Route path = "/shipprofilenes" component={ShipProfileComponent}></Route>
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
              <Route path="/clientpastships" component={PastShips}></Route>
              <Route path="/clientadventure" component= {ClientAdventures}></Route>
              <Route path="/clientpastadventures" component={PastAdventures}></Route>
              <Route path="/clientcottages" component={ClientCottagesComponent}></Route> 
              <Route path="/clientships" component={ClientShipsComponent}></Route>
              <Route path="/homepageclient" component={ClientHomePageCommponent}></Route>
              <Route path="/schedule" component={FishingInstructorScheduleComponent}></Route>
              <Route path="/cottageprofile" component={CottageProfilePage}></Route>
              <Route path="/clientshipprofile" component={Clientshipprofilecomponent}></Route>
              <Route path="/adventureprofile" component={AdventureProfilePage}></Route>
              <Route path="/clientpastcottages" component={PastCottages}></Route>
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
              <Route path="/adventure-write-feedback" component={AdventureWriteFeedbackPage}></Route>
              <Route path="/cottage-write-feedback" component={CottageWriteComplaint}></Route>
              <Route path="/ship-write-feedback" component={ShipWriteComplaint}></Route>
              <Route path="/adventure-quick-appointment" component={AdventureQuickAppointmentsPage}></Route>
              <Route path="/adventure-free-terms" component={AdventureFreeTermsPage}></Route>
              <Route path="/cottage-quick-appointment" component={CottagesQuickAppointmentsPage}></Route>
              <Route path="/ship-quick-appointment" component={ShipQuickAppointmentsPage}></Route>
              <Route path="/adventure-subscriptions" component={AdventureSubscriptionsPage}></Route>
              <Route path="/subscription-navigator" component={SubscriptionNavigatorPage}></Route>
              <Route path="/schedule-adventure-appointment" component={ScheduleAppointmentsPage}></Route>
              <Route path="/possible-adventure-appointments" component={PossibleAdventureAppointments}></Route>
              <Route path="/schedule-ship" component={ScheduleShip}></Route>
              <Route path="/possible-ship-appointments" component={PossibleShipAppointments}></Route>
              <Route path="/schedule-cottage" component={ScheduleCottagesPage}></Route>
              <Route path="/possible-cottage-appointments" component={PossibleCottageAppointments}></Route>

              <Route path="/loginproba" component={LoginComponent}></Route>
              </Switch>
          
                                
        </Router>
     
     
    </div>
    
  );
}

export default App;
