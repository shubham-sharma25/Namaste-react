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

Keys in React

-when displaying UI elements using an array in reacvt, we need to pass an attribute Key which must be unique in that group of elements

Importance of Keys:
React uses keys to optimise its rendering cycle, by identifying which element is same, updated or removed from the rendering tree
e.g.: lets assume we have 3 cards inside container initially,
Card1, Card2, Card3
then lets say we add 1 new card in the beginning 
Card0, Card1, Card2, Card3

Rendering without keys
Now if we dont use keys then, react will compare the UIs in such manner
 OLD  ! NEW
--------------
Card1 ! Card0
Card2 ! Card1
Card3 ! Card2
      ! Card3
-compare new card Card0 with Card1 , assume that card1 is replace with card0 , then react will remove card1 from the dom and add card0,
-similarly, compares Card2 with Card1, and removes Card2 and adds Card1
-similarly, compares Card3 with Card2, and removes Card3 and adds Card2
-then finally adds card3 at the end

Rendering with keys:

Now if we use keys then, react will compare the UIs by comparing the keys
    OLD    ! NEW
-----------------------
Card1(k:1) ! Card0
Card2(k:2) ! Card1(k:1)
Card3(k:3) ! Card2(k:2)
           ! Card3(k:3)
React will match keys at both the sides (before and after) and only render Card0 in the beginning
In this manner React rendering is optimised

What are good keys ? data.ids coming from backend, uuid library 
NOTE: never use array index as keys , as it will create confusion and wrong results because even if the elements are remove , the indexes remains the same.

Optimising techniques:

using module bundler like parcel, webpack
using transpiler like babel
using keys while rendering react elements

