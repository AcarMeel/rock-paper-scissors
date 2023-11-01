import { useGameStore } from "../../store/store";
import "./_results.scss";
import Circle from "../Circle/Circle";

const Results = () => {
  const { userSelection, hostSelection, userWins, togglePlayAgain, isATie } = useGameStore(
    (state: any) => state
  );

  return <div className="results-container">
    <Circle selection={userSelection} heading='You Picked' />
    <div className="game-results">
        <h2>{ userWins ? 'You Win' : isATie ? 'It\'s a tie' : 'You Lose' }</h2>
        <button onClick={togglePlayAgain}>Play Again</button>
    </div>
    <Circle selection={hostSelection} heading='The house picked' />
  </div>;
};

export default Results;
