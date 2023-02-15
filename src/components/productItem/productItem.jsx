import { ProductCard, ProductTitle, InfoBox,ProductDescr, PriceBox, ProductPrice, AddBtn, ImgFake } from "./styled";

export const ProductItem = ({ data }) => {
    
    return (
        <>
            {data.map(product => (
                <ProductCard key={product._id}>
                    <ProductTitle>{product.title}</ProductTitle>
                    <InfoBox>
                        <ImgFake />
                        <ProductDescr>{product.descr}</ProductDescr>
                    </InfoBox>
                    <PriceBox>
                        <ProductPrice>{product.price}</ProductPrice>
                        <AddBtn>Додати до кошику</AddBtn>
                    </PriceBox>
            </ProductCard>
        ))}
        </>
    );
};

// "_id": "63ea36f521b1f69019390b66",
//     "title": "Wine - Toasted Head",
//     "price": "$3.04",
//     "descr": "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
//     "inStock": false