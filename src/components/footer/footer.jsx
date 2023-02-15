import { Container } from "../containers";
import {
    FooterBox,
    ContactWrapper,
    ContactBox,
    NavBox,
    NavLink,
    ContactTitle,
    ContactText,
    SocialBox,
    SocialLink,
    Svg
} from "./styled";
import footerBg from '../../images/footerBg.jpg'
import sprite from '../../images/sprite.svg'

export const Footer = () => {
    return (
        <Container>
            <FooterBox
                style={{ backgroundImage: `url(${footerBg})` }}
            >
            <ContactWrapper>
                    <ContactBox>
                        <ContactTitle>Зв'язатись з нами просто!</ContactTitle>
                        <ContactText>+380 560 323</ContactText>
                        <ContactText>HuseynFarm@gmail.com</ContactText>
                    </ContactBox>
                    <NavBox>
                        <NavLink>Головна</NavLink>
                        <NavLink>Контакти</NavLink>
                        <NavLink>Про нас</NavLink>
                        <NavLink>Замовлення</NavLink>
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
        </Container>
    );
};