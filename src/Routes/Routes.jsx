import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../components/Pages/AdminRoute/AdminRoute";
import AllCars from "../components/Pages/AllCars/AllCars";
import Blog from "../components/Pages/Blog/Blog";
import BuyerRoute from "../components/Pages/BuyerRoute/BuyerRoute";
import AddProduct from "../components/Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../components/Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../components/Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../components/Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../components/Pages/Dashboard/MyOrders/MyOrders";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Login/Register";
import PrivateRoute from "../components/Pages/PrivateRoute/PrivateRoute";
import SellerRoute from "../components/Pages/SellerRoute/SellerRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allCars/:id',
                element: <AllCars></AllCars>,
                loader: ({params}) => fetch(`http://localhost:5000/allCars/${params.id}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    },
        {
            path: '/dashboard',
            element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
            children: [
                {
                    path: "/dashboard",
                    element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
                },
                {
                    path: '/dashboard/myOrders',
                    element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
                },
                {
                    path: "/dashboard/allUsers",
                    element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                },
                {
                    path: "/dashboard/allSellers",
                    element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
                },
                {
                    path: "/dashboard/allBuyers",
                    element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
                },
                
            ]            
        },
])