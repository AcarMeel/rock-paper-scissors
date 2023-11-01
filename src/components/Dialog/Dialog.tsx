import './_dialog.scss';
import Close from '../../assets/images/icon-close.svg';
import RulesImg from '../../assets/images/image-rules.svg';
import { useGameStore } from '../../store/store';

const Dialog = () => {
    const closeDialog = useGameStore(store => store.setOpenDialog);
  return (
    <div className="rules-dialog">
        <div className="dialog-body">
            <div className="dialog-header">
                <h1>Rules</h1>
                <button onClick={() => closeDialog()} className="close"><img src={Close} alt="close" /></button>
            </div>
            <div className="dialog-content">
                <img src={RulesImg} alt="rules" />
            </div>
        </div>
    </div>
  )
}

export default Dialog