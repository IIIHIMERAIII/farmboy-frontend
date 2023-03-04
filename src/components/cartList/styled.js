import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import SimpleBar from 'simplebar-react';

export const CartBox = styled.div`
border-bottom: 2px solid white;
margin-bottom: 10px;
padding-bottom:10px;
@media screen and (min-width: 768px){
padding: 10px;
width: 650px;
height: 650px;
margin-right:10px;
}
`;

export const BackBtn = styled(Link)`
fill:white;
margin-right: auto;
:hover, :focus {
    fill:green;
}
`;

export const BackSvg = styled.svg`
width: 30px;
height:30px;
fill:inherit;
`;


export const TitleSum = styled.p`
font-size: 18px;
border-bottom: 2px solid white;
color:white;
padding-bottom: 15px;
margin-bottom:10px;
@media screen and (min-width: 768px){
font-size: 20px;
font-weight: 800;
}
`;

export const SumNumber = styled.span`
color:green;
background:white;
padding:10px;
border-radius: 16px;
`;

export const ScrollBar = styled(SimpleBar)`
width:320px;
@media screen and (min-width: 768px){
height:500px;
display:flex;
width:auto;
}
@media screen and (min-width: 1198px){
height: 650px;
}
`;


export const List = styled.ul`
padding: 0;
margin:0;
display: flex;
flex-direction: column;
gap:10px;
@media screen and (min-width: 768px){
gap: 12px;
margin-top: 25px;
padding-right: 30px;
}
`;

export const EmptyTitle = styled.p`
color:white;
font-size: 25px;
text-align: center;
font-weight: 800;
`;

export const Svg = styled.svg`
position: relative;
left: 90px;
width: 200px;
height: 200px;
fill:white;
@media screen and (min-width: 768px) {
  top: 20px;
  left: 220px;
}
`;