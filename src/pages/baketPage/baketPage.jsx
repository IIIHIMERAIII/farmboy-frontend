
import { Main} from "./styled";
import { Container } from '../../components/containers';
import { BaketList } from "../../components/baketList/baketList";
import { BaketForm } from "../../components/baketForm/baketForm";

export const BaketPage = () => {
    return (
    <Container>
            <Main>
                <BaketList />
                <BaketForm />
            </Main>
    </Container>       
);
};