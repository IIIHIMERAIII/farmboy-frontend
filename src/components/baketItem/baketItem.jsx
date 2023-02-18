import { useDispatch } from "react-redux";
import {
    dellProduct,
    decreaseProductQuantity,
    increaseCartQuantity
} from "../../redux/baketSlice";
import {
    BaketProduct,
    ProductTitle,
    FunctionBox,
    DellBtn,
    DellSvg,
    QuantityBtn,
    QuantityTitle,
    QuantitySvg,
    SumTitle,
} from "./styled";
import sprite from '../../images/sprite.svg'

export const BaketItem = ({ product }) => {
    const dispatch = useDispatch();
    
    return (
    <>
        <BaketProduct>
            <ProductTitle>{product.title}</ProductTitle>
                <span>{product.price}</span>
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
                <SumTitle
                >{(product.price * product.qty).toFixed(2)}</SumTitle>
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
        </BaketProduct>    
    </>
    );
};

