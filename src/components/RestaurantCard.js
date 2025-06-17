import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData, key }) => {
    const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData.data;
    return (
        <div className="res-card" key={key}>
            <img
                className="res-logo"
                src={CDN_URL}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>Rs. {costForTwo} for two</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}
export default RestaurantCard;