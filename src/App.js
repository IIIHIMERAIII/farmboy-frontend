import { Route, Routes} from "react-router-dom";
import { Layout } from "./components/layout";
import {HomePage} from './pages/homePage/homePage'

function App() {
  return (
    <>
    <Layout/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </>
  )
}

export default App;
