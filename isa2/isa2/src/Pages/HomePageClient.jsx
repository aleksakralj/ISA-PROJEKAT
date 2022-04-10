import SiteWelcomingMessage from '../Conponents/SiteWelcomingMessage';
import EntityCardList from '../Conponents/EntityCardList';
import '../Assets/Styles/HomepageClient.css'


const Homepageclient = () => {
    return (
        <div className='homepage-container'>
            <div className='homepage-welcoming-text-message'>
                <SiteWelcomingMessage/>
            </div>          
            <EntityCardList/>            
        </div>
    );
}

export default Homepageclient;
