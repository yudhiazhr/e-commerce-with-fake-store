import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {

  useEffect (() => {
    AOS.init()
   },[])

  // get products from product context
  const { products, isLoading } = useContext(ProductContext);

  // filtering only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  const Skeleton= () => (
    <div data-aos="fade-in">
      <div className="bg-slate-200 h-[300px] w-[262px] mb-4">
        <img
          src="https://untirta.ac.id/wp-content/uploads/2023/08/placeholder-49.png"
          className="h-[300px]"
          alt=""
        />
      </div>
      <div className=" h-4 w-1/2 bg-slate-100 mb-2"></div>
      <div className=" h-4 w-full bg-slate-100 mb-2"></div>
      <div className=" h-4 w-full bg-slate-100 mb-2"></div>
      <div className=" h-4 w-10/12 bg-slate-100 mb-2"></div>
      <div className=" h-4 w-1/3 bg-slate-100 mb-2"></div>
    </div>
  );
  
  const SkeletonList = () => {
    const skeletonItems = Array.from({ length: 10 }, (_, index) => index + 1);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm mx-auto md:max-w-none md-mx-0">
        {skeletonItems.map((item) => (
          <Skeleton key={item} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          {isLoading ? (
            <SkeletonList />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm mx-auto  md:max-w-none md-mx-0">
              {filteredProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
