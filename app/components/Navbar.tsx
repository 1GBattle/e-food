"use client";
import { useUserStore } from "@/app/state/store";

export default function Navbar() {
  const user = useUserStore((state) => state.user);
  return (
    <div>
      <div className="flex justify-between px-4 py-2">
        <h1 className="text-2xl">Welcome {user?.username}!</h1>
      </div>

      <div className="m-4">
        <input
          className="p-1 h-12 bg-slate-50 w-full outline-none rounded-xl text-lg shadow-sm"
          placeholder="Search Recipes...."
        />
      </div>
    </div>
  );
}
