import './_game.scss';
import Triangle from '../../assets/images/bg-triangle.svg';
import Paper from '../../assets/images/icon-paper.svg';
import Scissors from '../../assets/images/icon-scissors.svg';
import Rock from '../../assets/images/icon-rock.svg';
import { useGameStore } from '../../store/store';

const Game = () => {
    const { setUserSelection, togglePlayAgain, gameOptions, setHostSelection, setWinner } = useGameStore((state: any) => state);
    function gameSelection(selection: string) {
        setUserSelection(selection);
        const newGameOptions = gameOptions;
        const [hostChoice] = [...newGameOptions].splice(
        Math.floor(Math.random() * newGameOptions.length),
        1
        );
        setHostSelection(hostChoice.option);
        setWinner();
        togglePlayAgain();
    }
    return (
        <div className="game-container">
            <div className="triangle">
                <img src={Triangle} alt="triangle" />
                <button className="paper" onClick={() => gameSelection('paper')}>
                    <div className="outer-circle">
                        <div className="inner-circle">
                            <img src={Paper} alt="paper" />
                        </div>
                    </div>
                </button>
                <button className="scissors" onClick={() => gameSelection('scissors')}>
                    <div className="outer-circle">
                        <div className="inner-circle">
                            <img src={Scissors} alt="scissors" />
                        </div>
                    </div>
                </button>
                <button className="rock" onClick={() => gameSelection('rock')}>
                    <div className="outer-circle">
                        <div className="inner-circle">
                            <img src={Rock} alt="rock" />
                        </div>
                    </div>
                </button>
            </div>

        </div>
    )
}

export default Game