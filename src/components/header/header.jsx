import { NavBar } from '../navBar/navBar';
import { InfoBar } from '../infoBar/infoBar';
import { HeaderBox } from './styled';
import { Container } from '../containers';
import headerBg from '../../images/headerBg.png'



export const Header = () => {
    return (
        <Container>
            <HeaderBox
                style={{ backgroundImage: `url(${headerBg})` }}
            >
                <NavBar />
                <InfoBar/>
            </HeaderBox>
        </Container>
    );
};