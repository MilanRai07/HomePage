import React from "react";
import '../scss/ResourceIndex.scss';
import ResourceHeader from "./ResourceHeader";
import { ResourceData } from '../Data/ResourceData';
import ToolCard from "./ToolCard";
const ResourceIndex = () => {

  return (
    <>
      <div className="resource-section">
        <div className="container">
          <div className="header">
            <ResourceHeader />                       {/* //News header imported */}
          </div>
          <div className="resource-card-container">
            {
              ResourceData.map((ele, index) => {             //feature section1 Card Data are mapped 
                const { icon, title, text } = ele;
                return (
                  <div key={index}>
                    <ToolCard
                      RIcon={icon}
                      RTitle={title}
                      RText={text}
                    />
                  </div>
                )
              })

            }
          </div>
        </div>
        <div className="resource-btn">
          <button>
            <p>
              View all resources
            </p>
          </button>
        </div>
      </div>
    </>
  )
}
export default ResourceIndex;