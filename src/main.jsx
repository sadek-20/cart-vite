import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Contacts from './pages/Contacts.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'

const routerProvider = createBrowserRouter([
 {
   path: '/',
   element: <App />,
   children: [
     { path: '/products', element: <Products /> },
     { path: '/cart', element: <Cart /> },
     { path: '/contacts', element: <Contacts /> },
     { path: '/about', element: <About /> },
    ],
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerProvider} />
  </StrictMode>,
)
