import React from "react";
import '../scss/Copyright.scss';
import { ReactComponent as Cclogo } from '../assets/cc-logo.svg';
import { ReactComponent as ArrowUp } from '../assets/arrow_upward.svg';

const Copyright = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="copyright-container">
        <h4>Terms and Conditions</h4>
        <Cclogo />
        <div className="copyright-arrow">
          <ArrowUp onClick={scrollTop} />
        </div>
      </div>
    </>
  )
}
export default Copyright;