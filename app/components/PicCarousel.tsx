"use client";
import Carousel from "react-multi-carousel";
import RecipeCard from "@/app/components/RecipeCard";

export default function PicCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const items = [
    {
      picUrl: "/assets/food-images/pastas/chicken-seafood-pasta.png",
      title: "Chicken Seafood Pasta",
      link: "/recipes/chicken-seafood-pasta",
    },
    {
      picUrl: "/assets/food-images/pastas/red-sauce-pasta.png",
      title: "Red Sauce Pasta",
      link: "/recipes/red-sauce-pasta",
    },
    {
      picUrl: "/assets/food-images/pastas/creamy-garlic.png",
      title: "Creamy Garlic Pasta",
      link: "/recipes/creamy-garlic-pasta",
    },
  ];

  return (
    <Carousel
      className="px-2 py-4 overflow-x-auto"
      responsive={responsive}
      ssr={true}
      swipeable={true}
      transitionDuration={500}
    >
      <div className="flex flex-row gap-4">
        {items.map((item, index) => (
          <RecipeCard
            key={index}
            title={item.title}
            picUrl={item.picUrl}
            link={item.link}
          />
        ))}
      </div>
    </Carousel>
  );
}
