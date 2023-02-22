// import axios from 'axios';
import myData from '../Fakebd/MOCK_DATA.json';

// const productsInstance = axios.create({
//     baseURL: 'http://localhost:3001/api/products'
// });

export const requestProducts = async () => {
    return myData;
};

// export const requestProducts = async () => {
//     const { data } = await productsInstance.get('/');
//     return data;
// };