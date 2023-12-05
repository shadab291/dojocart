import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./Common/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import MyDashboard from "./Common/mydashboard";
import LoginForm from "./Pages/Loginform";
import Logout from "./Pages/Logout";
import Orders from "./Pages/Orders";
import Sales from "./Pages/Sales";
import Settings from "./Pages/Settings";
import store from "./Store/store";
import Cart from "./Common/Cart";
import Footer from "./Common/Footer";
import Contact from "./Pages/Contact";
import Login from "./Pages/Loginform";
import Register from "../src/Pages/Register";
import Reset from "./Pages/Reset";
import Payment from "./Pages/Payment";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/mydashboard" element={<MyDashboard />} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/cart" element={<Cart />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/reset" element={<Reset />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
