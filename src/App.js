import { Route, Routes} from "react-router-dom";
import { LayoutHeader } from "./components/layoutHeader";
import { LayoutFooter } from "./components/layoutFooter";
import { HomePage } from './pages/homePage/homePage'
import { CartPage } from "./pages/cartPage/cartPage";
import { AboutPage } from './pages/abouPage/aboutPage'
import { Container } from "./components/containers";
import mainBg from './images/mainBg.jpg'

function App() {

  return (
    <Container
      style={{ backgroundImage: `url(${mainBg})` }}
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
