/* eslint-disable react/prop-types */
import { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {

  const {removeFromCart, increasAmount, decreaseAmount} = useContext(CartContext)

  // destructure item
  const { id, title, image, price, amount } = item;

  return (
    <>
      <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
        <div className="w-full min-h-[150px] flex items-center gap-x-4">
          {/* image */}
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={image} alt="" />
          </Link>

          <div className="w-full flex flex-col">
            {/* title */}
            <div className="flex justify-between mb-2">
              <Link
                to={`/product/${id}`}
                className="text-sm uppercase font-medium max-w-[240px] hover:underline"
              >
                {title}
              </Link>

              {/* remove icon */}
              <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
                <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
              </div>
            </div>

            <div className="flex gap-x-2 h-[36px]">
              {/* QTY */}
              <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
                <div onClick={() => decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer">
                  <IoMdRemove />
                </div>
                <div className="h-full  flex justify-center items-center px-2">
                  {amount}
                </div>
                <div onClick={() => increasAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer">
                  <IoMdAdd />
                </div>
              </div>

              {/* item price */}
              <div className="flex-1 flex items-center justify-around">
                $ {price}
              </div>

              {/* final price */}
              <div className="flex-1 flex justify-end items-center font-medium">{`$ ${parseFloat(
                price * amount
              ).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
