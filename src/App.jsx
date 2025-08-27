import { Routes, Route} from "react-router";
import Home from "./assets/routes/home/home";
import Navigation from "./assets/routes/navigation/navigation";
import Authentication from "./assets/routes/authentication/authentication";
import Shop from "./assets/routes/shop/shop.route";
import CheckOutRoute from "./assets/routes/checkout/checkout.components.jsx";


const App = () => { 

  return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/> 
      <Route path="auth" element={<Authentication/>}/>
      <Route path="checkout" element={<CheckOutRoute/>}/>
    </Route>
  </Routes>
  
  )
}

export default App;
