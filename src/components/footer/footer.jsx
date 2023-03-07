import {
    FooterBox,
    ContactWrapper,
    NavBox,
    NavLink,
    SocialBox,
    SocialLink,
    Svg
} from "./styled";
import sprite from '../../images/sprite.svg'
import Notiflix from "notiflix";

export const Footer = () => {
    // function onCopyLink(event) {
    //   const item = event.target.getAttribute('item');
    //     navigator.clipboard.writeText(item)
    //     Notiflix.Notify.success("Скопійовано");
    // }

    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = "tel:1234567890"; // замініть номером телефону, який ви хочете набрати
    };
     
    return (
        <FooterBox>
            <ContactWrapper>
                    <NavBox>
                        <NavLink
                        to='/'
                        >Головна
                        </NavLink>
                        <NavLink
                        to='/about'
                        >Контакти
                        </NavLink>
                        <NavLink
                            to='/cart'
                        >Кошик
                        </NavLink>
                    </NavBox>
                    <SocialBox>
                        <SocialLink>
                            <Svg>
                                <use href={`${sprite}#telegram`}/>
                            </Svg>
                        </SocialLink>
                        <SocialLink>
                            <Svg>
                                <use href={`${sprite}#viber`}/>                                
                            </Svg>
                        </SocialLink>
                        <SocialLink
                        // href="tel:+380123456789"
                        onClick={handleClick}
                        >
                            <Svg
                            >
                            <use href={`${sprite}#phone`}/>                                
                            </Svg>
                        </SocialLink>
                    </SocialBox>
            </ContactWrapper>
        </FooterBox>
    );
};