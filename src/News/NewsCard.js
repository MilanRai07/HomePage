import '../scss/NewsCard.scss';
import { ReactComponent as ArrowForward } from '../assets/arrow_forward.svg';
const NewsCard = props => {
    const { NId, NImg, NTitle, NText } = props;
    return (
        <>
            <div className="news-card">
                <div className="news-imgContainer">
                    <img src={NImg} alt={NId} className="news-img"></img>
                </div>
                <div className="cards-body">
                    <h3>{NTitle}</h3>
                    <p>{NText}</p>
                </div>
                <div className="news-btn">
                    Learn more
                    <ArrowForward />
                </div>
            </div>
        </>
    )
}
export default NewsCard;