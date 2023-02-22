import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const CartBox = styled.div`

margin-bottom: 20px;
@media screen and (min-width: 768px){
padding: 10px;
width: 650px;
}
`;

export const BackBtn = styled(Link)`
fill:white;
:hover, :focus {
    fill:green;
}
`;

export const BackSvg = styled.svg`
width: 40px;
height:40px;
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


export const List = styled.ul`
padding: 0;
margin:0;
display: flex;
flex-direction: column;
gap:10px;
@media screen and (min-width: 768px){
width: 320px;
height: 500px;
overflow-y: scroll;


gap: 12px;
margin-top: 25px;
padding-right: 26px;
}
`;


export const EmptyBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 60px;
gap: 35px;
`;

export const EmptyTitle = styled.p`
color:white;
font-size: 25px;
text-align: center;
font-weight: 800;
`;

export const Svg = styled.svg`
width: 200px;
height: 200px;
fill:white;
`;