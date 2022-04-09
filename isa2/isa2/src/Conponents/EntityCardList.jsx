import React,{useState} from 'react';
import EntityCardComponent from './EntityCardComponent'; 

const EntityCardList = () => {
    const [cards, setCards] = useState([
        {
            title: 'Adventures',
            imageAddress : 'https://canary.contestimg.wish.com/api/webimage/5b15352ca309e469b826391d-large.jpg?cache_buster=36f19fa8a1cf6d50c7186334519ccc60',            
            buttonText: 'See Adventures',
            buttonClickLink: '/adventures'
        },
        {
            title: 'Cottages',
            imageAddress: 'https://cdn-icons-png.flaticon.com/512/20/20176.png',
            buttonText: 'See Cottages',
            buttonClickLink: '/cottages'
        },
        {   
            title: 'Ships',
            imageAddress: 'https://d1bd5u3q1t3nu7.cloudfront.net/icons/50/cargo-ship-icon.png',
            buttonText: 'See Ships',
            buttonClickLink: '/ships'
        } 
    ]) 
    return (
        <div  className='entity-cards-container'>
            {cards.map(card=>(
                <EntityCardComponent title={card.title} imageAddress={card.imageAddress} buttonText={card.buttonText} buttonClickLink={card.buttonClickLink} />
            ))}     
        </div>
    );
}

export default EntityCardList;
