import React from "react";
import styled from 'styled-components';
import XBar from '../images/icon-close-menu.svg';
import { MenuItems } from "./data";
import DropDown from "./DropDown.js";


const Modals = styled.div `
        height: 100vh;
        position: absolute;
        top:0%;
        right: 0%;
        width: 55%;
        color: black;
        z-index:4;
        background-color:white;
        padding: 1rem 1.2rem;
    `;
    const Menu = styled.ul`
        margin-top: 1rem;
        display: grid;
        gap: 1rem;
    `;

const Modal = ({setIsClick}) => {

    return (
        <Modals>
            <div style={{textAlign: 'right'}}><img src={XBar} alt='closeMenu' onClick={() => setIsClick(false)} /></div>
            <Menu>
                {MenuItems.map((x)=>{
                    return (
                        <DropDown {...x} setIsClick = {setIsClick}/>
                    )
                })}
            </Menu>
        </Modals>
    )
}

export default Modal;