import styled from "@emotion/styled";

export const Container = styled.div`
margin-left: auto;
margin-right: auto;
max-width: 420px;
border-radius: 16px;
background-size: cover;
background-position: bottom;
@media screen and (min-width: 768px) {
max-width: 780px
}
@media screen and (min-width: 1198px) {
max-width: 1200px
}
`;