import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
    //     alert("Fetching data from API")
    //     const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING', {
    // method: "GET",
    // headers: {
    //   "access-control-allow-origin" : "*",
    //   "Content-type": "application/json; charset=UTF-8"
    // }})
    //     const json = await data.json()
    //     alert(json)
    //     setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }
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
                    return <RestaurantCard resData={res} key={res.data.id} />
                })}
            </div>
        </div>
    )
}
export default Body;