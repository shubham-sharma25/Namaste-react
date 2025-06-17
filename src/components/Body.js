import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {restObj.map((res) => {
                    return <RestaurantCard resData={res} key={res.data.id}/>
                })}
            </div>
        </div>
    )
}
export default Body;