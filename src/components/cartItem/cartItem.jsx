import { useDispatch} from "react-redux";
import {
    dellProduct,
    decreaseProductQuantity,
    increaseCartQuantity
} from "../../redux/cartSlice";
import {
    CartProduct,
    ProductTitle,
    Price,
    FunctionBox,
    DellBtn,
    DellSvg,
    QuantityBtn,
    QuantityTitle,
    QuantitySvg,
} from "./styled";
import sprite from '../../images/sprite.svg'

export const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const ProductSum = (product.price * product.qty).toFixed(2);
    console.log(product)

    return (
    <>
        <CartProduct>
            <ProductTitle>{product.title}</ProductTitle>
                <Price>{product.price}</Price>
            <FunctionBox>
                <QuantityBtn
                    onClick={() => {
                        dispatch(decreaseProductQuantity(product.id))
                }}
                >
                    <QuantitySvg>
                        <use href={`${sprite}#circle-left`}/>
                    </QuantitySvg>
                </QuantityBtn>
                <QuantityTitle>{product.qty}</QuantityTitle>
                <QuantityBtn
                    onClick={() => {
                        dispatch(increaseCartQuantity(product.id))
                }}
                >
                    <QuantitySvg>
                        <use href={`${sprite}#circle-right`}/>
                    </QuantitySvg>
                </QuantityBtn>
                <DellBtn
                    onClick={() => {
                                dispatch(dellProduct(product.id));
                            }}
                >
                    <DellSvg>
                        <use href={`${sprite}#delete`}/>
                    </DellSvg>
                </DellBtn> 
            </FunctionBox>
        </CartProduct>    
    </>
    );
};

