import styled from "@emotion/styled";

export const CartBox = styled.div`
padding: 10px;
width: 650px;
`;

export const ScrollBox = styled.div`
width: 650px;
height: 800px;
overflow-y: scroll;
margin-top: 10px;
`;

export const TitleSum = styled.p`
border-bottom: 2px solid white;
color:white;
padding-bottom: 15px;
font-size: 20px;
font-weight: 800;
`;


export const List = styled.ul`
padding: 0;
margin:0;
display: flex;
flex-direction: column;
gap: 12px;
margin-top: 25px;
padding-right: 12px;
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