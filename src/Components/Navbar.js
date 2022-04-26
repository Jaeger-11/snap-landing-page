import React, { useState } from "react";
import styled from 'styled-components';
import Modal from "./Modal";
import logo from '../images/logo.svg';
import iconBar from '../images/icon-menu.svg';
import { devices, colors } from "./breakpoint";
import ArrowUp from '../images/icon-arrow-up.svg';
import ArrowDown from '../images/icon-arrow-down.svg';
import todo from '../images/icon-todo.svg'; 
import calendar from '../images/icon-calendar.svg';
import planning from '../images/icon-planning.svg';
import reminders from '../images/icon-reminders.svg';

const Nav = styled.nav`
        display:flex;
        justify-content: space-between;
        padding: 10px;
        margin: 0 1rem 1rem 1rem;
        position:relative;
        @media ${devices.average}{
            padding: 5px;
            margin: 0.5rem;
        }
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: end;
    @media ${devices.tablet}{
        display: none;
    }
`;
const Elements = styled.ul`
    display: none;
    @media ${devices.average}{
        gap: 1rem;
    }
    @media ${devices.tablet}{   
        display : flex;
        gap: 1.5rem;
        flex: 1; 
        align-items: center;
    }
`;
const Item = styled.li`
    list-style: none;
    display: inline-block;
    cursor: pointer;
    position:relative;
    &.flex{
        flex: 0.3;
        align-items:end;
        display: flex;
    }
`; 
const End = styled.p`
    display: none;
    @media ${devices.average}{
        gap:1rem;
    }
    @media${devices.tablet}{
        display: flex;
        gap: 2.5rem;
        justify-content: end;
        align-items: center;
        cursor: pointer;
    }
`
const Button = styled.button`
    border: black 0.1rem solid;
    border-radius: 0.8rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    cursor:pointer;
`
const Subbox = styled.div`
    position: absolute;
    margin-top: 1rem;
    width: max-content;
    padding: 1rem;
    border-radius: 0.7rem;
    background-color:white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: grid;
    gap:0.5rem;
    z-index:4;
    &.right{
        right: 0%;
    }
`;
const Sub = styled.p`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;

const Navbar = ({drop1, drop2, setDrop1, setDrop2, closeAll}) => {
    // For Hamburger Modal
    const [isClick, setIsClick] = useState(false);
    // For Desktop Navbar DropMenu
    const open1 = () => {
        if(drop2){
            setDrop2(false)
        }
        setDrop1(!drop1)
    }

    const open2 = () => {
        if(drop1){
            setDrop1(false)
        }
        setDrop2(!drop2)
    }

    return(<>
        <Nav >
            <Item className="flex" ><img src={logo} alt="logo" /></Item>

            <Icon onClick={() => setIsClick(true)} >
                <img src={iconBar} alt='openbar'/>
            </Icon>
            <Elements>
                <Item onClick={open1}>Features {drop1 ? <img src={ArrowUp} alt='arrow'/> : <img src={ArrowDown} alt='arrow' />}
                    {drop1 && <Subbox className="right">
                        <Sub> <img src={todo} alt='todo'/> Todo List</Sub>
                        <Sub> <img src={calendar} alt='icon'/>  Calendar</Sub>
                        <Sub> <img src={reminders} alt='icon'/>  Reminders</Sub>
                        <Sub> <img src={planning} alt='icon'/>  Planning</Sub>
                    </Subbox>}
                </Item>
                <Item onClick={open2}>Company {drop2 ? <img src={ArrowUp} alt='arrow'/> : <img src={ArrowDown} alt='arrow'/>}
                    {drop2 && <Subbox>
                        <Sub>History</Sub>
                        <Sub>Our Team</Sub>
                        <Sub>Blog</Sub>
                    </Subbox>}
                </Item>
                <Item onClick={closeAll}>Careers</Item>
                <Item onClick={closeAll}>About</Item>
            </Elements>
            <End>
                <p>Login</p>
                <Button>Register</Button>
            </End>
        </Nav>
        {isClick && <Modal setIsClick={setIsClick}/>}
    </>
    )
}

export default Navbar;