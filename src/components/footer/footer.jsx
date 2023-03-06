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
                        <SocialLink>
                            <Svg>
                                <use href={`${sprite}#phone`}/>                                
                            </Svg>
                        </SocialLink>
                    </SocialBox>
            </ContactWrapper>
        </FooterBox>
    );
};