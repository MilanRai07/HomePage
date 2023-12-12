import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Down } from "../assets/chevron-down.svg";
import { ReactComponent as Logo } from "../assets/Company logo.svg";
import { ReactComponent as Ham } from "../assets/hamburger-lg-svgrepo-com.svg";
import '../scss/NavBar.scss';
import HeroContainer from "./HeroContainer";
import DropDownMenu from "./DropDownHeader";
import SearchBar from "./SearchBar";
import HumburgerMenu from "./HumburgerMenu";
import { ParentData } from "./NavBarIndex";

const NavBar = () => {
    const context = useContext(ParentData);  //consuming parent value 
    const { cont, search, menu, contShow, searchShow, changeSearch, hamMenu } = context;

    return (
        <>
            <div id='hero1' className="herobox" onClick={changeSearch}>  {/*function call to change value of search */}
                <nav className="navbar">
                    <NavLink to='/'><div>
                        <Logo />
                    </div></NavLink>
                    <div>
                        {cont &&
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Case Studies</li>
                            </ul>
                        }
                    </div>
                    <div onClick={contShow}>          {/*function call to show dropdown menu */}
                        Resources
                        < Down />
                    </div>
                    <div>
                        <Search onClick={searchShow} />
                        <Ham className="ham" onClick={hamMenu} />   {/*function call to show menu using humburger icon */}
                    </div>
                </nav>

                <div className="hero-container">
                    <HeroContainer />
                </div>
                {cont &&
                    <DropDownMenu />
                }
            </div>
            {search &&
                <SearchBar setsearch={changeSearch} /> //passing a function to child as props
            }
            {menu &&
                <HumburgerMenu />
            }
            <Outlet />
        </>
    )
}
export default NavBar;