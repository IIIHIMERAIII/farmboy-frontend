
import {
    CategoryBox,
} from "./styled";
import { Slider } from "../slider/slider";
import img1 from '../../images/img1.webp'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'


export const InfoBar = () => {
    const subTitles = [
    "1 Тут теаівпів івпьівпів івптпіво івпт іволп тівлп тіволпт ітпі тполівт олітволп тівлпттцгутгщпті атід атіва уцдлаті" ,
    "2 Тут теаівпів івпьівпів івптпіво івпт іволп тівлп тіволпт ітпі тполівт олітволп тівлпттцгутгщпті атід атіва уцдлаті" ,
    "3 Тут теаівпів івпьівпів івптпіво івпт іволп тівлп тіволпт ітпі тполівт олітволп тівлпттцгутгщпті атід атіва уцдлаті"
    ]
    const images = [
        { img: img1, title: "Молоко" },
        { img: img2, title: "Сири" },
        { img: img3, title: "Творог" }
    ];

    return (
        <CategoryBox>
            <Slider
                images={images}
                subTitles={subTitles}
            />
        </CategoryBox>
    );
};