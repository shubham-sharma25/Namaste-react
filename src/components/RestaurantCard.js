import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
    const { id, name, cuisines, avgRating, costForTwo, sla: {deliveryTime} } = resData.info;
    return (
        <div className="res-card" key={id}>
            <img
                className="res-logo"
                src={IMG_CDN_URL + resData.info.cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>Rs. {costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}
export default RestaurantCard;