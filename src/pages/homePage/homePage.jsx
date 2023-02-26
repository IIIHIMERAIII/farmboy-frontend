import {Products} from '../../components/products/products'
import { Main } from "./styled";
import { Container } from '../../components/containers';
import { LayoutHeader } from '../../components/layoutHeader';

export const HomePage = () => {
    return (
        <Container>
            <Main>
            <Products/>
        </Main>
    </Container>       
);
};