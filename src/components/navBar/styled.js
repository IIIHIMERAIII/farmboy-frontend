import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavBox = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width: 100%;
`;

export const Title = styled.p`
display: none;
@media screen and (min-width: 768px) {
display: flex;
color: white;
font-size: 25px;
}
`;

export const CartBtn = styled(Link)`
display:flex;
background-color: transparent;
border: 2px solid white;
border-radius: 50%;
padding: 10px;
display: flex;
align-items: center;
cursor:pointer;
fill:white;
outline: none;
transition: all 0.3s ease-in-out;
:hover, focus {
    border-color:green;
    fill: green;
    transform: scale(1.1);
}
`;

export const Svg = styled.svg`
width: 60px;
height: 60px;
fill: iherit;
`;

