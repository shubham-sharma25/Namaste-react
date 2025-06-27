import { useState, useEffect } from "react"
import { MENU_API_URL } from "../utils/constants";
const useRestaurant = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(`${MENU_API_URL}/${resId}`)
        const json = await data.json();
        setResInfo(json)
    }
    return resInfo

}

export default useRestaurant;