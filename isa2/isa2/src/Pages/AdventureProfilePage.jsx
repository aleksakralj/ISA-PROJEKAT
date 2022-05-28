import React, {useState, useEffect} from 'react';
import '../Assets/Styles/AdventureProfilePage.css'

const AdventureProfilePage = () => {

    const [adventure, setAdventure] = useState({});

    const getAdventureInfo = () => {
        setAdventure( JSON.parse(localStorage.getItem('activeAdventure')));
        console.log(adventure);
        console.log(adventure);
    }

    useEffect(() => {
        getAdventureInfo();
    },[]);
    return (
        <div className='adventure-profile-container'>
            <div className='adventure-caption-content'>               
                <div className='adventure-properties'>
                    <div className='basic-adventure-info'>
                        <h2>{adventure.name}</h2>
                        <p>Address: {adventure.address}</p>
                        <p>Rating: </p>
                        <div className='instructor-data'>
                            <h5>Aca faca</h5>
                            <button>Look profile</button>
                        </div>
                        <p>Max people: {adventure.maxPeople}</p>
                    </div>
                <img className='adventure-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg'></img>
                </div>
            </div>

            <div className='adventure-content-container'>
                <div className='adventure-itmes-container'>
                    <div className='adventure-additional-info-box'>
                        <h5>Fishing equipment</h5>
                        <p>{adventure.fishingEquipment}</p>
                    </div>
                    <div className='adventure-additional-info-box'>
                        <h5>Additional services</h5>
                        <p>{adventure.additionalServices}</p>    
                    </div>
                </div>
                <div className='adventure-description-prices-container'>
                    <div className='adventure-description'>
                        <h5>Description</h5>
                        <p>{adventure.description}</p>
                    </div>
                    <div className='adventure-prices'>
                        <p>sadsadasdasdjasdjaskdjaskdjaskjdksajdkashdasd</p>
                    </div>
                </div>

                <div className='adventure-rules-container'>
                    <div className='adventure-additional-info-box'>
                        <h5>Rules of conduct</h5>
                        <p>{adventure.rulesOfConduct}</p>
                    </div>
                    <div className='adventure-additional-info-box'>
                        <h5>Terms of reservation</h5>
                        <p>{adventure.termsOfReservation}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdventureProfilePage;
