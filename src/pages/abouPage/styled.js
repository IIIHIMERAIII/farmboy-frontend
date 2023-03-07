import styled from "@emotion/styled";


export const Main = styled.main`
padding-top:25px;
padding-bottom: 25px;
padding-left:15px;
padding-right:15px;
`;

export const Img = styled.div`
justify-content: center;
align-items: center;
display: flex;
height: 450px;
background-size: cover;
border-radius: 16px;
margin-bottom: 20px;
box-shadow: 10px 0px 69px 39px rgba(0,0,0,0.75);
`;

export const PageTitle = styled.h1`
text-align: center;
font-size: 55px;
color:white;
font-family: 'Lobster', cursive;
`;

export const ContactBox = styled.div`
display: flex;
flex-direction: column;
@media screen and (min-width: 768px) {
justify-content: space-between;
align-items: center;
flex-direction:row;
}
`;

export const PageSubtitle = styled.p`
color:white;
font-size: 18px;
font-family: 'Sofia Sans Semi Condensed', sans-serif;
`;

export const Note = styled.div`
background-size: contain;
background-repeat: no-repeat;
height: 350px;
width: 320px;
margin-top: 65px;
`;

export const NoteText = styled.p`
padding-top: 50px;
justify-content: center;
display:flex;
rotate: 3deg;
color:#010c62;
font-family: 'Marck Script', cursive;
font-size: 18px;
letter-spacing: 1.2px;
`;

export const GoogleIframe = styled.iframe`
height: 350px;
@media screen and (min-width: 768px) {
border: none;
allowFullScreen="";
title="adress";
box-shadow: 10px 0px 69px 39px rgba(0,0,0,0.75);
}
@media screen and (min-width: 1198px){
width: 50%;
}
`;