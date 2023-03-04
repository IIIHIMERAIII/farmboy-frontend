import { Route, Routes, useLocation} from "react-router-dom";
import { LayoutHeader } from "./components/layoutHeader";
import { LayoutFooter } from "./components/layoutFooter";
import { HomePage } from './pages/homePage/homePage'
import { CartPage } from "./pages/cartPage/cartPage";
import { AboutPage } from './pages/abouPage/aboutPage'
import { Container } from "./components/containers";


function App() {
  const location = useLocation()

  let current = "";
    
  if (location.pathname === '/') {
      current = "main"
    }
    else {
      current = "cart"
    }


  return (
    <Container
      className={current}
      >
        <LayoutHeader/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/cart' element={<CartPage/>}/>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        <LayoutFooter/>
    </Container>
  )
}

export default App;
