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

Making App performance better

Problem1 without parcel/webpack:
If we dont use a module bundler like parcel/webpack in our app then it will be really painful to load the hude app on the user browser and it will take forever to load which is horrible user experience

Solution:

-Using Parcel/webpack which is bundling our app and converting them into single JS , html and css file which also can be found under network tab

Problem with a single JS file :

when we make only 1 JS file for the whole app, the size of that file would be huge and it would take very long time for that file to be downloaded on user's browser, which will make the app slow
e.g. if the bundled file size is 2 MB then when user loads the app on his browser, first the browser needs to download this file and if he is using slow network then it would take really long time to download and the app will keep loading for that time

Complete Solution:

Code splitting/chunking/Lazy loading/dynamic bundling/dynamic import

-Splitting the bundle (1 JS file) into multiple smaller bundles (multiple smaller JS files)

Splitting decision: How and what?

Lets assume there is bank application with a homepage which has links to various other pages like accounts, statements, cards, Administration, payment etc.
Now we know that user may not always go to each of these pages/features, then why we need to load all of these feature during the initial app load ?? its pointless right ?
The more optimal solution would be to load these features only on demand (when the link to visit these pages is clicked) So that during intial load we have to load less data on the user browser which will save a lot of time and load our app faster. Then on clicking of any link, we can load the data for that particular feature. 
This will improve app performance and user experience
According we can split those features into different chunks 
e.g. //App.js
const Grocery = React.lazy(() => import("./components/Grocery"))

//import is a function which takes the path of the lazy loaded component

-Now parcel/webpack will create 1 more bundled file which will have the code of complete Grocery feature
-so when the app will load first time, 1 bundle will be downloaded inside the network tab
-when user will click on the Grocery link there will be separate call in network tab to download another bundled file (chunk) created by parcel
-I dont need to load Grocery component on initial app load as i dont need this feature on homepage
-so i will dynamically import it during run time when the link to grocery is clicked
-thats how i will load my app faster on user browser

Problem with Lazy loading:

-On initial App load we get only 1 JS bundle which is used to display UI on screen
-Now on clicking the Grocery link , the network call starts to download another bundle which may take few milliseconds depending on user's network speed.
-During this milliseconds the app has nothing to show to the user so it will throw some error

Solution:

Suspense component

-By using Suspense component, We can temporarily display a user friendly message or screen like 'Loading' till the time the bundle is downloaded or the component is loaded on the screen

<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>




