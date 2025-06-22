import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Restaurant = () => {
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams()
    
    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(`${MENU_API_URL}/${resId}`)
        const json = await data.json();
        setResInfo(json)
    }
    if (resInfo === null) return <Shimmer />;
    const { name, cuisine, costForTwo } = resInfo?.cards[0]?.card?.card?.info
    const { itemCards } = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0].card?.card
    return (
        <div className="restaurant">
            <h1>{name}</h1>
            <p>{cuisine.join(',')}</p>
            <p>Rs. {costForTwo / 100} for two</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => {
                    return <li>{item.card.info.name} - Rs.{item.card.info.price / 100}</li>
                })}
            </ul>
        </div>
    )

}

export default Restaurant;