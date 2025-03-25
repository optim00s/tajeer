import { CircleHelp, Mail, Info } from "lucide-react";
 
export default function InfoSection() {

  const infoData = [
    {
      id: 0,
      title: "FAQ",
      subtitle: "Find your answers",
      icon: CircleHelp,
    },
    {
      id: 1,
      title: "Newsletter",
      subtitle: "Stay updated for our news",
      icon: Mail,
    },
    {
      id: 2,
      title: "Customer Service",
      subtitle: "Contact our 7/24 customer team",
      icon: Info,
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5 px-8 py-6 mb-5">
        {infoData.map((info) => (
          <div key={info.id} className="w-full h-40 border border-tjryellow rounded-lg flex flex-col justify-evenly items-start px-6 py-5 gap-2 transition duration-300 hover:bg-white/10 cursor-pointer">
            <info.icon className="text-tjryellow" />
            <div className="flex flex-col gap-2">
              <div className="text-lg bold">{info.title}</div>
              <div className="text-white/60">{info.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
