// import styled from "@emotion/styled";
import styled from 'styled-components';


export const InfoText = styled.a`
color:black;
`;

export const Form = styled.form`
width: 350px;
background-color:white;
border-radius: 16px;
height: 600px;
padding: 15px;
display: flex;
flex-direction: column;
gap: 15px;
margin-top: 80px;
`;

export const Label = styled.label`
color: black;
display: flex;
flex-direction: column;
text-align: center;
gap: 10px;
`;

export const InputSvg = styled.svg`
width: 20px;
height: 20px;
position: relative;
bottom: 40px;
left: 12px;
fill:gray;
`;

export const Input = styled.input`
color: gray;
padding-left: 40px;
height: 35px;
border-radius: 12px;
border: 2px solid gray;
outline:none;
font-size: 18px;
transition: all 0.3s ease-in-out;
:hover + ${InputSvg}, :focus + ${InputSvg}{
    fill:green;
}
:hover, :focus {
    border: 2px solid green;
}
`;

export const ApplySvg = styled.svg`
width: 45px;
height: 45px;
fill:inherit;
`;

export const FormBtn = styled.button`
margin-right: auto;
margin-left: auto;
padding: 12px;
align-items: center;
justify-content: center;
display: flex;
width: 80px;
height: 80px;
border-radius:50%;
border: none;
background-color:gray;
cursor:pointer;
fill:white;
transition: all 0.3s ease-in-out;
:hover, :focus{
    background-color:green;
    transform: scale(1.1);
}
`;