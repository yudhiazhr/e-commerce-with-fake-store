import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShopping } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)

  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive (false)
    })
  })

  return (
    <>
      <header className={`${isActive ? 'bg-white shadow-md' : 'bg-transparent'} fixed  top-0 left-0 w-full z-10`}>
        <div className="mx:0 sm:mx-12 lg:mx-32">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link to={'/'}
                className="italic font-bold text-xl text-primary block py-6 lg:text-2xl"
              >
                FakeFakeFake
              </Link>
            </div>
            <div className="flex items-center px-4">
              <nav>
                <ul className="block">
                  <li>
                    <button className="text-3xl " onClick={() => setIsOpen(!isOpen)}>
                      <AiOutlineShopping />
                      <div className="bg-red-500 absolute right-1 top-4 text-base w-[24px] h-[24px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
