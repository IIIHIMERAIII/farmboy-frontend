import { NavBar } from '../navBar/navBar';
import { InfoBar } from '../infoBar/infoBar';
import { HeaderBox } from './styled';

export const Header = () => {
    return (
        <>
            <HeaderBox
            >
                <NavBar />
                <InfoBar/>
            </HeaderBox>
        </>
    );
};