import React, { useState } from 'react';
import styled from 'styled-components'
import {
  IoMdConstruct,
  IoIosArrowForward,
  IoIosArrowBack
} from 'react-icons/io';

import { CSSTransition } from 'react-transition-group'



export function DropdownMenu(){

  const [activeMenu, setActiveMenu ] = useState('main')
  const [menuHeight, setMenuHeight ] = useState(null)

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height)
  }

  function DropdownItem(props){
    return (
      <DropdownMenuItem {...props} onClick={ () => props.goToMenu && setActiveMenu(props.goToMenu) }>
        <LeftIcon>{props.leftIcon}</LeftIcon>
        {props.children}
        {props.rightIcon && <RightIcon>{props.rightIcon}</RightIcon>}
      </DropdownMenuItem>
    )
  }
  return (
    <Dropdown style={{height: menuHeight}}>
      {/* Main menu */}
      <CSSTransition 
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
        >
          <div className='menu'>
            <DropdownItem leftIcon={<IoMdConstruct/>} rightIcon={<IoIosArrowForward/>} goToMenu={'animals'}>
              Profile
            </DropdownItem>
            <DropdownItem goToMenu={'settings'} rightIcon={<IoIosArrowForward/>}>Settings</DropdownItem>
            <DropdownItem>Something</DropdownItem>
            <DropdownItem>Something</DropdownItem>
            <DropdownItem>Something</DropdownItem>
            <DropdownItem>Something</DropdownItem>
            <DropdownItem>Something</DropdownItem>
            <DropdownItem>Something</DropdownItem>
          </div>
      </CSSTransition>
      {/* Animals menu */}
      <CSSTransition 
        in={ activeMenu === 'animals'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
        >
          <div className='menu'>
            <DropdownItem 
                top
                goToMenu={'main'}
                leftIcon={<IoIosArrowBack/>}
            >
                <h2>Animals</h2>
            </DropdownItem>
            <DropdownItem>Cat</DropdownItem>
            <DropdownItem>Dog</DropdownItem>
            <DropdownItem>Honey Badger</DropdownItem>
          </div>
      </CSSTransition>
      {/* Settings menu */}
      <CSSTransition 
        in={ activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
        >
          <div className='menu'>
            <DropdownItem top goToMenu={'main'} leftIcon={<IoIosArrowBack/>}>
                <h2>Settings</h2>
            </DropdownItem>
            <DropdownItem>Color</DropdownItem>
            <DropdownItem>Language</DropdownItem>
            <DropdownItem>Font Size</DropdownItem>
          </div>
      </CSSTransition>
    </Dropdown>
  )
}


export function NavItem(props) {

  const [open, setOOpen ] = useState(false)

  return (
    <NavListItem>
      <IconButton 
        href={props.href} 
        onClick={ () => setOOpen(!open)}>
        {props.icon}
      </IconButton>
      { open && props.children }
    </NavListItem>
  )
}

function Navbar(props) {
    return (
      <Nav>
        <NavGroup>
          {props.children}
        </NavGroup>
      </Nav>

    );
}
  
const Nav = styled.nav`
    height: var(--nav-size);
    background-color: var(--bg-darker);
    padding: 0 1rem;
    border-bottom: var(--border);
`;

const NavGroup = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

const NavListItem = styled.li`
    width: calc(var(--nav-size) * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconButton = styled.a`
    --button-size: calc( var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: var(--bg-accent);
    border-radius: 50%;
    padding:5px;
    margin:2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;

    &:hover{
        filter: brightness(1.2);
    }

    & svg{
        /* fill: var(--bg-lighter);  */
        width: 20px;
        height: 20px;
    }
`;

const Dropdown = styled.div`
    position: absolute;
    top: 58px;
    width: 300px;
    transform: translate(-45%);
    background-color: var(--bg-darker);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: 1rem;
    /* Hide any child elements if the overlap this container */
    overflow: hidden;
    transition: height var(--speed) ease;
`;

const DropdownMenuItem = styled.a`
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: ${props => props.top ? "var(--border)" : "None"};
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
    &:hover{
        background: var(--bg);
        // background-color: ${props => props.top ? "var(--bg)" : "var(--bg)"};
    }
`;

const LeftIcon = styled(IconButton)`
    margin-right: 10px;
    &:hover{
        filter: None;
    }
`;

const RightIcon = styled(IconButton)`
    margin-left: auto;
    background-color: var(--bg-accent);
    &:hover{
        filter: None;
    }
`;

export default Navbar;