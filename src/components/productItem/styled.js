import styled from "@emotion/styled";

export const ProductCard = styled.li`
display: flex;
box-shadow: 1px 1px 82px -21px rgba(0,0,0,0.75);
border-radius: 5px;
align-items: center;
justify-content: start;
flex-direction: column;
background-color: white;
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

export const ProductTitle = styled.p`
font-size: 25px;
border-bottom: 2px solid black;
border-top: 2px solid black;
margin-bottom: 10px;
`;

export const InfoBox = styled.div`
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
display: flex;
align-items: center;
margin-top: auto;
border-top: 2px solid black;
padding-top: 10px;
`;

export const ProductPrice = styled.span`
color: green;
text-align: center;
font-size: 35px;
margin-right:20px;
@media screen and (min-width: 768px){
margin-right: 20px;
}
@media screen and (min-width: 1198px){
margin-right: 200px;
}
`;

export const AddBtn = styled.button`
width: 80px;
background-color: black;
color:white;
cursor: pointer;
border-radius: 6px;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
padding: 5px;
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