import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header"
import Body from "./components/Body";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Restaurant from "./components/Restaurant";
import UserContext from "./utils/UserContext";
import store from './redux/store';

const About = React.lazy(() => import('./components/About'))
const Grocery = React.lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        // Simulating an API call to fetch user data
        setTimeout(() => {
            setUser('Shubham');
        }, 1000);
    }, [])
    // setUser can be passed down to child components to allow them to update the context
    return (
        <Provider store={store}>
            <UserContext.Provider value={{ loggedInUser: user || 'Guest', setUser }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider >
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>),
            },
            {
                path: "/restaurant/:resId",
                element: <Restaurant />,
            },
        ],
        errorElement: <PageNotFound />,
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
