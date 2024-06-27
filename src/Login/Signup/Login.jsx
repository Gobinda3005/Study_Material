import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { logoAmplify } from "ionicons/icons";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css"; // Ensure you have this line if Tailwind is properly set up

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login clicked");
  };

  const handleCreateAccount = () => {
    // Handle create account logic here
    console.log("Create Account clicked");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center w-full max-w-7xl p-6">
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="overflow-hidden w-full md:w-1/2 m-4 flex justify-center bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row items-center shadow-md w-full h-full">
              <div className="w-full md:w-1/2 overflow-hidden p-4">
                <div className="flex flex-col items-center justify-center text-stone-400">
                  <a className="flex title-font font-medium flex items-center text-gray-400 mb-4 md:mb-0">
                    {/* <a href='https://notionpress.com/author/321668'><span className='ml-3 text-xl'>BFB</span></a> */}
                    <Link className="ml-3 text-xl" to="/Home">
                      <span className="ml-3 text-xl text-red-500 shadow-xl">
                        BFW Study
                      </span>
                    </Link>
                  </a>
                  <div className="flex flex-col w-full">
                    <div className="m-2">EMAIL</div>
                    <input
                      className="border-b m-2 bg-gray-50 focus:outline-none w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="m-2">PASSWORD</div>
                    <input
                      className="border-b m-2 bg-gray-50 focus:outline-none w-full"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex items-center m-2">
                      <input
                        className="border-b border-stone-400"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <div className="ml-1">Remember Me</div>
                    </div>
                    <div className="flex m-2">
                      <button
                        className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-2 rounded-2xl text-white font-medium w-full"
                        onClick={handleLogin}
                      >
                        LOGIN
                      </button>
                      <button
                        className="text-transparent bg-clip-text bg-gradient-to-l from-fuchsia-600 to-cyan-400 font-bold ml-2 border-2 rounded-2xl px-6 border-cyan-400 w-full"
                        onClick={handleCreateAccount}
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                    <br />
                    <div className="m-2 text-center">
                      Forgotten your login details?
                    </div>
                    <div className="font-medium ml-2 text-center">
                      Get Help Signing In
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 overflow-hidden">
                <img
                  src="public\View 3.jpg"
                  alt="Login Illustration"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
