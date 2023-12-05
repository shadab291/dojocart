import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import Hamburger from "hamburger-react";
import Notification from "./Notification"; // Import Notification component
import SearchButton from "./Searchbar";
import { useSelector } from "react-redux";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategoryIcon from "@mui/icons-material/Category";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { motion } from "framer-motion"; // Import motion
import bg from "../icons/pngwing.com.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import { selectItemCount, selectNotificationCount } from "../Store/cartSlice"; // Import selectors

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const itemCount = useSelector(selectItemCount);
  const notificationCount = useSelector(selectNotificationCount);

  return (
    <div>
      <header
        className="bg-blue-00 hover:text-gray-900 rounded-full body-font"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto mr-4 flex flex-wrap text-black  flex-col md:flex-row items-center">
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center">
              <StorefrontIcon className="ml-3" />
              <p className="text-xl font-serif ml-2">dojoCart</p>
            </Link>
          </div>
          <nav className="md:ml-auto flex items-center text-base justify-center">
            <Link to="/login" className="ml-3">
              <LoginIcon />
            </Link>
            <Link to="/cart" className="ml-3">
              <IconButton color="inherit">
                <Badge badgeContent={itemCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/notifications" className="">
              <IconButton color="inherit">
                <Badge badgeContent={notificationCount} color="secondary">
                  <Notification />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/search">
              <SearchButton />
            </Link>
            <div className="">
              <Hamburger
                toggled={isDrawerOpen}
                toggle={toggleDrawer}
                size={20}
              />
            </div>
          </nav>
        </div>
      </header>
      {isDrawerOpen && (
        <div
          className="fixed w-screen h-screen bg-black opacity-50 z-50"
          onClick={closeDrawer}
        />
      )}
      <Drawer
        className="flex-shrink-0"
        variant="persistent"
        anchor="right"
        open={isDrawerOpen}
      >
        <motion.div className="bg-cover bg-blue-400 bg-center h-full flex flex-col p-6">
          <h5 className="text-2xl font-bold text-white mb-6">Menu</h5>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-lg text-white hover:text-black ">
              <HomeIcon className="mb-1 mr-2" />
              Home
            </Link>

            <Link
              to="/mydashboard"
              className="text-lg text-white hover:text-black"
            >
              <DashboardIcon className="mb-1 mr-2" />
              Dashboard
            </Link>
            <Link
              to="/products"
              className="text-lg text-white hover:text-black"
            >
              <CategoryIcon className="mb-1 mr-2" />
              Products
            </Link>
            <Link to="/sales" className="text-lg text-white hover:text-black ">
              <MonetizationOnIcon className="mb-1 mr-2" />
              Sales
            </Link>

            <Link to="/about" className="text-lg text-white hover:text-black ">
              <InfoIcon className="mb-1 mr-2" />
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg text-white hover:text-black "
            >
              <ContactsIcon className="mb-1 mr-2" />
              Contact
            </Link>
          </div>
          <hr className="my-8 border-t border-gray-300" />
          <div className="mt-auto">
            <Link
              to="/settings"
              className="text-lg text-white hover:text-black block mb-4"
            >
              <SettingsIcon className="mb-1 mr-2" />
              Settings
            </Link>
            <Link
              to="/logout"
              className="text-lg text-white hover:text-black block"
            >
              <LogoutIcon className="mb-1 mr-2" />
              Logout
            </Link>
          </div>
        </motion.div>
      </Drawer>
      <hr className="border-1 border-black shadow" />
    </div>
  );
}
