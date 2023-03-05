import Notiflix from "notiflix";
import { useDispatch} from "react-redux";
import {
    Form,
    InfoText,
    Label,
    Input,
    InputSvg,
    FormBtn,
    ApplySvg,
} from "./styled";
import sprite from '../../images/sprite.svg'
import {addOrder} from '../../redux/cartSlice'

export const CartForm = () => {
    const dispatch = useDispatch();

    const createOreder = e => {
        e.preventDefault()
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        const name = form.elements.name.value;
        if (phone && name !== '') {
            dispatch(addOrder({ name: name, number: phone, email: email || "" }));
            return
        }
        Notiflix.Notify.failure("Вкажіть номер телефону та ім'я")
    };

    return (
        <Form
        id="order-form"
        onSubmit={createOreder}
        >
                <InfoText>
                    Перевіримо ваш кошик,
                    якщо все що в хотіли замовити у вас в кошику, давайте продовжимо замовлення.
                    Будь ласка вжажіть ваші контактні дані, E-mail не обов'язково. Ми найближчим часом зв'яжемося з вами.
                </InfoText>
                <Label> E-mail
                    <Input
                    type="text"
                    name="email"
                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                    placeholder="E-mail@gmail.com"
                    />
                    <InputSvg>
                        <use href={`${sprite}#email`}/>
                    </InputSvg>
                </Label>
                <Label> Номер вашого мобільного
                    <Input
                    type='tel'
                    name='phone'
                    pattern="^\+?3?8?(0[\s\]\d{2}[\s\]\d{3}[\s\]\d{2}[\s\]\d{2})$"
                    placeholder="+3800552235847"
                    />
                    <InputSvg>
                        <use href={`${sprite}#phone`}/>
                    </InputSvg> 
                </Label>
                <Label> Як до вас можна звертатись?
                    <Input 
                    type='text'
                    name="name"
                    />
                    <InputSvg>
                        <use href={`${sprite}#user`}/>
                    </InputSvg> 
                </Label>
                <FormBtn
                     type="submit"
                >
                    <ApplySvg>
                        <use href={`${sprite}#apply`}/>
                    </ApplySvg> 
                </FormBtn>
        </Form>
    );
};
