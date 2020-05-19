import React, { useState } from 'react';

// Components
import Navbar, { NavItem, DropdownMenu } from './components/Navbar'
import Mainarea from './components/Mainarea'
import {
  IoMdAddCircleOutline, 
  IoMdNotificationsOutline,
  IoMdGitMerge,
  IoMdArrowRoundDown
} from 'react-icons/io';

import styled from 'styled-components'
import { applyTheme } from './utils/themes'

const AppDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg);
  color: var(--text-color);
`;

function App() {

  const [currentTheme, setTheme] = useState("dark");
  
  const changeTheme = (e) => {
    console.log(e)
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme)
  };

  // Apply the theme at initialization
  applyTheme(currentTheme)

  let props = {
    'changeTheme': changeTheme,
    'currentTheme': currentTheme,
    'navitems':[
      {
        icon: <IoMdNotificationsOutline/>,
        href:'#'
      },
      {
        icon: <IoMdAddCircleOutline/>,
        href:'#'
      },
      {
        icon: <IoMdGitMerge/>,
        href:'#'
      },
      {
        icon: <IoMdArrowRoundDown/>,
        href:'#',
        children: <DropdownMenu/>
      },
    ]
  }
  
  return (
    <AppDiv {...props}>
      <Navbar>
        {props.navitems.map((navitem, i) =>(
          <NavItem key={i} href={navitem.href} icon={navitem.icon}>
            {navitem.children}
          </NavItem>
        ))}
      </Navbar>
      <Mainarea {...props}/>
    </AppDiv>
  );
}

export default App;
