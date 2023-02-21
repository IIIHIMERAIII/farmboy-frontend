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

export const CartForm = () => {
    return(
            <Form>
                <InfoText>
                    Перевіримо ваш кошик,
                    якщо все що в хотіли замовити у вас в кошику, давайте продовжимо замовлення.
                    Будь ласка вжажіть ваші контактні дані, а ми найближчим часом зв'яжемося з вами.
                </InfoText>
                <Label> E-mail
                <Input>
                    </Input>
                    <InputSvg>
                        <use href={`${sprite}#email`}/>
                    </InputSvg>
                </Label>
                <Label> Номер вашого мобільного
                    <Input/>
                    <InputSvg>
                        <use href={`${sprite}#phone`}/>
                    </InputSvg> 
                </Label>
                <Label> Як до вас можна звертатись?
                    <Input />
                    <InputSvg>
                        <use href={`${sprite}#user`}/>
                    </InputSvg> 
                </Label>
                <FormBtn>
                    <ApplySvg>
                        <use href={`${sprite}#apply`}/>
                    </ApplySvg> 
                </FormBtn>
            </Form>
    );
};