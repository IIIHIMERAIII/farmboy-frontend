import { useState } from "react";
import { useDispatch } from "react-redux";
import {addProduct} from "../../redux/cartSlice";
import {
    ProductCard,
    TitleBox,
    ProductTitle,
    InfoSvg,
    InfoBox,
    ProductDescr,
    PriceBox,
    ProductPrice,
    ProductBtn,
    ImgFake
} from "./styled";
import { PoductModal } from "../productModal/productModal";
import sprite from '../../images/sprite.svg'

export const ProductItem = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({})
    const dispatch = useDispatch();

    const handleShowModal = (id) => {
    const results = data.find(item => item._id === id)
        setShowModal(true);
        setModalData(results)
    };

    const handleCloseModal = () => {
    setShowModal(false);
    };

    const onAddProduct = (id) => {
        const results = data.find(item => item._id === id)
            dispatch(addProduct(results))
        };

    return (
        <>
            {data.map(product => (
                <ProductCard key={product._id}>
                    <TitleBox>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductBtn
                        onClick={()=>handleShowModal(product._id)}
                        >
                            <InfoSvg>
                                <use href={`${sprite}#info`}/>
                            </InfoSvg>
                        </ProductBtn>
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
                </ProductCard>  
            ))}
                {showModal && (
                <PoductModal
                    close={handleCloseModal}
                    product={modalData}
                    data={data}
                />
            )}
        </>
    );
};

// "_id": "63ea36f521b1f69019390b66",
//     "title": "Wine - Toasted Head",
//     "price": "$3.04",
//     "descr": "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
//     "inStock": false