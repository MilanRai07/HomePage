import React from "react";
import '../scss/FeatureIndex.scss';
import CampaignCard from "./CampaignCard";
import FeatureHeader from "./FeatureHeader";
import { CampaignData } from "../Data/CampaignData";
const FeatureIndex = () => {
  const CData = CampaignData;
  return (
    <>
      <div className="feature-container">
        <div className="feature-header">
          <FeatureHeader />                       {/* //feature section1 header imported */}
        </div>
        <div className="campaigncard-container">
          {
            CData.map((ele, index) => {             //feature section1 Card Data are mapped 
              const { id, img, title } = ele;
              return (
                <div key={index}>
                  <CampaignCard                  //feature section1 Card imported 
                    CId={id}
                    CImg={img}
                    CTitle={title}
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
export default FeatureIndex;