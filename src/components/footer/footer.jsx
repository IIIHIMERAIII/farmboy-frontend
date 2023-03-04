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

export const Footer = () => {
    return (
        <FooterBox>
            <ContactWrapper>
                    <NavBox>
                        <NavLink
                        to='/'
                        >Головна</NavLink>
                        <NavLink>Контакти</NavLink>
                        <NavLink
                        to='/about'
                        >Про нас</NavLink>
                        <NavLink
                            to={'/cart'}
                        >Замовлення</NavLink>
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
                    </SocialBox>
            </ContactWrapper>
        </FooterBox>
    );
};