import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from "react-router"; {/* This is from the documention */}

import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from './contexts/categories.context.jsx';
import { CartContextProvider } from './contexts/cart-icon.context.jsx';

import './index.scss'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
