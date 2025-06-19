import { useState } from "react"
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
const Body = () => {
    const [restaurants, setRestaurants] = useState(resData);
    const filterRestaurants = () => {
setRestaurants(restaurants.filter((res) => res.data.avgRating > 4.5))
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={filterRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {restaurants.map((res) => {
                    return <RestaurantCard resData={res} key={res.data.id}/>
                })}
            </div>
        </div>
    )
}
export default Body;