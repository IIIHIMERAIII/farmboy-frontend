import styled from "@emotion/styled";


export const CartProduct = styled.li`
gap:10px;
padding: 7px 5px 7px 5px;
justify-content: space-between;
align-items: center;
display: flex;
box-shadow: 0px 10px 27px 0px rgba(0,0,0,0.75);
background-color: white;
border-radius: 12px;
@media screen and (min-width: 768px){
padding: 15px 10px 15px 10px;
}
`;

export const ProductTitle = styled.span`
width:110px;
@media screen and (min-width: 768px){
font-size: 16px;
width: 250px;
color:black;
font-weight: 700;
}
`;

export const Price = styled.span`
margin-left: auto;
color: green;
font-weight: 700;
`;

export const FunctionBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (min-width: 768px){
width: 200px;
}
`;

export const DellBtn = styled.button`
padding: 10px;
fill:black;
background-color:transparent;
border-radius:50%;
cursor:pointer;
border-radius:50%;
cursor:pointer;
border:none;
:hover, focus {
    fill:red;
    transform: scale(1.2);
}
`;

export const DellSvg = styled.svg`
width: 25px;
height: 25px;
fill:inherit;
`;

export const QuantityBtn = styled.button`
padding: 10px;
fill:black;
background-color:transparent;
border-radius:50%;
cursor:pointer;
border-radius:50%;
border:none;
cursor:pointer;
:hover, focus {
    fill:green;
    transform: scale(1.2);
}
`;

export const QuantitySvg = styled.svg`
width: 25px;
height: 25px;
fill:inherit;
color:black;
`;

export const QuantityTitle = styled.span`
font-size: 18px;
font-weight: 600;
color:black;
`;

