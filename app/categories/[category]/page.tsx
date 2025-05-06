'use client'
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CategoryPage() {
    const { category } = useParams();
    const router = useRouter();
    console.log(category);

    if (!category) {
        router.push("/not-found");
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Category: {category}</h1>
            <p className="text-lg">Here you can find recipes related to {category}.</p>
        </div>
    )
}