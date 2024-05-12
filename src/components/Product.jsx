/* eslint-disable react/prop-types */
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Product = ({ product }) => {

  useEffect (() => {
    AOS.init()
   },[])

  const {addToCart} = useContext(CartContext)

  const { id, image, category, title, price } = product;

  return (
    <div data-aos="fade-up">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        {/* image */}
        <div className="w-full h-full flex justify-center items-center">
          <Link
            to={`/product/${id}`}
            className="w-[200px] mx-auto flex justify-center items-center"
          >
            <img
              className="max-h-[160px] group-hover:scale-110 cursor-pointer transition duration-300"
              src={image}
              alt=""
            />
          </Link>
        </div>

        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id) }>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <AiOutlinePlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 flex justify-center items-center bg-white text-primary drop-shadow-xl"
          >
            <AiOutlineHeart />
          </Link>
        </div>
      </div>

      {/* product display name */}
      <div>
        <div>
          {category}
          <Link to={`product/${id}`}>
            <h1 className="font-semibold mb-1">{title}</h1>
          </Link>
        </div>
        <div className="font-semibold text-lg">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
