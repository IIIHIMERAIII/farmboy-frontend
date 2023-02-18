
import { useSelector} from "react-redux";
import { BaketBox, List } from "./styled";
import { BaketItem } from "../baketItem/baketItem";

export const BaketList = () => {
    const baket = useSelector(state => state.baket.products);    
    return (
        <BaketBox>
        <List>
            {  baket.length
                ? baket.map((data) => (
                    <BaketItem
                            key={data.id}
                            product={data}
                    />
                ))
                :"Ваш кошик пустий"
            }
        </List>
    </BaketBox>
    );
};
