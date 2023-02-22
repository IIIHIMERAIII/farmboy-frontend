import styled from "@emotion/styled";

export const ProductList = styled.ul`   
gap:10px;
display:flex;
flex-direction:column;
padding: 0;
align-items: center;
@media screen and (min-width: 768px) {
gap: 15px;
flex-wrap: wrap;
margin-top: 35px;
}
`;