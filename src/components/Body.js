import { useState, useEffect, useContext } from "react"
import RestaurantCard from "./RestaurantCard";
import withPromotedLabel from "./RestaurantHOC";
import Shimmer from "./Shimmer"
import { API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const {loggedInUser, setUser} = useContext(UserContext);
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
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return(<h1>Looks like you are offline</h1>)
    }
    const handleChange = (e) => {
        // alert(e.target.value)
setUser(e.target.value)
    }
    return (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input
                        type="text"
                        value={searchText}
                        onChange={handleSearch}
                        className="border border-solid border-black rounded-lg"
                    />
                    <button
                        onClick={searchRes}
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    >
                        🔍Search
                    </button>
                </div>
                <div className="m-4 p-4">
                  <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={filterRestaurants}>Top Rated Restaurants</button>
                </div>
                <div className="m-4 p-4">
                <label>UserName:</label>
                  <input className="border border-black" type="text" value={loggedInUser} onChange={handleChange}/>
                </div>
            </div>
            {filteredRestaurants.length > 0 ? (
                <div className="flex flex-wrap">
                    {filteredRestaurants.map((res) => {
                        const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard)
                        return (
                            <div key={res.info.id}>
                            {res.info.promoted ? <RestaurantWithPromotedLabel resData={res} /> :<RestaurantCard resData={res} />}
                            </div>
                        )
                    })}
                </div>
            ) : <Shimmer />}

        </div>
    )
}
export default Body;