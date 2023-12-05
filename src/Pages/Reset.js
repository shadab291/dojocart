import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
import pp from "../icons/2.png"

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) window.location.href = "/logout"; // Redirect using window.location
  }, [user, loading]);

  const handleReset = () => {
    sendPasswordReset(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage:`url(${pp})`,backgroundPosition: 'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <input
          type="text"
          className="p-2 text-center rounded-full text-lg mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white w-full md:w-auto transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleReset}
        >
          Send password reset email
        </button>
        <div className="mt-4 text-center">
          Don't have an account?{" "}
          <br/>
          <div className="mt-4">
          <Link
            className="font-bold p-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white"
            to="/register"
          >
            Register now
          </Link>
          .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
