"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("form submitted");
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-center h-full w-screen md:outline ">
        <div className="h-1/2 md:h-1/2 md:w-2/5 flex flex-col justify-center items-center bg-gradient-to-bl gap-6 from-green-50 to-blue-100 md:outline-gray-200 md:rounded-md md:shadow-xl">
          <Image
            className="rounded-full overflow-hidden"
            src={"/assets/logos/main_logo.png"}
            alt="logo"
            width={240}
            height={240}
            priority={true}
          />
          <div className="flex flex-col justify-center items-center bg-gradient-to-bl gap-8">
            <h1 className="text-3xl font-semibold">Sign Up!</h1>
            <p className="-mt-6 text-lg text-center">
              Create an account to unlock your inner-chef for FREE!
            </p>
          </div>
        </div>
        <form
          className="h-1/2 md:h-1/2 md:w-2/5 shadow-sm p-4 flex flex-col items-center justify-evenly gap-8 bg-white rounded-md  md:outline-gray-200 md:rounded-md md:shadow-xl"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="w-full flex flex-col justify-evenly items-center mt-2 md:w-full">
            <input
              className="bg-gray-50 w-[90%] h-10 p-2 rounded-sm shadow-xs outline outline-gray-200 md:w-full"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center md:w-full">
            <input
              className="bg-gray-50 w-[90%] h-10 p-2 rounded-sm shadow-xs outline outline-gray-200 md:w-full"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col justify-center items-center md:w-full">
            <input
              className="bg-gray-50 w-[90%] h-10 p-2 rounded-sm shadow-xs outline outline-gray-200 md:w-full"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" w-full">
            <div className="flex items-center justify-center">
              <input
                className="bg-gray-50 w-[90%] md:w-full h-10 p-2 rounded-sm md:rounded-none shadow-xs outline outline-gray-200"
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>

            <div className="flex justify-end items-end">
              <p className="text-sm text-right -mt-.5 ">
                Already have an account, log in{" "}
                <span className="text-blue-500 underline">
                  <Link href={"/login"}>here</Link>
                </span>
                ?
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <button
              className="bg-gradient-to-br from-sky-100 to-sky-300 hover:from-sky-200 hover:to-sky-400 active:from-sky-200 active:to-sky-400 cursor-pointer w-2/3 p-2 text-xl font-bold rounded-md"
              type={"submit"}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
