import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, totalPrice, itemAmount } = useContext(CartContext);

  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Shopping Bag ({itemAmount})
          </div>
          {/* Icon button back */}
          <button onClick={handleClose}>
            <IoMdArrowForward className="text-2xl" />
          </button>
        </div>

        {/* display items in cart */}
        <div className=" flex flex-col gap-y-2 h-[66dvh] overflow-y-auto overflow-x-hidden ">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>

        <div>
          <div className="py-4 gap-y-3 mt-4 flex w-full justify-between items-center">
            {/* total */}
            <div className="uppercast font-semibold">
              <span className="mr-2">Total:</span>$
              {parseFloat(totalPrice).toFixed(2)}
            </div>
            {/* clear cart icon */}
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash2 />
            </div>
          </div>
          <Link
            to={"/"}
            className=" w-full flex items-center justify-center p-4 bg-primary text-white font-semibold hover:bg-gray-700 transition duration-300"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
