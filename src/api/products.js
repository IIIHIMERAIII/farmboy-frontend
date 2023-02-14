import axios from 'axios';

const productsInstance = axios.create({
    baseURL: 'http://localhost:3001/api/products'
});

export const requestProducts = async () => {
    const { data } = await productsInstance.get('/');
    return data;
};