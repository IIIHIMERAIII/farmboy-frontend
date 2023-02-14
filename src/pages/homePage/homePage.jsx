import { ProductsBar } from "../../components/productsBar/productsBar";
import {Products} from '../../components/products/products'
import { Main } from "./styled";
import { Container } from '../../components/containers';


export const HomePage = () => {
    return (
    <Container>
        <Main>
            <ProductsBar />
            <Products/>
        </Main>
    </Container>       
);
};