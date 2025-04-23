export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between px-4 py-2">
        <h1 className="text-2xl">Welcome username!</h1>
        image
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
