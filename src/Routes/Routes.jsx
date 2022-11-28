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
import Payment from "../components/Pages/Dashboard/Payment/Payment";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Login/Register";
import MyProducts from "../components/Pages/MyProducts/MyProducts";
import PrivateRoute from "../components/Pages/PrivateRoute/PrivateRoute";
import SellerRoute from "../components/Pages/SellerRoute/SellerRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: ({params}) => fetch(`https://used-products-resale-server-pied.vercel.app/allCars/${params.id}`)
            },
        ]
    },
        {
            path: '/dashboard',
            element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: "/dashboard/addProduct",
                    element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
                },
                {
                    path: "/dashboard/myProducts",
                    element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
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
                {
                    path: "/dashboard/payment/:id",
                    element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                    loader: ({params}) => fetch(`https://used-products-resale-server-pied.vercel.app/bookings/${params.id}`)
                },
                
            ]            
        },
])