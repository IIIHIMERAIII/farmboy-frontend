import { Main} from "./styled";
import { CartList } from "../../components/cartList/cartList";
import { CartForm } from "../../components/cartForm/cartForm";

export const CartPage = () => {
    
    window.scrollTo(0, 0);

    return (
    <Main>
        <CartList/>
        <CartForm />
    </Main>
);
};