import { ProductCard } from "./styled";

export const ProductItem = ({ data }) => {
    
    return (
        <>
            {data.map(product => (
                <ProductCard key={product._id}>
                    <span>{product.title}</span>
                    <span></span>
                    <span></span>
                    <span></span>
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