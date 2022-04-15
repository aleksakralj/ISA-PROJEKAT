import React, {useState, useEffect} from 'react';
import '../Assets/Styles/ShipProfilePage.css'

const ShipProfilePage = () => {

    const [ship, setShip] = useState({});

    const getShipInfo = () => {
        setShip( JSON.parse(localStorage.getItem('activeShip')));
        
    }

    useEffect(() => {
        getShipInfo();
    },[]);

    return (
        <div className='ship-profile-container'>
            <div className='ship-caption-content'>               
                <div className='ship-properties'>
                    <div className='basic-ship-info'>
                        <h2>{ship.name}</h2>
                        <p>{ship.address}</p>
                        <div className='owner-data'>
                            <h5>Aca faca</h5>
                            <button>Look profile</button>
                        </div>
                        <p>{ship.capacity}</p>
                    </div>
                <img className='ship-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg'></img>
                </div>
            </div>

            <div className='ship-content-container'>
            <div className='ship-itmes-container'>
                    <div className='ship-additional-info-box'>
                        <h5>Fishing equipment</h5>
                        <p>{ship.fishingEquipment}</p>
                    </div>
                    <div className='ship-additional-info-box'>
                        <h5>Additional services</h5>
                        <p>{ship.additionalServices}</p>    
                    </div>
                </div>
                <div className='ship-description-prices-container'>
                    <div className='ship-description'>
                        <h5>Description</h5>
                        <p>{ship.description}</p>
                    </div>
                    <div className='ship-configuration'>
                        <p>Type: {ship.type}</p>
                        <p>{ship.length} meters long</p>
                        <p>{ship.numberOfEngines} ENGINES</p>
                        <p>Speed: {ship.topSpeed} KM/H</p>
                        <p>Power: {ship.hp} HORSE POWER</p>
                    </div>
                </div>

                <div className='ship-rules-container'>
                    <div className='ship-additional-info-box'>
                        <h5>Rules of conduct</h5>
                        <p>{ship.rules}</p>
                    </div>
                    <div className='ship-additional-info-box'>
                        <h5>Terms of reservation</h5>
                        <p>{ship.termsOfReservation}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ShipProfilePage;
