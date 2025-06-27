Optimising our app

-performance
-speed
-light weight
-coding practice
-cleaner code
-custom hooks
-single responsibility principle
-better maintainability
-reusable
-testable
-modular

Single Responsibility Principle

Every component either function, class should perform 1 specific task i.e. it should have 1 responsibility
e.g. the component RestaurantMenu should only display menu of restaurant

Custom Hooks / Abstraction of logic
-normal JS function create to keep a common functionality or logic which we can use inside multiple component in our App
-a hooks should have a fixed contract that it will take certain value as argument and will return certain value and this should be decided before creating a hook (input & output of the hook)
-helper function
-using use as prefix is only conventional to tell react that its a custom hook and not mandatory
-create inside util

Why / Need ?
lets understand with example of Restaurant component
Responsibility of Restaurant component
-fetch data
-display data
So this is having multiple responsibility instead it should only be responsible for displaying the data
e.g : const resInfo = useRestaurant(url)
it shouldnt worry about how the data is fetched, therefore we make a custom hook useRestaurant and keep our data fetching logic inside it 
-input of hook : url
-output of hook : restaurant data

How to take care of App when user network in offline?
-you can either write this logic in root component or you can creata customHook and check if user is online or offline then return true or false 

Q: how to check if user is online or offline ?
A: When the browser get internet connection (becomes online), then window object fires an 'online' event
then the value of Navigator.onLine becomes true
    window.addEventListener('online', () => {setOnlineStatus(true)})
    window.addEventListener('offline', () => {setOnlineStatus(false)})
    Online Status: {onlineStatus? '✅' : '❌'}
-So now using above logic, we can track if the user network is offline and we can display a user friendly text or UI 
-google chrome detects if the user is offline and shows the dinosaur jumping game

