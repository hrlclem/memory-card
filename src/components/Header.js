import '../App.css';


const Header = (props) => {

    return(
        <div className="header">
            <div className="title">Kanji Memory Game</div>
            <div className="instructions">Get points by clicking on a Kanji. Be careful, click on it only once!</div>
            <div className="score">Current score: {props.score}</div>
            <div className="highScore">Highest score: {props.highScore}</div>
            <div className="reset">{props.reset}</div>
        </div>
    )
}

export default Header;