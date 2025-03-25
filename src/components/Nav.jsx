"use client";
import { Search, ShoppingCart, UserRound, MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-tjrgrey/60 backdrop-blur-lg z-50">
        <nav className="flex items-center justify-between px-3 py-5">
          {isMobile ? 
            <div className="flex items-center justify-between w-full">
              <div className="tracking-wider font-bold text-lg">
                <a href="">TAJEER</a>
              </div>
              <div>
                <MenuIcon/>
              </div>
            </div>
            :
            <>
              <div className="flex items-center gap-10">
                <div className="tracking-wider font-bold text-lg">
                  <a href="">TAJEER</a>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <a href="">New</a>
                  </div>
                  <div>
                    <a href="">Tajeer+</a>
                  </div>
                  <div>
                    <a href="">Order Tracking</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-around gap-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search products..."
                      className="bg-zinc-800/60 px-8 py-1 rounded-lg outline-none text-sm w-80"
                    />
                    <Search className="absolute top-1/4 left-2" size={14}  />
                  </div>
                  <div>
                    <a href="">
                      <UserRound />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <ShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </>
            }
        </nav>
      </header>
    </>
  );
}
