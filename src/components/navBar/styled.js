import styled from "@emotion/styled";

export const NavBox = styled.div`
height: 100px;
display:flex;
align-items: center;
justify-content: space-between;
width: 100%;
`;

export const Bag = styled.button`
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

