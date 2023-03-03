import styled from "styled-components"


export const ModalWrapper = styled.div`
position: fixed;
top: 0;
background-color: rgba(0,0,0,0.80);
width: 100vw;
height: 100vh;
align-items: center;
justify-content: center;
display: flex;
`;

export const ModalContent = styled.div`
padding:10px;
position: absolute;
background-color: tan;
border-radius: 15px;
@media screen and (min-width: 768px){
width: 700px;
height: 520px;
padding:20px;
}
@media screen and (min-width: 1198px){
width: 760px;
height: 620px;  
}
`;

export const TitleBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const CloseSvg = styled.svg`
width:25px;
height:25px;
fill:white;
`;

export const InfoBox = styled.div`
display: flex;
flex-direction: column;
margin-top:10px;
@media screen and (min-width: 768px){
flex-direction:row;
margin-top:20px;
}
`;

export const ImgFake = styled.div`
min-height:150px;
background-color:gray;
@media screen and (min-width: 768px){
width:280px;
height:280px;
margin-right:20px;
}
@media screen and (min-width: 1198px){
width:370px;
height:370px;
}
`;

export const ProductDescr = styled.p`
width: 300px;
font-size:15px
`;

export const PriceBox = styled.div`
border-top: 2px solid black;
padding-top:10px;
justify-content: space-between;
display: flex;
align-items: center;
margin-top: 120px;
`;