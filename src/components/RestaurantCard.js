import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
    const { id, name, cuisines, avgRating, costForTwo, sla: { deliveryTime } } = resData.info;
    return (
        <div className="m-4 p-4 w-[220] rounded-lg bg-gray-100 hover:bg-gray-200" key={id}>
            <Link to={"/restaurant/" + "425"}>
                <img
                    className="res-logo"
                    src={IMG_CDN_URL + resData.info.cloudinaryImageId}
                />
            </Link>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>🥘 {cuisines.join(',')}</h4>
            <h4>⭐ {avgRating}</h4>
            <h4>💸 {costForTwo}</h4>
            <h4>⏱ {deliveryTime} mins</h4>
        </div>
    )
}
export default RestaurantCard;