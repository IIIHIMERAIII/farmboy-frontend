import styled from "@emotion/styled";

export const CategoryBox = styled.div`
display:none;
@media screen and (min-width: 768px) {
margin-top: 12px;
justify-content: space-around;
display:flex;
}
`;

export const Img = styled.img`
border-radius:50%;
width: 260px;
height:260px;
}
`;

export const TitleBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.h1`
color: white;
`;

export const SubTitle = styled.p`
color: white;
width: 300px;
`;