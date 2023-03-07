import { useLocation } from 'react-router-dom';
import { Logo } from "../logo/logo";
import { NavBox, Title, CartBtn , Svg} from "./styled";
import sprite from '../../images/sprite.svg'

export const NavBar = () => {
    const location = useLocation();




    return (
    <NavBox>
        <Logo />
            {location.pathname === '/'
                ?   
                    <>
                    <Title>Чому варто обрати саме нас</Title>
                    <CartBtn
                    className="header-button"
                    to='/cart'        
                    >
                    <Svg>
                    <use href={`${sprite}#basket`}/>
                    </Svg>
                    </CartBtn>
                    </> 
                
                :   <CartBtn
                    className="header-button"
                    to='/'  
                    >
                    <Svg>
                    <use href={`${sprite}#arrow-back`}/>
                    </Svg>
                    </CartBtn>
            
            
            }

    </NavBox>
);
};