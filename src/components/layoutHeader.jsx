import { useLocation } from 'react-router-dom';
import { Header } from "./header/header";
import headerBg from '../images/headerBg.jpg'
import { NavBar } from './navBar/navBar';
import { HeaderBox } from './header/styled';
import { Container } from './containers';


export const LayoutHeader = () => {
     const location = useLocation();
    
  if (location.pathname === '/') {
    return <Header/>;
  } else {
      return (
        <Container>
            <HeaderBox
                style={{ backgroundImage: `url(${headerBg})` }}
            >
                <NavBar />
            </HeaderBox>
          </Container>
      )
  }
}
