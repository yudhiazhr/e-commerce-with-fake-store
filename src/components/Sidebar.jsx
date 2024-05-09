import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  return (
    <>
      <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}>
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
          {/* Icon button back */}
          <button onClick={handleClose}><IoMdArrowForward className="text-2xl"/></button>
        </div>
      </div>
    </>
  )
};

export default Sidebar;
