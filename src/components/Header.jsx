import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <>
      <header className="fixed bg-white border-b top-0 left-0 w-full z-10">
        <div className="mx:0 sm:mx-12 lg:mx-32">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a
                href="/"
                className="font-bold text-xl text-primary block py-6 lg:text-2xl"
              >
                FakeFakeFake
              </a>
            </div>
            <div className="flex items-center px-4">
              <nav>
                <ul className="block">
                  <li>
                    <button className="text-3xl " onClick={() => setIsOpen(!isOpen)}>
                      <AiOutlineShopping />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/*  */}
    </>
  );
};

export default Header;
