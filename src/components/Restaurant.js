import { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import useRestaurant from "../utils/useRestaurant"
import Shimmer from "./Shimmer";
import Category from "./Category";
import UserContext from "../utils/UserContext";
import { ITEM_CATEGORY } from "../utils/constants";

const Restaurant = () => {
    const [open, setOpen] = useState('')
    const data = useContext(UserContext)
    const { resId } = useParams()
    const resInfo = useRestaurant(resId)

    if (resInfo === null) return <Shimmer />;

    const { name, cuisine } = resInfo?.cards[0]?.card?.card?.info
    const itemCategory = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((s) => {
        return s.card.card['@type'] === ITEM_CATEGORY
    })
    const handleClick = (idx) => () => {
        setOpen(open===idx ? '' : idx);
    }
    return (
        <div className="text-center  p-4">
            <p>{data?.loggedInUser}, your favourite dish is just few mins away...</p>
            <h1 className="font-bold m-4 p-4">{name}</h1>
            <p className="font-bold">{cuisine.join(',')}</p>
            {itemCategory.map((item, idx) => (
                <div key={idx}>
                    <Category
                    data={item.card.card}
                    open={open===idx}
                    handleClick={handleClick(idx)}
                    />
                </div>
            ))}
        </div>
    )

}

export default Restaurant;