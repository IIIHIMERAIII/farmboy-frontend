import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterBox = styled.footer`
display: flex;
align-items: center;
justify-content: center;
height: 160px;
border-top: 1px solid white;
border-bottom-left-radius: 16px;
border-bottom-right-radius: 16px;
margin-bottom: 40px;
background: rgba(0, 0, 0, 0.55);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(3px);
`;


export const NavBox = styled.div`
display: flex;
flex-direction:column;
text-align: center;
gap: 20px;
@media screen and (min-width: 768px){
flex-direction:row;
}
`;

export const NavLink = styled(Link)`
color:white;
font-size:18px;
cursor: pointer;
transition: all 0.3s ease-in-out;
:hover, focus {
    color:green;
    transform: scale(1.1);
}
`;

export const ContactWrapper = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
border-bottom: 1px solid white;
padding-top:20px;
padding-bottom:40px;
`;


export const SocialBox = styled.div`
display:flex;
align-items: center;
gap: 50px;
`;

export const SocialLink = styled(Link)`
border: 1px solid white;
border-radius: 50%;
padding: 10px;
display: flex;
fill:white;
cursor: pointer;
transition: all 0.3s ease-in-out;
:hover, focus {
    fill:green;
    border: 1px solid green;
    transform: scale(1.1);
}
`;

export const Svg = styled.svg`
width:25px;
height:25px;
fill:inherit;
pointer-events: none;
`;
