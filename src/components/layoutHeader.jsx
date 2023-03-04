import { useLocation } from 'react-router-dom';
import { Header } from "./header/header";
import { NavBar } from './navBar/navBar';
import { HeaderBox } from './header/styled';


export const LayoutHeader = () => {
     const location = useLocation();
    
  if (location.pathname === '/') {
    return <Header/>;
  } else {
      return (
            <HeaderBox>
                <NavBar />
            </HeaderBox>
      )
  }
}
