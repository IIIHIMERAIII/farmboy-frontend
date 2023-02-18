import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterBox = styled.div`
display: flex;
align-items: center;
justify-content: center
height: 220px;
background-size: cover;
border-top: 2px solid black;
border-bottom-left-radius: 16px;
border-bottom-right-radius: 16px;
padding: 15px 15px 60px 15px;
margin-bottom: 40px;
`;

export const ContactBox = styled.div`
display: flex;
flex-direction: column;
text-align: center;
gap: 20px;
padding: 20px;
`;

export const NavBox = styled.div`
display: flex;
flex-direction: column;
text-align: center;
gap: 20px;
padding: 20px;
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
width: 100%;
border-bottom: 1px solid white;
`;

export const ContactTitle = styled.p`
color:white;
font-size: 30px;
`;

export const ContactText = styled.p`
color:white;
font-size: 16px;
`;

export const SocialBox = styled.div`
display:flex;
flex-direction: column;
align-items: center;
gap: 50px;
padding: 20px;
border-radius: 6px;
`;

export const SocialLink = styled.a`
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
`;
