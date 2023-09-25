import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import DonationDetails from './components/DonationDetails/DonationDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('/Donation.json')
      },
      {
        path:'/donation',
        element: <Donation></Donation>,
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:'/donations/:id',
        element:<DonationDetails></DonationDetails>,
        loader: ()=> fetch('../Donation.json')
      }
    ]
    
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
