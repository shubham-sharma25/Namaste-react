import {useParams} from "react-router-dom"
import useRestaurant from "../utils/useRestaurant"
import Shimmer from "./Shimmer";

const Restaurant = () => {
    const {resId} = useParams()
    const resInfo = useRestaurant(resId)

    if (resInfo === null) return <Shimmer />;

    const { name, cuisine, costForTwo } = resInfo?.cards[0]?.card?.card?.info
    const { itemCards } = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0].card?.card
    return (
        <div className="restaurant">
            <h1>{name}</h1>
            <p>{cuisine.join(',')}</p>
            <p>Rs. {costForTwo / 100} for two</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => {
                    return <li>{item.card.info.name} - Rs.{item.card.info.price / 100}</li>
                })}
            </ul>
        </div>
    )

}

export default Restaurant;