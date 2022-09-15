import React, { useState, useEffect } from 'react';
import Card from './Card.js'

const Cardboard = (props) => {

    const cards = [
        {sign: '一', name: 'いち'},
        {sign: '二', name: 'に'},
        {sign: '三', name: 'さん'},
        {sign: '四', name: 'よん'},
        {sign: '五', name: 'ご'},
        {sign: '六', name: 'ろく'},
        {sign: '七', name: 'なな'},
        {sign: '八', name: 'はち'},
        {sign: '九', name: 'く'},
        {sign: '十', name: 'じゅう'},
        {sign: '百', name: 'ひゃく'},
        {sign: '億', name: 'おく'},
    ]

    const [position, setPosition] = useState(
        cards.map((item, index) => index)
    );

    const randomizeArray = (array) => {
        let randomizedArr = array.slice(0);
        for (let i=0; i<randomizedArr.length; i++){
            const j = Math.floor(Math.random() * randomizedArr.length);
			[randomizedArr[i], randomizedArr[j]] = [
				randomizedArr[j],
				randomizedArr[i],
			];
		}
		return randomizedArr;
	};

    const randomizeCards = () => {
		setPosition(randomizeArray(position));
	};

    return(
        <div classname="cardboard">
            {position.map((place) => {
				return (
					<Card
						key={cards[place].name}
						sign={cards[place].sign}
						name={cards[place].name}
						reset={props.reset}
						endCurrentStage={props.endCurrentStage}
						incrementScore={props.incrementScore}
						randomizeCards={randomizeCards}
					/>
				);
			})}
        </div>
    )
}

export default Cardboard;