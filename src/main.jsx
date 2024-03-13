import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

// import './index.css';
import App from './App.jsx';
import Accordion from './components/Accordion';
import RandomColor from './components/RandomColor.jsx';
import StarRating from './components/StarRating.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import LoadMore from './components/LoadMore.jsx';
import TreeView from './components/treeView/TreeView.jsx';
import QrGenerator from './components/QrGenerator.jsx';



const AppLayout = () =>{

  return(
    <>
      <App />
      <Outlet />
    </>
  )
}

const routes = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
      path:"/accordion",
      element:<Accordion />
    },
    {
      path:"/rcg",
      element:<RandomColor />
    },
    {
      path:"/star-rating",
      element:<StarRating />
    },
    {
      path:"/img-slider",
      element:<ImageSlider />
    },
    {
      path:"/load-more",
      element:<LoadMore />
    },
    {
      path:"/tree-view",
      element:<TreeView />
    },
    {
      path:"/qr-generator",
      element:<QrGenerator />
    },
  ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>,
)
