import { useDispatch, useSelector } from 'react-redux'
import CategoryItems from './CategoryItems'
import { clearCart } from '../redux/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cart.items)
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="text-center p-4 m-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            {cart.length === 0 ? (
                <div className="text-red-500">
                    <h2 className="text-xl">Cart is empty</h2>
                    <p>Please add items to the cart.</p>
                </div>
            ) : (
                <div className="w-6/12 m-auto">
                    <p>{cart.length} items in the cart</p>
                    <CategoryItems itemCards={cart} />
                    <p className="text-green-500">Happy Shopping!</p>
                    <button
                    className="cursor-pointer border border-red-600 m-2 p-2 bg-red-600 text-white font-bold rounded-lg"
                    onClick={handleClearCart}
                    >
                        Clear Cart!
                    </button>
                </div>
            )}
        </div>
    )
}
export default Cart;