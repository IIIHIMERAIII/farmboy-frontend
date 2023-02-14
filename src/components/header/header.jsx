import { NavBar } from '../navBar/navBar';
import { CategoryBar } from '../categoryBar/categoryBar';
import { HeaderBox } from './styled';
import headerBg from '../../images/headerBg.png'



export const Header = () => {
    return (
        <HeaderBox
        style={{ backgroundImage: `url(${headerBg})` }}
        >
            <NavBar />
            <CategoryBar/>
        </HeaderBox>
    );
};