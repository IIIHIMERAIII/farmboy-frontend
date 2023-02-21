
import { useSelector} from "react-redux";
import {
    CartBox,
    ScrollBox,
    TitleSum,
    List,
    EmptyBox,
    EmptyTitle,
    Svg,
} from "./styled";
import { CartItem } from "../cartItem/cartItem";
import sprite from '../../images/sprite.svg'



export const CartList = () => {
    const cart = useSelector(state => state.cart.products);
    const prices = cart.map((product) => product.price * product.qty)
    const total = prices.reduce((acc, curr) => acc + curr, 0);

    return (
        <CartBox>
            {total === 0
                ? <TitleSum>Тут ми порахуемо суму замолвення, але нажаль...</TitleSum>

                : <TitleSum>Сумма вашого замовлення: {total.toFixed(2)}</TitleSum>
            }
            <ScrollBox
            className="cart"
            >
        <List>
            {  cart.length
                ? cart.map((data) => (
                    <CartItem
                            key={data.id}
                            product={data}
                    />
                ))
                    :   <EmptyBox>
                        <Svg>
                            <use href={`${sprite}#empty-cart`}/>    
                        </Svg>
                        <EmptyTitle>Ви ще нічого не додали</EmptyTitle>
                        </EmptyBox>
            }
        </List>
        </ScrollBox>
    </CartBox>
    );
};
