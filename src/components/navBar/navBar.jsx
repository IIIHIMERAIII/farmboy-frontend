import { useLocation } from 'react-router-dom';
import { Location } from "../location/location";
import { Logo } from "../logo/logo";
import { NavBox, CartBtn , Svg} from "./styled";
import sprite from '../../images/sprite.svg'

export const NavBar = () => {
    const location = useLocation();




    return (
    <NavBox>
        <Logo />
            <Location />
            {location.pathname === '/'
                ?
                    <CartBtn
                    className="header-button"
                    to='/cart'        
                    >
                    <Svg>
                    <use href={`${sprite}#basket`}/>
                    </Svg>
                    </CartBtn>
                
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