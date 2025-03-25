import { ExternalLink } from "lucide-react";

export default function CategoryCard() {
  const cardData = [
    {
      id: 0,
      imagePath: "url(/images/electronics-category.jpg)",
      title: "Electronics",
      link: "/shop",
    },
    {
      id: 1,
      imagePath: "url(/images/home-category.jpg)",
      title: "Home Gadgets & Furniture",
      link: "/shop",
    },
    {
      id: 2,
      imagePath: "url(/images/kitchen-category.jpg)",
      title: "Kitchen",
      link: "/shop",
    },
    {
      id: 3,
      imagePath: "url(/images/personal-care-category.jpg)",
      title: "Personal Care",
      link: "/shop",
    },
  ];

  return (
    <>
      {cardData.map((card) => (
        <a href={`${card.link}`} key={card.id} className="w-64 h-80 border-2 border-tjrgrey rounded-xl bg-cover bg-center transition-all duration-300 hover:border-tjryellow hover:scale-105" style={{ backgroundImage: `${card.imagePath}` }}>
          <div className="relative w-full h-full flex items-end justify-between gap-5">
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-tjrgrey/80 px-3 py-4 rounded-b-lg">
              <div className="">
                {card.title}
              </div>
              <div>
                <ExternalLink size={16} />
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
