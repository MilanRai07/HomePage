import React, { useState } from "react";
import '../scss/Slider.scss';
import {SliderData} from '../Data/SliderData';
import { ReactComponent as ArrowLeft } from "../assets/arrowL.svg";
import { ReactComponent as ArrowRight } from "../assets/arrowR.svg";
const SliderIndex=()=>{
    const [DataSlide,setDataSlide]=useState(SliderData);
      const slideLeft = () => {
        setDataSlide([...DataSlide.slice(1), DataSlide[0]]);
      };
    
      const slideRight = () => {
        const numD=DataSlide.length
        setDataSlide([DataSlide[numD - 1], ...DataSlide.slice(0, numD- 1)]);
      };
 return(
    <> 
    <div className="slider-container">
        <div className="arrow">
            <ArrowLeft onClick={slideLeft} />
        </div>
        <div className="slider-row">
            {
               DataSlide.map((ele,ind)=>{
                const {logo}=ele;
                return(
                    <div key={ind}>
                         {logo}
                    </div>
                )
               })
            }
        </div>
        <div className="arrow">
        <ArrowRight onClick={slideRight}/>
        </div>
    </div>
    </>
 )
}
export default SliderIndex;