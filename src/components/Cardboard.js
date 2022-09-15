import React, { useState, useEffect } from 'react';
import Card from './Card.js'
import '../App.css';


const Cardboard = (props) => {

    const cards = [
        {sign: '無', name: 'む'},
        {sign: '細', name: 'さい'},
        {sign: '横', name: 'おう'},
        {sign: '伝', name: 'でん'},
        {sign: '髪', name: 'かみ'},
        {sign: '吸', name: 'きゅう'},
        {sign: '変', name: 'へん'},
        {sign: '険', name: 'けん'},
        {sign: '捨', name: 'しゃ'},
        {sign: '危', name: 'き'},
        {sign: '戻', name: 'れい'},
        {sign: '案', name: 'あん'},
    ]

    const [positions, setPositions] = useState(
        cards.map((value, index) => index)
    );

    const randomizeArray = (array) => {
        let randomizedArr = array.slice(0);
        for (let i = randomizedArr.length - 1; i >= 0; i--){
            const j = Math.floor(Math.random() * i + 1);
            const temp = randomizedArr[i];
            randomizedArr[i] = randomizedArr[j];
            randomizedArr[j] = temp;
		}
		return randomizedArr;
	};

    const randomizeCards = () => {
		setPositions(randomizeArray(positions));
        console.log("yes")
	};

    return(
        <div className="cardboard">
            {positions.map((position) => {
				return (
					<Card
						key={cards[position].name}
						sign={cards[position].sign}
						name={cards[position].name}
						reset={props.reset}
						checkEndGame={props.checkEndGame}
                        checkHighScore={props.checkHighScore}
						incrementScore={props.incrementScore}
						randomizeCards={randomizeCards}
					/>
				);
			})}
        </div>
    )
}

export default Cardboard;