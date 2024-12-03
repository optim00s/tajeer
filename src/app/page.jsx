import { ExternalLink, CandyCane, CircleHelp, Info, Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 border-b border-b-white backdrop-blur-md">
        <nav className="flex items-center justify-between px-2 py-3">
          <div className="tracking-wide text-lg">Tajeer</div>
          <div className="flex items-center gap-8">
            <div>Account</div>
            <div>Let's shopping</div>
          </div>
        </nav>
      </header>
      <main className="px-3">
        <div className="flex flex-col items-center justify-center gap-7 min-h-screen">
          <div className="tracking-wider text-5xl">Tajeer</div>
          <div className="text-2xl text-center">The perfect shopping expreince for you</div>
        </div>
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex justify-center items-center gap-2">
            <div className="text-xl">
              Now trending - <a href="/shop" className="hover:underline">New Year Sales</a>
            </div>
            <CandyCane size={16}/>
          </div> 

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 mb-5">
            <div className="w-56 h-80 flex items-end border border-white mx-auto bg-cover bg-center" style={{ backgroundImage: 'url(/images/electronics-category.jpg)' }}>
              <div className="w-full flex justify-between items-center gap-2 border-t border-t-white p-2">
                <div>Electronics</div>
                <a href="" className="flex items-center justify-center py-5 transition duration-300 rounded-md hover:bg-white/20 w-10 h-3">
                 <ExternalLink size={16}/>  
                </a>   
              </div>
            </div>
            <div className="w-56 h-80 flex items-end border border-white mx-auto bg-cover bg-center" style={{ backgroundImage: 'url(/images/home-category.jpg)'}}>
              <div className="w-full flex justify-between items-center gap-2 border-t border-t-white p-2">
                <div>Home, Sweet Home!</div>
                <a href="" className="flex items-center justify-center py-5 transition duration-300 rounded-md hover:bg-white/20 w-10 h-3">
                 <ExternalLink size={16}/>
                </a>   
              </div>
            </div>
            <div className="w-56 h-80 flex items-end border border-white mx-auto bg-cover bg-center" style={{ backgroundImage: 'url(/images/kitchen-category.jpg)'}}>
              <div className="w-full flex justify-between items-center gap-2 border-t border-t-white p-2">
                <div>Kitchen</div>
                <a href="" className="flex items-center justify-center py-5 transition duration-300 rounded-md hover:bg-white/20 w-10 h-3">
                 <ExternalLink size={16}/>
                </a>   
              </div>
            </div>
            <div className="w-56 h-80 flex items-end border border-white mx-auto bg-cover bg-center" style={{ backgroundImage: 'url(/images/personal-care-category.jpg)'}}>
              <div className="w-full flex justify-between items-center gap-2 border-t border-t-white p-2">
                <div>Personal Care</div>
                <a href="" className="flex items-center justify-center py-5 transition duration-300 rounded-md hover:bg-white/20 w-10 h-3">
                 <ExternalLink size={16}/>
                </a>   
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 px-8 mb-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="text-xl w-full md:w-1/2">You order, we deliver <br />Gently handle delivery process not a like others</div>
              <div className="w-full md:w-2/4 h-72 border border-white bg-cover bg-center" style={{ backgroundImage : 'url(/images/you-order-we-deliver.jpg)'}}></div>
            </div>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-5">
              <div className="text-xl w-full md:w-1/2">Global Shipping <br />We take care of all taxes and customs processing for you</div>
              <div className="w-full md:w-2/4 h-72 border border-white bg-cover bg-center" style={{ backgroundImage : 'url(/images/global-shipping.jpg)'}}></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <div className="text-xl w-full md:w-1/2">Tajeer Card<br />This exclusive card will make you feel like an ancient Silk Road merchant</div>
              <div className="w-full md:w-2/4 h-72 border border-white bg-cover bg-center" style={{ backgroundImage : 'url(/images/tajeer-card.jpg)'}}></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-8 mb-5">
            <div className="w-72 h-32 border border-white flex flex-col justify-evenly items-start px-3 py-2 transition duration-300 hover:bg-white/10 cursor-pointer">              
              <CircleHelp/>
              <div className="text-lg bold">FAQ</div>
              <div className="text-lg">Find your answers</div>
            </div>  
            <div className="w-72 h-32 border border-white flex flex-col justify-evenly items-start px-3 py-2 transition duration-300 hover:bg-white/10 cursor-pointer">
              <Mail/>
              <div className="text-lg bold">Newsletter</div>
              <div className="text-lg">Stay updated for our news</div>
            </div>  
            <div className="w-72 h-32 border border-white flex flex-col justify-evenly items-start px-3 py-2 transition duration-300 hover:bg-white/10 cursor-pointer">
              <Info/>
              <div className="text-lg bold">Customer Service</div>
              <div className="text-lg">Contact our 7/24 customer team</div>
            </div>  
          </div>
        </div>
      </main>
      <footer className="flex flex-col items-center gap-10 border-t border-t-white py-5">
        <div className="w-full px-10 md:w-2/3 md:px-0 flex flex-col gap-6">
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-5">
            <div className="flex flex-col gap-2">
              <div className="font-bold">About Tajeer</div>
              <ul>
                <li>About us</li>
                <li>Tajeer Partners</li>
                <li>Careers</li>
                <li></li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold">Customer Service</div>
              <ul>
                <li>Contact us</li>
                <li>Locations</li>
                <li>FAQ</li>
                <li>Global Shipping</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold">Discount and Membership</div>
              <ul>
                <li>Affiliate Program</li>
                <li>Tajeer Black</li>
                <li>Student Discount</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bold">Follow Us</div>
            <div className="flex justify-between gap-20">
              <Instagram className="w-20" />
              <Facebook className="w-20" />
              <Twitter className="w-20" />
              <Linkedin className="w-20" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="underline">Privacy Policy</div>
            <div className="underline">Terms and Conditions</div>
          </div>
        </div>
        <div className="text-lg text-white/30">Tajeer International Corp. &copy; 2024</div>
      </footer>
    </div>
  );
}
