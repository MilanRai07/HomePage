import React from "react";
import '../scss/Overlay.scss';
import { ReactComponent as Logo } from "../assets/Company logo.svg";
import { ReactComponent as Twitter } from "../assets/Twitter.svg";
import { ReactComponent as LinkedIn } from "../assets/LinkedIn.svg";
import { ReactComponent as Youtube } from "../assets/YouTube.svg";
const OverLay = () => {
  return (
    <>
      <div className="overlay">
        <div className="overlay-container">
          <div className="overlay-logo-container">
            <div className="overlay-logo">
              <Logo className="logo" />
            </div>
            <div className="overlay-text">
              <p>We are a collaboration of non-government organisation
                and professionals working to ensure that government spending.</p>
            </div>
            <div className="overlay-socialmedia">
              <Twitter className="twitter" />
              <LinkedIn className="linkedin" />
              <Youtube className="youtube" />
            </div>
          </div>
          <div className="overlay-lists">
            <div className="list">
              <h4>Links</h4>
              <ul>
                <li>Campaigns</li>
                <li>Resources</li>
                <li>News</li>
                <li>About us</li>
              </ul>
            </div>
            <div className="list">
              <h4>Resources</h4>
              <ul>
                <li>Tranparency Toolkit</li>
                <li>Evindence</li>
                <li>Best Practises</li>
              </ul>
            </div>
            <div className="list">
              <h4>Work with Us</h4>
              <ul>
                <li>Contact US</li>
                <li>Join Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default OverLay;