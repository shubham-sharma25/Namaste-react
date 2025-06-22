Exploring the world

When to make API call 

2 ways:
1. App loads, we fetch data by calling the API, then render complete UI with data
2. App loads, we render UI without data, fetch data by calling the API, then re-render our UI with the data

Which is better ? -> option 2
Why ? -> option 2 gives Better UX, because in option 1, till the time data is fetch from backend, there is nothing to show on UI , UI is blank which is not good user experience

useEffect(arg1, arg2)

-useEffect is normal JS function provided by react to perform actions at defined moments in the App
-the default nature of useEffect is to get called ater every render, but we can modify thi behaviour using dependency array
-defined moment means for e.g. during the component initial load, after any state update has happened or when the component is getting unmounted from the DOM
-arg1 : callback function : to execute the functionality we want to perform
-this will get called after rendering (ComponentDidMount) 
-arg2 : dependency array : decides the time when the callback function will be called 

Type of useEffect:
1.without dep array:
useEffect(()=>{})
-gets called after initial render as well as after every re-render

2.with empty dep array:
useEffect(()=>{}, [])
-gets called after initial render only

3.with some dep :
useEffect(()=>{}, [x])
-gets called after initial render as well as every time when x updates


Q: Why useEffect's callback function is called after component rendering ?
A: because to perform any action on the DOM, first the UI should be completely mounted on DOM therefore first component render then callback function gets called

fetch

-fetch API is given by browser to make a service call 

CORS:
-If we try to call an API of another origin from our app then browser doesnt allow it 
-How to bypass CORS error :
-using browser extension

Shimmer UI 

showing user a fake skeleton like UI untill the actual data is fetched from backend
better Replacement of loading spinner during the data fetch
much better User experience
can be found on youtube/swiggy app

