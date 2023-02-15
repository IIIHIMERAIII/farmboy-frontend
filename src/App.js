import { Route, Routes} from "react-router-dom";
import { LayoutHeader } from "./components/layoutHeader";
import { LayoutFooter } from "./components/layoutFooter";
import {HomePage} from './pages/homePage/homePage'

function App() {
  return (
    <>
    <LayoutHeader/>
        <Routes>
          <Route path="/" element={<HomePage />} />
      </Routes>
    <LayoutFooter/>
    </>
  )
}

export default App;
