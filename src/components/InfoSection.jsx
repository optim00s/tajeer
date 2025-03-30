"use client";
import { CircleHelp, Mail, Info, ChevronDown, Phone, Route, Send } from "lucide-react";
import { useState } from "react";
 
export default function InfoSection() {
  const [choosenMenu, setChoosenMenu] = useState(0);

  const handleChoosenMenu = (menuId) => {
    setChoosenMenu(menuId);
  }

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

  const disclosureData = [
    {
      id: 0,
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and navigating to the 'Order History' section. Alternatively, you can use the tracking number provided in your confirmation email."
    },
    {
      id: 1,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused and unopened items. Please refer to our Returns page for detailed instructions on how to initiate a return."
    },
    {
      id: 2,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping rates and delivery times vary by location. You can check the estimated delivery time during checkout."
    },
    {
      id: 3,
      question: "How can I change or cancel my order?",
      answer: "You can modify or cancel your order within 2 hours of placing it. Please contact our customer service team immediately if you need to make changes after this window."
    },
    {
      id: 4,
      question: "Are there any discounts for bulk orders?",
      answer: "Yes, we offer special pricing for bulk orders. Please contact our sales team at sales@example.com for a customized quote based on your requirements."
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. For orders over $1000, we also offer wire transfer options."
    },
    {
      id: 6,
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7 via live chat on our website, email at support@example.com, or by phone at 1-800-123-4567."
    }
  ];

  return (
    <>
      <div className="flex flex-col gap-5 bg-tjrpale mx-3 rounded-3xl px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5">
          {infoData.map((info) => (
            <div 
              key={info.id} 
              className="w-full h-40 border border-tjryellow rounded-lg flex flex-col justify-evenly items-start px-6 py-5 gap-2 transition duration-300 hover:bg-white/10 cursor-pointer"
              onClick={() => handleChoosenMenu(info.id)}
            >
              <info.icon className="text-tjryellow" />
              <div className="flex flex-col gap-2">
                <div className="text-lg bold">{info.title}</div>
                <div className="text-white/60">{info.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        {choosenMenu === 0 ? (
          <div className="flex flex-col gap-3">
            {disclosureData.map((data) => (
              <details key={data.id} className="group py-5 border-b border-b-white/30 cursor-pointer">
                <summary className="list-none flex items-center justify-between">
                  <span className="text-lg">
                    {data.question}
                  </span>
                  <span>
                    <ChevronDown className="text-tjryellow transform transition-transform duration-300 group-open:rotate-180" />
                  </span>
                </summary>
                <div className="py-5 px-2 text-white/70 bg-white/5 rounded-lg mt-4">
                    {data.answer}
                  </div>
              </details>
            ))}
          </div>
        ) : choosenMenu === 1 ? (
          <div className="flex flex-col gap-5 bg-white/5 py-5 px-3 rounded-lg">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold tracking-wide">
                Subscribe to Our Newsletter
              </div>
              <div className="text-lg">
                Stay updated with the latest news, promotions and product launches.
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex flex-col gap-2 w-full">
                <input 
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 focus:border-tjryellow outline-none rounded-lg"
                />
                <div className="text-sm text-white/70">
                  By subscirbe this newsletter you agree to the <span className="underline">terms and conditions</span> and <span className="underline">privacy policy</span>. Unsubcribe any time at the bottom of our emails.
                </div>
              </div>
              <button className="bg-tjryellow font-medium px-4 py-2 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-rows-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              <div className="text-xl">Contact Information <br /><span className="text-white/70 text-base">Our team is available 24/7 to assist you with any questions or concerns</span></div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-5 bg-white/5 px-2 py-5 rounded-lg">
                  <div className="text-lg">Call Us</div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-tjryellow" />
                    <div className="text-white/70">
                      994-000-00-00 | 1-000-00-0000
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 bg-white/5 px-2 py-5 rounded-lg">
                  <div className="text-lg">Email Us</div>
                  <div className="flex items-center gap-3">
                    <Send className="text-tjryellow" />
                    <div className="text-white/70">
                      support@tajeer.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-xl">Location <br /><span className="text-white/70 text-base">We are opening our first store to soon</span></div>
              <div className="flex flex-col gap-3 bg-white/5 px-2 py-5 rounded-lg">
                <div className="text-lg">Find Us</div>
                <div className="flex flex-col gap-3 h-72">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1620842037576!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    className="outline-none rounded-lg transition-all duration-300"
                  ></iframe>
                  <div className="">
                    <a 
                      href="https://www.google.com/maps/dir//40.7484,-73.9857" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-tjryellow px-4 py-2 rounded-lg"
                    >
                      <Route size={16} />
                      Get Direction
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
