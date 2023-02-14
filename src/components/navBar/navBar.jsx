import { Location } from "../location/location";
import { Logo } from "../logo/logo";
import { NavBox, Bag, Svg} from "./styled";
import sprite from '../../images/sprite.svg'

export const NavBar = () => {
    return (
    <NavBox>
        <Logo />
        <Location/>    
        <Bag>
            <Svg>
                <use href={`${sprite}#basket`}></use>
            </Svg>
        </Bag>
    </NavBox>
);
};