import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Mobile from '../images/image-hero-mobile.png';
import Desktop from '../images/image-hero-desktop.png';
import audiophile from '../images/client-audiophile.svg';
import databiz from '../images/client-databiz.svg';
import maker from '../images/client-maker.svg';
import meet from '../images/client-meet.svg';
import { devices, colors } from "./breakpoint";

const Main = styled.div`
    text-align: center;
    display: grid;
    // align-items: center;
    background-color: ${colors.White};
    height: 95vh;
    @media${devices.average}{
        grid-template-columns : 1fr 1fr;
        height: 90vh;
        width: 80%;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin:  auto;
        align-items: normal;
        gap: 1.5rem;
    }
    @media (max-height: 500px){
        margin-top: 1rem;
    }
    @media${devices.laptop}{
        height: 80vh;
    }
    @media (min-height: 900px){
        height: 65vh;
        top:45%;
    }
`;  
const Image = styled.img`
    width: ${prop => prop.width || '100%'};
    margin-top: 0.5rem;
    @media${devices.average}{
        height: inherit;
        margin: 0rem;
        grid-column-start : 2;
    }
`;
const Sect = styled.section`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    @media${devices.average}{
        // align-items: space-between;
        text-align: left;
        grid-column-start: 0;
        grid-row-start: 1;
        margin: 0;
    }
`;
const Text = styled.p`
    font-size: 18px;
    margin: 0.4rem 0;
    @media${devices.average}{
        flex: 0.5;
        display:flex;
        align-items: center;
    }
`;
const Header = styled.h1`
    font-size: 2.7rem;
    color: ${colors.Black};
    font-weight: 700;
    @media${devices.average}{
        font-size: 3.5rem;
        line-height: 3.1rem;
        flex: 0.5;
        display:flex;
        align-items: end;
    }
    @media${devices.laptop}{
        font-size: 5rem;
        line-height: 4.6rem;
    }
    @media (max-height: 400px){
        font-size: 2.3rem;
        line-height: 2.1rem;
    }
    
    // @media (max-height: 720px){
    //     font-size: 3rem;
    //     line-height:3rem;
    // }
`;
const Button = styled.button`
    width: max-content;
    padding: 1rem 2rem;
    border-radius: 1rem;
    margin: 1rem auto;
    background-color: black;
    color:white;
    border-color: ${colors.Gray};
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    &:Hover{
        background-color: white;
        color:black;
    }
    @media${devices.average}{
        margin: 1rem 0;
    }
    @media${devices.laptop}{
        margin: 4rem 0;
        padding: 1.5rem 2.5rem;
    }
    @media (max-height: 720px && min-width: 600px){
        margin: 1rem 0;
    }
`;
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

const Hero = ({closeAll}) => {
    
    const [size, setSize] = useState();
    let s = window.innerWidth;
    useEffect(() => {
        let s = window.innerWidth;
        console.log(window.innerWidth)
        if (s > 600){
            setSize(true)
        } else setSize(false);
        console.log(size)
    },[s, size])

    return(
        <Main onMouseOver={closeAll}>
            <Image src={ size ? Desktop : Mobile  } alt='hero'/>

            <Sect>
                <Header>Make remote work</Header>
                <Text>Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.</Text>
                <Button>Learn more</Button>
                <Footer>
                    <Image width='20%' src={databiz} alt='databiz'/>
                    <Image width='20%' src={audiophile} alt='audiophile'/>
                    <Image width='20%' src={meet} alt='meet' />
                    <Image width='20%' src={maker} alt='maker'/>
                </Footer>
            </Sect>
            
        </Main>
    )
}

export default Hero;