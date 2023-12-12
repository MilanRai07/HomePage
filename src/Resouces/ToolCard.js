import '../scss/ToolCard.scss';
import { ReactComponent as ArrowForward } from '../assets/arrow_forward.svg';
const ToolCard = props => {
    const { RIcon, RTitle, RText } = props;
    return (
        <>
            <div className="card">
                <div className='icon-container'>
                    <div className="icon">
                        {RIcon}
                    </div>
                </div>
                <div className='card-body'>
                    <h3>{RTitle}</h3>
                    <p>{RText}</p>
                </div>
                <div className="card-btn">
                    Learn more
                    <ArrowForward />
                </div>
            </div>
        </>
    )
}
export default ToolCard;