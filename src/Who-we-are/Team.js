import React from "react";
import '../scss/Team.scss';
const Team = (props) => {
  const { TId, TImg, TName } = props;
  return (
    <>
      <div className="team-name">
        <div className="team-img-container">
          <img src={TImg} alt={TId} className="team-img"></img>
        </div>
        <h3>
          {TName}
        </h3>
      </div>
    </>
  )
}
export default Team;