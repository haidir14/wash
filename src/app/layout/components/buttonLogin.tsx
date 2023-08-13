"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Icon from "./icon";
import Image from "next/image";

const ButtonLogin = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        <div className="form-control px-5">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm w-full md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                src="/user.png"
                width={50}
                height={50}
                alt="user picture"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">{session.user.name}</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={() => signOut()}>Logout</button>
            </li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <button onClick={() => signIn()} className="btn btn-neutral">
      {Icon(
        "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      )}
      Sing In
    </button>
  );
};

export default ButtonLogin;
