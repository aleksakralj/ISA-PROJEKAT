import React from 'react';
import '../Assets/Styles/AdventureProfilePage.css'

const AdventureProfilePage = () => {
    return (
        <div className='adventure-profile-container'>
            <div className='adventure-caption-content'>               
                <div className='adventure-properties'>
                    <div className='basic-adventure-info'>
                        <h2>ACINA AVANTURA</h2>
                        <p>adresa je moja realno</p>
                        <div className='instructor-data'>
                            <h5>Aca faca</h5>
                            <button>Look profile</button>
                        </div>
                        <p>max 5 people</p>
                    </div>
                <img className='adventure-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg'></img>
                </div>
            </div>

            <div className='adventure-content-container'>
                <div className='adventure-itmes-container'>
                    <div className='adventure-additional-info-box'>
                        <h5>Fishing equipment</h5>
                        <ul>
                            <li>prvi</li>
                            <li>drugi</li>
                            <li>treci</li>
                            <li>cetvrti</li>
                            <li>prvi</li>
                        </ul>
                    </div>
                    <div className='adventure-additional-info-box'>
                        <h5>Additional services</h5>
                        <ul>
                            <li>prvi</li>
                            <li>drugi</li>
                            <li>treci</li>
                            <li>cetvrti</li>
                            <li>prvi</li>
                        </ul>
                    </div>
                </div>
                <div className='adventure-description-prices-container'>
                    <div className='adventure-description'>
                        <h5>Description</h5>
                        <p>Opis je stvarno super majke mi moje top kul uvauOpis je stvarno super majke mi moje top kul uvauOpis je stvarno super majke mi moje top kul uvauOpis je stvarno super majke mi moje top kul uvau</p>
                    </div>
                    <div className='adventure-prices'>
                        <p1>sadsadasdasdjasdjaskdjaskdjaskjdksajdkashdasd</p1>
                    </div>
                </div>

                <div className='adventure-rules-container'>
                    <div className='adventure-additional-info-box'>
                        <h5>Rules of conduct</h5>
                        <p>None</p>
                    </div>
                    <div className='adventure-additional-info-box'>
                        <h5>Terms of reservation</h5>
                        <p>None</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdventureProfilePage;
