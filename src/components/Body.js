import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { API_URL } from "../utils/constants";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch(API_URL)
        const json = await data.json()
        const restData = json?.data?.restaurants || []
        setRestaurants(restData);
        setFilteredRestaurants(restData);
    }
    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }
    const searchRes = () => {
        const matchRestaurants = restaurants.filter((res => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
        setFilteredRestaurants(matchRestaurants)
    }
    const filterRestaurants = () => {
        setRestaurants(restaurants.filter((res) => res.info.avgRating > 4.2))
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} onChange={handleSearch} />
                    <button onClick={searchRes}>Search</button>
                </div>
                <button className="filter-btn" onClick={filterRestaurants}>Top Rated Restaurants</button>
            </div>
            {filteredRestaurants.length > 0 ? (
                <div className="res-container">
                    {filteredRestaurants.map((res) => {
                        return <RestaurantCard resData={res} />
                    })}
                </div>
            ) : <Shimmer />}

        </div>
    )
}
export default Body;