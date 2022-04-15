import React, {useState, useEffect} from 'react';
import '../Assets/Styles/CottageProfilePage.css'

const CottageProfilePage = () => {

    const [cottage, setCottage] = useState({});

    const getCottageInfo = () => {
        setCottage( JSON.parse(localStorage.getItem('activeCottage')));        
    }

    useEffect(() => {
        getCottageInfo();
    },[]);

    return (
        <div className='cottage-profile-page-container'>
             <div className='cottage-caption-content'>               
                <div className='cottage-properties'>
                    <div className='basic-cottage-info'>
                        <h2>{cottage.name}</h2>
                        <p>{cottage.address}</p>
                        <div className='owner-data'>
                            <h5>Aca faca</h5>
                            <button>Look profile</button>
                        </div>
                        <p>{cottage.numberOfRooms}</p>
                    </div>
                <img className='cottage-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg'></img>
                </div>
            </div>
            
            <div className='cottage-content-container'>
                <div className='cottage-content-box'>
                    <h4>Description</h4>
                    <p>{cottage.description}</p>
                </div>
                <div className='cottage-content-box'>
                    <h4>Rules</h4>
                    <p>{cottage.rules}</p>
                </div>

            </div>

        </div>
    );
}

export default CottageProfilePage;
