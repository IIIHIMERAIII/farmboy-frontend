import { ProductsBar } from "../../components/productsBar/productsBar";
import {Products} from '../../components/products/products'
import { Main } from "./styled";


export const HomePage = () => {
    return (
    <Main>
            <ProductsBar />
            <Products/>
    </Main>
);
};