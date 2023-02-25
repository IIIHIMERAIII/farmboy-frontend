import styled from "@emotion/styled";

export const ProductList = styled.ul`   
gap:10px;
display:flex;
flex-direction:column;
padding: 0;
align-items: center;
@media screen and (min-width: 768px) {
gap: 15px;
justify-content: center;
flex-wrap: wrap;
flex-direction: row;
margin-top: 35px;
}
`;