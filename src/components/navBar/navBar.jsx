import { Location } from "../location/location";
import { Logo } from "../logo/logo";
import { NavBox, CartBtn , Svg} from "./styled";
import sprite from '../../images/sprite.svg'
import React, { useState } from "react";
import {CartModal} from '../cartModal/cartModal'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    return (
    <NavBox>
        <Logo />
        <Location/>    
        <CartBtn
            id="Cart"        
            onClick={() => setIsOpen(true)}
            >
            <Svg>
                <use href={`${sprite}#basket`}/>
            </Svg>
            </CartBtn>
        {isOpen && <CartModal setIsOpen={setIsOpen} />}    
    </NavBox>
);
};