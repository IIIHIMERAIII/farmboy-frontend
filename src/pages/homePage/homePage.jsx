import {Products} from '../../components/products/products'
import { Main } from "./styled";
import { Container } from '../../components/containers';


export const HomePage = () => {
    return (
    <Container>
        <Main>
            <Products/>
        </Main>
    </Container>       
);
};