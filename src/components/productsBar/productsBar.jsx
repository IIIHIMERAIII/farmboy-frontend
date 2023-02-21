import { CatalogBox, Button  } from "./styled";


export const ProductsBar = () => {
    return (
        <CatalogBox>
            <Button
            to='/'
            >Головна</Button>
            <Button
            to='cart'
            >Замовлення</Button>
            <Button>Про нас</Button>
        </CatalogBox>
    );
};