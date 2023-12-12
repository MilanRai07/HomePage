import React, { createContext, useEffect, useState } from "react";

import NavBar from "./NavBar";

const ParentData = createContext();   // context API creationt to pass props and function to children that is navbar

const NavBarIndex = () => {
    const [Cont, setCont] = useState(false);
    const [Search, setSearch] = useState(false);
    const [Menu, setMenu] = useState(false);

    const ShowCont = () => {     //function to show dropdown menu from resources 
        setCont(!Cont);
    }
    const ShowSearch = () => {   //function to show search bar from search icon
        setSearch(!Search);
    }
    const ChangeSearch = () => {   // function to change search value
        if (Search === true) {
            setSearch(false);
        }
    }
    const HamMenu = () => {    //function to show menu by using humburger icon
        setMenu(!Menu);
    }
    useEffect(() => {              // hook to change background brightness
        let background = document.getElementById("hero1");
        if (Search === true) {
            background.style.filter = "brightness(40%)";
        }
        else {
            background.style.filter = "brightness(100%)";
        }

    }, [Search]);

    const contextValue = {   // functions and states that are to be passed to child 
        cont: Cont,
        menu: Menu,
        search: Search,
        contShow: ShowCont,
        searchShow: ShowSearch,
        changeSearch: ChangeSearch,
        hamMenu: HamMenu,
    }

    return (
        <>
            <ParentData.Provider value={contextValue}>
                <NavBar />
            </ParentData.Provider>
        </>
    )
}
export default NavBarIndex;
export { ParentData };