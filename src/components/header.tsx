import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Logo } from "@/components/logo";
import { navBarItem } from '@/shared'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <Logo />
      </div>
      <nav
        ref={navbarRef}
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        {navBarItem.map( navOptions => (
            <a key={navOptions.item} href={navOptions.link} className="">{navOptions.item}</a>
        ))}
       
      </nav>
      <button onClick={toggleMenu} className="xl:hidden text-2xl p-2">
        {showMenu ? <X /> : <Menu />}
      </button>
    </header>
  );
};