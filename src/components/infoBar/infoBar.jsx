
import {
    CategoryBox,
    SubTitle
} from "./styled";
import { Slider } from "../slider/slider";
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'

const images = [{ img: img1, title: "Молоко" }, { img: img2, title: "Сири" }, { img:img3, title:"Творог" }];
export const InfoBar = () => {

    return (
        <CategoryBox>
            <Slider
                images={images}
            />
            <SubTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptas modi, soluta distinctio corporis ad ab quos sequi. Ea hic voluptatem ullam, pariatur necessitatibus velit ducimus voluptatum, accusamus rem, eum exercitationem atque? Fugit numquam illo impedit eveniet, perspiciatis harum nobis!</SubTitle>
        </CategoryBox>
    );
};