import { useState } from "react"
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [restaurants, setRestaurants] = useState([{
        data: {
            id: "1",
            name: "Restaurant A",
            avgRating: 4.5,
            imageId: "image1.jpg",
            cuisines: ["Italian", "Pizza"],
            costForTwo: 500,
            deliveryTime: 30
        }
    }, {
        data: {
            id: "2",
            name: "Restaurant B",
            avgRating: 3.8,
            imageId: "image2.jpg",
            cuisines: ["Chinese", "Noodles"],
            costForTwo: 400,
            deliveryTime: 25
        }
    }])
    const filterRestaurants = () => {
setRestaurants(restaurants.filter((res) => res.data.avgRating > 4))
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