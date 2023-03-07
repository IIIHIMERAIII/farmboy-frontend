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
    
    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = "tel:+380123456789";
        navigator.clipboard.writeText("+38012345678").then(
          () => {
            Notiflix.Notify.success("Телефон скопійовано")
          },
          () => {
            Notiflix.Notify.failure("Ой, щось пішло не так")
          }
);
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