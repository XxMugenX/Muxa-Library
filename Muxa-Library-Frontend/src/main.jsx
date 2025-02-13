import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import AddBooks from './pages/AddBooks.jsx'
import NotFoundPAge from './pages/NotFoundPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 


const router = createBrowserRouter( [{
  path: '/',
  element: <Homepage />,
  errorElement: <NotFoundPAge/>
},
  {
    path: '/AddBooks',
    element: <AddBooks/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
