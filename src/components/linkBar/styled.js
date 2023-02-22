import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CatalogBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
`;

export const Button = styled(Link)`
width: 120px;
height: 60px;
background-color: black;
color:white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
box-shadow: 3px 0px 43px -10px rgba(0,0,0,0.75);
font-size: 20px;
font-weight: 500;
outline: none;
transition: all 0.3s ease-in-out;
:hover , :focus {
    transform: scale(1.2);
    background-color: transparent;
    color: black;
}
`;