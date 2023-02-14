import sprite from '../../images/sprite.svg'
import { LocationBox, Svg, Adress } from './styled';

export const Location = () => {
    return (
        <LocationBox>
            <Svg>
                <use href={`${sprite}#location`}></use>
            </Svg>
            <Adress>вул. Джохара Дудаєва 19А</Adress>
        </LocationBox>
    );
};