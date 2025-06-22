Finding the path

Routing

-using JS library react-router-dom
-always create your route configuration on the root component (App)

createBrowserRouter(configArray) : is a function given by react router dom to create router configuration and is the recommended router from react projects
-it uses DOM history API to update the URL

e.g. App.js
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet /> //this will be replaced with the rendered component in routes
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [ // so that only the content changes but header remains there
            {path: "/", element: <Body />},
            {path: "/about",element: <About />},
            {path: "/contact",element: <Contact />},
            {path: "*",element: <Contact />},

        ],
        errorElement: <PageNotFound />,
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)

Unknown routes : 
-react-router-dom provides its own 404 not found page by default without adding additional routing config for it, alternatively we have key errorElement: <PageNotFound />

useRouteError: hook given by react-router-dom which gives info about the error
e.g. //PageNotFound.js
import {useRouteError} from "react-router-dom";
const err = userRouteError() // {status: 404, statusText: 'Not Found'}

Linking the pages:

Link tag

Q: Why you shouldnt use <a> anchor tag to create links ?
A: Anchor tag refreshes whole page even when the header doesnt need to be refreshed
Link tag navigates to different pages without reloading the page
e.g.
<Link to="/">Home</Link>


Single Page Application:

Our whole app is build on 1 single page with 1 parent component which consists of all the other component inside it and routing which will only change the body of that 1 page while rest of the page (header, footer etc) remains intact.
-the app will never be reloaded on user action 

Types of routing in web App

Server side routing : In earlier times, when clicking on any link like About us, then the whole page gets reloaded , a network call is send to fetch about us.html and render it on the page

server side routing and server side rendering are 2 different topics

Client side routing : During the initial rendering of the App component , we already have rest of our component loaded as well as they are imported , so on clicking the link it directly loads on the page instantly

