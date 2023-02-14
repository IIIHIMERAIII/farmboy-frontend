import { useEffect, useState } from "react";
import {requestProducts} from '../../api/products'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const results = await requestProducts();
                setProducts(results);
            } 
            catch({response}) {
                console.log(response.data.message);
            }
        }
        fetchProducts()
    }, []);

    const elements = products.map(({ _id, title, price, descr, inStock }) => <li key={_id}>{title}</li>)
    
return (
    <ul>
        {elements}
        </ul>
    )
};

export default Products;