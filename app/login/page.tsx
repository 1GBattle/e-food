"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("form submitted");
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-center h-full w-screen md:outline ">
        <div className="h-3/5 md:h-1/2 md:w-2/5 flex flex-col justify-center items-center bg-gradient-to-bl gap-8 from-green-50 to-blue-100 md:outline-gray-200 md:rounded-md md:shadow-xl">
          <Image
            className="rounded-full overflow-hidden"
            src={"/assets/logos/main_logo.png"}
            alt="logo"
            width={260}
            height={260}
            priority={true}
          />
          <div className="flex flex-col justify-center items-center bg-gradient-to-bl gap-8">
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="-mt-6 text-lg">Please log in to your account.</p>
          </div>
        </div>
        <form
          className="h-2/5 md:h-1/2 md:w-2/5 shadow-sm p-4 flex flex-col items-center justify-center gap-12 bg-white rounded-md  md:outline-gray-200 md:rounded-md md:shadow-xl"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="w-full flex flex-col justify-center items-center mt-8 md:w-full">
            <input
              className="bg-gray-50 w-[90%] h-10 p-2 rounded-sm shadow-xs outline outline-gray-200 md:w-full"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div></div>
            <input
              className="bg-gray-50 w-[90%] md:w-full h-10 p-2 rounded-sm md:rounded-none shadow-xs outline outline-gray-200"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-end items-end">
              <p className="text-right text-sm -mt-1">
                No account? Sign up{" "}
                <span className="text-blue-400 underline">
                  <Link href={"/signup"}>here</Link>
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <button
              className="bg-gradient-to-br from-sky-100 to-sky-300 hover:from-sky-200 hover:to-sky-400 active:from-sky-200 active:to-sky-400 cursor-pointer w-2/3 p-2 text-xl font-bold rounded-md"
              type={"submit"}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
