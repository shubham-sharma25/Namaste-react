Understanding with real world application of Food ordering App

Before starting any project: Role of a senior developer:
-Planning
a. UX design/wireframe/mock
b. decide components/modules based on UX
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

Props

Used to pass dynamic data & info from 1 component to another 
value of props is a JS object

Config driven UI :

In a swiggy like app, we display an offer section to the user , but The offers available to a user depends on the location of that particular user, so the user living in Tier 1 cities might have more offers than users living in tier 2 or 3 cities similarly users living in remote villages may not have any offers.
In such cases the UI for every other user is different and is driven from the data and this data is fetched from the backend API.
e.g.,
//fetchConfigData() 
response = {
    'delhi': [offer1, 2,3],
    'Mumbai': [offer1, 2,3],
    'Kota': [offer1],
    'Lakheri': [],
}
//fetchUserData()
user1= {
    location: 'delhi' // this user will see offer section with multiple offers
}
user2 = {
    location: 'lakheri' // this user wont see offer section at all
}