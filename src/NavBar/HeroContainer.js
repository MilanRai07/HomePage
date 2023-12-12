import React from "react";
import { ReactComponent as Arrow } from '../assets/heroarrow.svg';
const HeroContainer = () => {
  return (
    <>
      <div>
        <h1>Beautiful analytics to grow smarter</h1>
      </div>
      <div>
        <p>Powerful, self-serve product and growth analytics to help yo to convert,
          engage and retain more users. Trusted by
          over 4000 startups. </p>
      </div>
      <div>
        <button>
          <p>Why Catalog?</p>
          <Arrow />
        </button>
      </div>
    </>
  )
}
export default HeroContainer;