import styled from "@emotion/styled";

export const ProductCard = styled.li`
display: flex;
box-shadow: 1px 1px 82px -21px rgba(0,0,0,0.75);
border-radius: 5px;
align-items: center;
justify-content: start;
flex-direction: column;
background-color: tan;
padding: 10px;
width: 300px;
@media screen and (min-width: 768px) {
width: 345px;
height: 360px;
padding: 10px;
}
@media screen and (min-width: 1198px) {
width: 420px;
height: 360px;
padding: 15px;
}
`;

export const TitleBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 290px;
@media screen and (min-width: 768px) {
width: 324px;
}
@media screen and (min-width: 1198px) {
width: 400px;
}
`;

export const ProductTitle = styled.p`
padding: 5px;
border-bottom: 2px solid black;
border-top: 2px solid black;
font-size: 25px;
font-weight: 700;
`;

export const InfoSvg = styled.svg`
width: 25px;
height: 25px;
fill: white;
`;

export const InfoBox = styled.div`
margin-top:10px;
display:flex;
@media screen and (min-width: 768px) {
width:200px
display: flex;
flex-direction: column;
align-items: center;
}
@media screen and (min-width: 1198px){
width:400px;
gap:10px;
flex-direction: row;
}
`;

export const ProductDescr = styled.p`
display:none;
@media screen and (min-width: 768px){
display:flex;
color:black;
font-size:12px;
}
@media screen and (min-width: 1198px) {
width: 300px;
font-size:15px
}
`;

export const PriceBox = styled.div`
margin-top: auto;
border-top: 2px solid black;
padding-top: 10px;
display: flex;
align-items: center;
width:290px;
justify-content: space-between;
@media screen and (min-width: 768px) {
width:324px;
}
@media screen and (min-width: 1198px) {
width: 400px;
}
`;

export const ProductPrice = styled.span`
color: green;
text-align: center;
font-size: 35px;
@media screen and (min-width: 768px){
margin-right: 20px;
}
@media screen and (min-width: 1198px){
margin-right: 200px;
}
`;

export const ProductBtn = styled.button`
width: 80px;
height: 45px;
background-color: black;
color:white;
cursor: pointer;
border-radius: 6px;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
padding: 5px;
font-family: inherit;
font-weight: 700;
font-size: 15px;
:hover, :focus {
    background-color: green;
    transform: scale(1.1);
}
`;

export const ImgFake = styled.div`
height: 120px;
width:200px;
background-color: gray;
margin-bottom: 20px;
@media screen and (min-width: 1198px) {
margin-bottom: auto;
}
`;