import React from "react";
import FeatureIndex from "./FeatureSection/FeatureIndex";
import WhoWeIndex from "./Who-we-are/WhoWeIndex";
import SliderIndex from "./Slider/SliderIndex";
import NewsIndex from "./News/NewsIndex";
import ResourceIndex from "./Resouces/ResourceIndex";
import ContactIndex from "./ContactUs/ContactIndex";
import FooterIndex from "./Footer/FooterIndex";
const HomeIndex = () => {
    return (
        <>
            <div>
                <FeatureIndex />
                <WhoWeIndex />
                <SliderIndex/> 
                <NewsIndex />
                <ResourceIndex />
                <ContactIndex />
                <FooterIndex />
            </div>
        </>
    )
}
export default HomeIndex;