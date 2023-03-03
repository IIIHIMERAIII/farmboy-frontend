import {addProduct} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { ProductBtn, ProductTitle, ProductPrice } from "../productItem/styled"
import { ModalWrapper, ModalContent,  CloseSvg, TitleBox, PriceBox, InfoBox, ImgFake, ProductDescr } from "./styled"
import sprite from '../../images/sprite.svg'


export const PoductModal = ({ close, product, data }) => {
        const dispatch = useDispatch();
    
    const onAddProduct = (id) => {
        const results = data.find(item => item._id === id)
            dispatch(addProduct(results))
        };

    return (
        <>
            <ModalWrapper>
              <ModalContent className="modal-content">
                    <TitleBox>
                        <ProductBtn
                        onClick={close}
                        >
                            <CloseSvg>
                                <use href={`${sprite}#close`}/>
                            </CloseSvg>
                        </ProductBtn>
                        <ProductTitle>{product.title}</ProductTitle>
                    </TitleBox>
                    <InfoBox>
                        <ImgFake />
                        <ProductDescr>{product.desc}</ProductDescr>
                    </InfoBox>
                    <PriceBox>
                        <ProductPrice>{product.price} ₴</ProductPrice>
                        <ProductBtn
                            onClick={()=>onAddProduct(product._id)}
                        >Додати до кошику</ProductBtn>
                    </PriceBox>
              </ModalContent>
            </ModalWrapper>
        </>
    )
}