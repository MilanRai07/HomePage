import React from "react";
import '../scss/CampaignCard.scss';
import { ReactComponent as ArrowForward } from '../assets/arrow_forward.svg';
const CampaignCard = props => {
    const { CId, CImg, CTitle } = props;
    return (
        <>
            <div className="camp-card">
                <div className="camp-imgContainer">
                    <img src={CImg} alt={CId} className="CampImg"></img>
                </div>
                <div className="camp-detail">
                    <h3>{CTitle}</h3>
                    <div className="camp-texts">
                    </div>
                    <div className="camp-btn">
                        Learn more
                        <ArrowForward />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CampaignCard;