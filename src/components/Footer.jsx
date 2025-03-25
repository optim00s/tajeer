import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const footerData = [
    {
      id: 0,
      title: "About Tajeer",
      subtitle: ["About us", "Tajeer Partners", "Careers"],
    },
    {
      id: 1,
      title: "Customer Service",
      subtitle: ["Contact Us", "Locations", "FAQ", "Global Shipping"],
    },
    {
      id: 2,
      title: "Discount and Membership",
      subtitle: ["Affiliate Program", "Tajeer+", "Student Discounts"],
    },
  ];

  return (
    <>
      <footer className="flex flex-col min-h-[300px] items-center justify-between bg-black/20 py-5 px-10 gap-5">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-60">
          <div className="tracking-wider font-bold text-lg">
            TAJEER
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-start justify-between gap-5">
              {footerData.map((footer) => (
                <div key={footer.id} className="flex flex-col gap-2">
                  <div className="font-bold">{footer.title}</div>
                  <ul className="flex flex-col gap-2">
                    {footer.subtitle.map((item, index) => (
                      <a href="/" className="transition-all duration-300 hover:text-tjryellow" key={index}>{item}</a>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex items-start gap-10">
          <Instagram />
          <Facebook />
          <Twitter />
        </div>	
        <div className=" text-white/30">
          Tajeer &copy; {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
