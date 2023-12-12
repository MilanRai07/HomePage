import React from "react";
import '../scss/WhoWeIndex.scss';
import WhoWeContent from "./WhoWeContent";
import { TeamData } from "../Data/TeamData";
import Team from "./Team";
const WhoWeIndex = () => {
    const DataTeam = TeamData;
    return (
        <>
            <div className="team-container">
                <div>
                    <WhoWeContent />                           {/* Who are we header imported*/}
                </div>
                <div className="team-subcontainer">
                    {
                        DataTeam.map((ele, ind) => {               //team data mapped
                            const { id, img, name } = ele;
                            return (
                                <div key={ind} >
                                    <Team           // Team image and name imported
                                        TId={id}
                                        TImg={img}
                                        TName={name}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default WhoWeIndex;