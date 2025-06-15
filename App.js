import React from "react";
import ReactDOM from "react-dom/client";
/**
-header 
--Logo
--NavItem
-body
--Search
--RestaurantContainer
---RestaurantCard
-footer
--CopyRight
--Links
 */
const restObj = [{
    type: "restaurant",
    data: {
        type: "F",
        id: "12345",
        name: "Shubham's food",
        uuid: "12345-67890-abcdef",
        city: "New York",
        area: "Downtown",
        avgRating: "4.5",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "image12345",
        cuisines: ["Indian", "Chinese", "Thai"],
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/17/a17de87b-9413-49b6-9982-42a676e8cbab_6e749005-f69b-4754-a229-18681a4f03c8.jpg_compressed",
        tags: [],
        costForTwo: 500,
        costForTwoString: "$500 for two",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        slaString: "25-35 mins",
        lastMileTravel: 2.5,
        slugs: {
            restaurant: "shubhams-food-downtown",
            city: "new-york"
        },
        cityState: "NY",
        address: "123 Main St, Downtown, New York, NY 10001",
        locality: "Downtown",
        parentId: 56789,
        unserviceable: false,
    }
}, {
    type: "restaurant",
    data: {
        type: "F",
        id: "12345",
        name: "Megha's food",
        uuid: "12345-67890-abcdef",
        city: "New York",
        area: "Downtown",
        avgRating: "4.5",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "image12345",
        cuisines: ["Indian", "Chinese", "Thai"],
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/17/a17de87b-9413-49b6-9982-42a676e8cbab_6e749005-f69b-4754-a229-18681a4f03c8.jpg_compressed",
        tags: [],
        costForTwo: 500,
        costForTwoString: "$500 for two",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        slaString: "25-35 mins",
        lastMileTravel: 2.5,
        slugs: {
            restaurant: "shubhams-food-downtown",
            city: "new-york"
        },
        cityState: "NY",
        address: "123 Main St, Downtown, New York, NY 10001",
        locality: "Downtown",
        parentId: 56789,
        unserviceable: false,
    }
}, {
    type: "restaurant",
    data: {
        type: "F",
        id: "12345",
        name: "Mummy's food",
        uuid: "12345-67890-abcdef",
        city: "New York",
        area: "Downtown",
        avgRating: "4.5",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "image12345",
        cuisines: ["Indian", "Chinese", "Thai"],
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/17/a17de87b-9413-49b6-9982-42a676e8cbab_6e749005-f69b-4754-a229-18681a4f03c8.jpg_compressed",
        tags: [],
        costForTwo: 500,
        costForTwoString: "$500 for two",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        slaString: "25-35 mins",
        lastMileTravel: 2.5,
        slugs: {
            restaurant: "shubhams-food-downtown",
            city: "new-york"
        },
        cityState: "NY",
        address: "123 Main St, Downtown, New York, NY 10001",
        locality: "Downtown",
        parentId: 56789,
        unserviceable: false,
    }
}]
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, costForTwo, deliveryTime, img } = resData.data;
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={img}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating}</h4>
            <h4>Rs. {costForTwo} for two</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard
                    resData={restObj[0]}
                />
                <RestaurantCard
                    resData={restObj[1]}
                />
                <RestaurantCard
                    resData={restObj[2]}
                />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
