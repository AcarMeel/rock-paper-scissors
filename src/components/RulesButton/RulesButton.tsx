import { useGameStore } from '../../store/store';
import './_rules-button.scss';

const RulesButton = () => {
    const setOpenDialog = useGameStore(state => state.setOpenDialog);

    return (
        <button onClick={() => setOpenDialog()} className='button-rules'>Rules</button>
    )
}

export default RulesButton