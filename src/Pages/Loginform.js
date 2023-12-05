import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import pp from "../icons/1.png"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) window.location.href = "/home"; // Redirect using window.location
  }, [user, loading]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage:`url(${pp})`,backgroundPosition: 'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <input
          type="text"
          className="w-full px-4 py-2 text-lg mb-4 text-center rounded-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="w-full px-4 py-2 text-lg mb-4 text-center rounded-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <button
            className="w-full md:w-auto mb-2 md:mb-0 md:mr-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 px-6 rounded-full font-bold transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button
            className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 px-6 rounded-full font-bold transition duration-300 ease-in-out transform hover:scale-105"
            onClick={signInWithGoogle}
          >
            Login with Google
          </button>
        </div>
        <div className="mb-4 text-center">
          <Link
            className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 px-6 rounded-full font-bold transition duration-300 ease-in-out transform hover:scale-105"
            to="/reset"
          >
            Forgot Password
          </Link>
        </div>
        <div className="text-center">
          Don't have an account?{" "}
          <div className="mt-4">
          <Link
            className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 px-6 rounded-full font-bold transition duration-300 ease-in-out transform hover:scale-105"
            to="/register"
          >
            Register now
          </Link>
          </div>
          .
        </div>
      </div>
    </div>
  );
}

export default Login;
