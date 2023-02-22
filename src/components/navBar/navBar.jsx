import { Location } from "../location/location";
import { Logo } from "../logo/logo";
import { NavBox, CartBtn , Svg} from "./styled";
import sprite from '../../images/sprite.svg'

export const NavBar = () => {

    return (
    <NavBox>
        <Logo />
        <Location/>    
            <CartBtn
            to='/cart'        
            >
            <Svg>
                <use href={`${sprite}#basket`}/>
            </Svg>
        </CartBtn>
    </NavBox>
);
};