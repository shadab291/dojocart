import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import loginbg from "../icons/loginbg.png"
import lgin from "../icons/lgin.png"

function Logout() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return; // Don't perform navigation here
    fetchUserName(
      [user, loading]
    );
  });

  const handleLogout = () => {
    logout();
    // Perform any additional logout-related actions if needed
  };

  return (
    <div className="h-screen w-screen flex items-center pr-6 justify-center" style={{ backgroundImage:`url(${loginbg})`,backgroundPosition: 'center',  backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>
      <div className="bg-gray-300 p-6 rounded-md max-w-md w-80 mr-1">
        <div className="flex flex-col text-center text-md text-black p-6 rounded-md  hover:text-grey-400">
          <img src={lgin} alt="login"/>
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div>
        </div>
        <button className="hover:brightness-110 hover:animate-pulse font-bold mt-3 py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white" onClick={handleLogout}>
          <Link to="/">Logout</Link>
        </button>
      </div>
    </div>
  );
}

export default Logout;
