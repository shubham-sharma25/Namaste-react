import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./components/Header"
import Body from "./components/Body";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Restaurant from "./components/Restaurant";

const About = React.lazy(() => import('./components/About'))
const Grocery = React.lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
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
