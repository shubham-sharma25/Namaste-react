import {useDispatch} from 'react-redux'
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from '../redux/cartSlice';

const CategoryItems = ({ itemCards }) => {
    const dispatch = useDispatch()
    const addItems = (itemName) => {
        //dispatch an action
        dispatch(addItem(itemName))
    }
    return (
        <div>
            {itemCards.map((item, idx) => {
                return (
                    <div key={idx} className="p-4 my-2 border-b-1 text-left bg-white flex justify-between">
                        <div className="w-9/12">
                            <div>
                                <span className="py-2">{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price / 100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                        <div className="absolute">
                            <button
                            className="bg-green-200 rounded-lg px-2 hover:bg-green-300"
                            onClick={() => addItems(item.card.info.name)}
                            >
                            Add
                            </button>
                        </div>
                            <img src={`${IMG_CDN_URL}${item.card.info.imageId}`} className="w-full" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CategoryItems;
