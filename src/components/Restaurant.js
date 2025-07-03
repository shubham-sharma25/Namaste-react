import { useParams } from "react-router-dom"
import useRestaurant from "../utils/useRestaurant"
import Shimmer from "./Shimmer";
import Category from "./Category";
import { ITEM_CATEGORY } from "../utils/constants";

const Restaurant = () => {
    const { resId } = useParams()
    const resInfo = useRestaurant(resId)

    if (resInfo === null) return <Shimmer />;

    const { name, cuisine, costForTwo } = resInfo?.cards[0]?.card?.card?.info
    const { itemCards } = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0].card?.card
    const itemCategory = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((s) => {
        return s.card.card['@type'] === ITEM_CATEGORY
    })
    return (
        <div className="text-center  p-4">
            <h1 className="font-bold m-4 p-4">{name}</h1>
            <p className="font-bold">{cuisine.join(',')}</p>
            {itemCategory.map((item, idx) => (
                <div key={idx}>
                    <Category data={item.card.card} />
                </div>
            ))}
        </div>
    )

}

export default Restaurant;