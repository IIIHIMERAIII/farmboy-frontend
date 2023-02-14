import { useEffect, useState } from "react";
import { requestProducts } from '../../api/products'
import { ProductList } from "./styled";
import { ProductItem } from "../productItem/productItem";


export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const results = await requestProducts();
                setProducts(results);
            }
            catch ({ response }) {
                console.log(response.data.message);
            }
        }
        fetchProducts()
    }, []);

    return (
        <ProductList>
            <ProductItem
            data={products}/>
        </ProductList>
    )
};