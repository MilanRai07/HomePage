import React from "react";
import NewsHeader from "./NewsHeader";
import '../scss/NewsIndex.scss';
import { NewsData } from '../Data/NewsData';
import NewsCard from "./NewsCard";
const NewsIndex = () => {
  return (
    <>
      <div className="news-index">
        <div className="news-container">
          <div className="news-header">
            <NewsHeader />                       {/* //News header imported */}
          </div>
          <div className="news-card-container">
            {
              NewsData.map((ele, index) => {             //feature section1 Card Data are mapped 
                const { id, img, title, text } = ele;
                return (
                  <div key={index}>
                    <NewsCard
                      NId={id}
                      NImg={img}
                      NTitle={title}
                      NText={text}
                    />
                  </div>
                )
              })

            }
          </div>
        </div>
        <div className="view-button">
          <button>
            <p>
              View all news
            </p>
          </button>
        </div>
      </div>
    </>
  )
}
export default NewsIndex;