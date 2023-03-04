import {Products} from '../../components/products/products'
import { Main } from "./styled";

export const HomePage = () => {
    
    window.scrollTo(0, 0);
    
    return (
        <Main>
            <Products/>
        </Main>
);
};