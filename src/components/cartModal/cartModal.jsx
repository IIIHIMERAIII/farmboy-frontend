import { Center, Modal } from "./styled"
import { CartList } from "../cartList/cartList"
import cartBg from '../../images/cartBg.jpg'


export const CartModal = ({ setIsOpen }) => {
    return (
        <>
            <Center>
                <Modal
                style={{ backgroundImage: `url(${cartBg})` }}>
                                
            <button
            onClick={() => setIsOpen(false)}
                    />
                    <CartList
                    z-index="5"
                    />
                </Modal>
            </Center>
        </>
    )
}