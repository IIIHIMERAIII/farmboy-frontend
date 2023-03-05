import myData from '../Fakebd/MOCK_DATA.json';
import emailjs from '@emailjs/browser';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';


export const requestProducts = async () => {
        return myData;
};
    
// mail sender

const data = {
    service_id: 'service_6bovx0u',
    template_id: 'template_63ysbop',
    user_id: 'rKqTd-xdRzrG_6XtO',
};

export function SendOrder (order)  {
    const { name, number, email } = order.owner;
    const products = order.products;

    const orderProducts = products.map(item => ( 
        { "Товар": item.title, "Ціна за штуку": item.price, "Кількість": item.qty}
        ))
        
    const sumPerObject = products.map(obj => obj.price * obj.qty);
    const totalSum = sumPerObject.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

    let template_params = {
        oredrID: nanoid(),
        name: name,
        number: number, 
        email: email || "",
        order: (orderProducts.map(item => JSON.stringify(item))),
        total: totalSum.toFixed(2),
  }
  
    console.log(orderProducts)
    emailjs.send(data.service_id, data.template_id, template_params, data.user_id)
  .then(function(response) {
    Notiflix.Notify.success('Вже в нашій пшштовій скринці');
  }, function(error) {
    Notiflix.Notify.failure('Помилка відправки:', error);
  });
}