import { NavBar } from '../navBar/navBar';
import { InfoBar } from '../infoBar/infoBar';
import { HeaderBox } from './styled';
import headerBg from '../../images/headerBg.png'



export const Header = () => {
    return (
        <HeaderBox
        style={{ backgroundImage: `url(${headerBg})` }}
        >
            <NavBar />
            <InfoBar/>
        </HeaderBox>
    );
};