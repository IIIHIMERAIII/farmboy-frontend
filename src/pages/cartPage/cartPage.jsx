import { Main} from "./styled";
import { Container } from '../../components/containers';
import { CartList } from "../../components/cartList/cartList";
import { CartForm } from "../../components/cartForm/cartForm";
import cartBg from '../../images/cartBg.jpg'

export const CartPage = () => {
    return (
    <Container>
            <Main
                style={{ backgroundImage: `url(${cartBg})` }}
            >
            <CartList />
            <CartForm />
            </Main>
    </Container>       
);
};