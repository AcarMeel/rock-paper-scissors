import './_circle.scss';
import Paper from '../../assets/images/icon-paper.svg';
import Scissors from '../../assets/images/icon-scissors.svg';
import Rock from '../../assets/images/icon-rock.svg';

export interface ICircle {
    selection: string,
    heading: string
}

const Circle = ({ selection, heading }: ICircle) => {
    function getImage(selection: string) {
        switch (selection) {
            case 'paper':
                return Paper;
            case 'rock':
                return Rock;
            case 'scissors':
                return Scissors;
            default:
                break;
        }
    }
    return (
        <div className='circle-container'>
            <h3>{heading}</h3>
            <div className={`outer-circle ${selection}`}>
                <div className="inner-circle">
                    <img src={getImage(selection)} alt={selection} />
                </div>
            </div>
        </div>
    )
}

export default Circle