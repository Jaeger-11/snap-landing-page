import React, {useState} from "react";
import ArrowUp from '../images/icon-arrow-up.svg';
import ArrowDown from '../images/icon-arrow-down.svg'; 
import styled from 'styled-components';

const List = styled.div`
`
const Sub = styled.p`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
`;
const Drop = styled.div`
    margin-left: 1rem;
    margin-top: 1rem;
    cursor: pointer;
`;
const Image = styled.img`
    // width: 1rem;
    // height: 1rem;
`;


const DropDown = ({menu, submenu, setIsClick}) => {
    const [subOpen, setSubOpen] = useState(false);
    return(
        <List onClick={() => setSubOpen(!subOpen)}>
            <Sub>{menu}{submenu &&  <>  
                {subOpen ? <img src={ArrowUp} alt='arrow'/> : <img src={ArrowDown} alt="arrow"/>} </> }
            </Sub>
            
            {(subOpen && submenu) && submenu.map((items) => {
                const {item, icon} = items;
                return (
                    <Drop onClick={() => setIsClick(false)}>
                        {icon && <Image src={icon} alt='icon'/>  } {item}
                    </Drop>
                )
            })} 
        </List>
    )
}

export default DropDown;