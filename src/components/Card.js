import React, { useEffect, useState } from 'react';
import '../App.css';


const Card = (props) => {

const [clicked, setClicked] = useState(false);

const handleClick = () => {
    setClicked(!clicked);
    if(clicked){
        props.checkEndGame();
    } else {
        props.incrementScore();
    }
    props.checkHighScore();
    props.randomizeCards();
}

useEffect(() => {
    if (props.reset) {
        setClicked(false);
    }
}, [props.reset])


    return(
        <div className='card' onClick={handleClick}>
            <span className='signKanji'>{props.sign}</span>
            <span className='titleKanji' alt=''>{props.name}</span>
        </div>
    )
}

export default Card;