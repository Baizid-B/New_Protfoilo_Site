// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from "react-router/dom";
// import { router } from './Routes/Route';
// import { Toaster } from 'react-hot-toast';
// import Loading from './Components/Loading';



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Toaster position="top-right" />
    
//     <RouterProvider 
//       router={router}
//       // fallbackElement={<Loading />}
//      />
//   </StrictMode>,
// )

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Route';
import { Toaster } from 'react-hot-toast';
import Loading from './Components/Loading';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Toaster position="top-right" />
      <RouterProvider router={router} />
      {<Loading />}
    
  </StrictMode>,
)