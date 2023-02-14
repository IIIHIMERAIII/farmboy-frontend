
import { CategoryBox, Img, TitleBox, Title, SubTitle} from "./styled";
import milk from '../../images/milk.jpg'

export const CategoryBar = () => {
    return (
        <CategoryBox>
            <TitleBox>
            <Img src={milk} />
                <Title>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis facere voluptates harum.</Title>
            </TitleBox>
            <SubTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptas modi, soluta distinctio corporis ad ab quos sequi. Ea hic voluptatem ullam, pariatur necessitatibus velit ducimus voluptatum, accusamus rem, eum exercitationem atque? Fugit numquam illo impedit eveniet, perspiciatis harum nobis!</SubTitle>
        </CategoryBox>
    );
};