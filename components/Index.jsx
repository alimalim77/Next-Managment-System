"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <form
            className="border border-secondary rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={submitHandler}
          >
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email_field"
              >
                Email address
              </label>
              <input
                type="email"
                id="email_field"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password_field"
              >
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <Link href="/register">Register</Link>
              </p>
              <button
                type="button"
                className="btn btn-link btn-floating-mx-1"
                onClick={() => signIn("google")}
              >
                <FontAwesomeIcon icon={faGoogle} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
