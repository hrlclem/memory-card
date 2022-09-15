import React, { useEffect, useState } from 'react';


const Card = (props) => {

const [clicked, setClicked] = useState(false);

const handleClick = () => {
    setClicked(!clicked);
    if(clicked){
        props.checkEndGame();
    } else {
        props.incrementScore();
    }
    props.randomizeCards();
}

useEffect(() => {
    if (props.reset) {
        setClicked(false);
    }
}, [props.reset])


    return(
        <div classname='card'>
            <span className='sign' alt='{props.name}' onClick={handleClick}>{props.sign}</span>
            <span className='title'>{props.name}</span>
        </div>
    )
}

export default Card;