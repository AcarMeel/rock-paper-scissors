import Header from './components/Header/Header'
import './index.scss'
import Game from './components/Game/Game';
import { useGameStore } from './store/store';
import Results from './components/Results/Results';
import Logo from './assets/images/logo.svg';
import RulesButton from './components/RulesButton/RulesButton';
import Dialog from './components/Dialog/Dialog';

function App() {
    const { gameName, score, playAgain, openDialog } = useGameStore((state: any) => state);
    return (
        <>
            <main className="app">
                <div className="center-content as-column pt-md">
                    <Header name={gameName} total={score} logo={Logo} />
                    { playAgain ? <Game /> : <Results /> }
                </div>
                <RulesButton />
                { openDialog && <Dialog /> }
            </main>
        </>
    )
}

export default App
