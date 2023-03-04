import { useLocation } from 'react-router-dom'
import mainBg from '../images/mainBg.jpg'
import cartBg from '../images/cartBg.jpg'


export const BgParams = () => {
const location = useLocation()

if (location.pathname === '/') {
  return ({backgroundImage: `url(${mainBg})` })
}
else {
  return ({backgroundImage: `url(${cartBg})` })
}
}

