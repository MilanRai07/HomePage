import React from "react";
import { ReactComponent as Book } from '../assets/Icon.svg';
import { ReactComponent as Zap } from '../assets/Icon (1).svg';
import { ReactComponent as VideoCircle } from '../assets/Icon (2).svg';
import '../scss/DropDownMenu.scss';
const DropDownMenu = () => {
   return (
      <>
         <div className="drop-menu">
            <div className="drop-point"> 
               <Book />
               <div>
                  <h3>Blog</h3>
                  <p>The latest industry news update and info.</p>
               </div>
            </div >
            <div className="drop-point"> {/*   for zap */}
               <Zap />
               <div>
                  <h3>Customer stories</h3>
                  <p>Learn how our customers are making big changes.</p>
               </div>
            </div >
            <div className="drop-point">{/*   for videocircle */}
               <VideoCircle />
               <div>
                  <h3>Video tutorials</h3>
                  <p>Get up and running on new features and techniques</p>
               </div>
            </div>
         </div>
      </>
   )
}
export default DropDownMenu;