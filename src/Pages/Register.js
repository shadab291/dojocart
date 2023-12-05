import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import pp from "../icons/3.jpg"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) {
      // Optionally add additional logic here upon successful login/registration
    }
  }, [user, loading]);

  return (
    <div className="h-screen w-screen flex items-center justify-center" style={{ backgroundImage:`url(${pp})`,backgroundPosition: 'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>
      <div className="bg-gray-300 p-6 rounded-md max-w-md w-full">
        <input
          type="text"
          className="p-2 text-lg mb-4 text-center  rounded-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="p-2 text-lg mb-4 text-center  rounded-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="p-2 text-lg mb-4 text-center rounded-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 ml-2 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white" onClick={register}>
          Register
        </button>
        <button
          className="relative overflow-hidden rounded-lg h-10 mt-1 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-pink-400 before:via-purple-400 before:to-indigo-400"
          onClick={signInWithGoogle}
        ><span class="relative text-white font-bold px-8 py-8 mt-1 "> Register With Google </span></button>
        <div className="mt-4">
          Already have an account ? <Link to="/" className="hover:brightness-110 hover:animate-pulse font-bold  p-3 m-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">Login now</Link>.
        </div>
      </div>
    </div>
  );
}

export default Register;
