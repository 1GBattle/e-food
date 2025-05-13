import { CiBowlNoodles, CiClock2, CiIceCream } from "react-icons/ci";
import { MdOutlineDinnerDining, MdOutlineEggAlt } from "react-icons/md";
import { LuSandwich } from "react-icons/lu";
import { GiMartini } from "react-icons/gi";
import Link from "next/link";

export default function CategorySelector() {
  const categories = [
    {
      title: "Quick",
      icon: <CiClock2 className="h-7 w-7" />,
    },
    {
      title: "Breakfast",
      icon: <MdOutlineEggAlt className="h-8 w-8" />,
    },
    {
      title: "Dinner",
      icon: <MdOutlineDinnerDining className="h-8 w-8" />,
    },
    {
      title: "Sandwich",
      icon: <LuSandwich className="h-8 w-8" />,
    },
    {
      title: "Pasta",
      icon: <CiBowlNoodles className="h-8 w-8" />,
    },
    {
      title: "Adult",
      icon: <GiMartini className="h-8 w-8" />,
    },
    {
      title: "Desert",
      icon: <CiIceCream className="h-8 w-8" />,
    },
  ];

  return (
    <div className="h-40 p-2 grid grid-cols-4 grid-rows-2 gap-4 shadow-lg rounded-lg bg-slate-50">
      {categories.map((category) => (
        <div
          className="flex flex-col justify-center items-center"
          key={category.title}
        >
          <Link
            className="flex flex-col justify-center items-center"
            href={`/categories/${category.title.toLowerCase()}`}
          >
            {category.icon}
            <p>{category.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
