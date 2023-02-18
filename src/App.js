import { Route, Routes} from "react-router-dom";
import { LayoutHeader } from "./components/layoutHeader";
import { LayoutFooter } from "./components/layoutFooter";
import { HomePage } from './pages/homePage/homePage'
import { BaketPage } from "./pages/baketPage/baketPage";
import {AboutPage} from './pages/abouPage/aboutPage'

function App() {
  return (
    <>
    <LayoutHeader/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/baket' element={<BaketPage/>}/>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    <LayoutFooter/>
    </>
  )
}

export default App;
