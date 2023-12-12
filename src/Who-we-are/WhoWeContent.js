import React from "react";
import { ReactComponent as ArrowForward } from '../assets/arrow_forward.svg';
const WhoWeContent = () => {
    return (
        <>
            <div className="team-detail">
                <h3>Who we are</h3>
                <div className="team-text">
                    We are a collaboration of Non Govt.  and
                    professionals working to ensure that government spending is done fairly, openly,
                    efficiently, and creates the best value for money and best outcomes for Europe.
                    We are working at the national and EU levels to advance the principles of openness
                    in spending of funds, procurement, and company ownership within the EU.
                </div>
                <div className="team-btn">
                    See more
                    <ArrowForward />
                </div>
            </div>
        </>
    )
}
export default WhoWeContent;