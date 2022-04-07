import React,{useState} from 'react';
import EntityCardComponent from './EntityCardComponent'; 

const EntityCardList = () => {
    const [cards, setCards] = useState([
        {
            title: 'Adventures',
            imageAddress : 'https://cdn-icons-png.flaticon.com/512/20/20176.png',            
            buttonText: 'See Adventures'
        },
        {
            title: 'Cottages',
            imageAddress: 'https://cdn-icons-png.flaticon.com/512/20/20176.png',
            buttonText: 'See Cottages'
        },
        {   
            title: 'Ships',
            imageAddress: 'https://cdn-icons-png.flaticon.com/512/20/20176.png',
            buttonText: 'See Ships'
        } 
    ]) 
    return (
        <div  className='entity-cards-container'>
            {cards.map(card=>(
                <EntityCardComponent title={card.title} imageAddress={card.imageAddress} buttonText={card.buttonText}/>
            ))}     
        </div>
    );
}

export default EntityCardList;
