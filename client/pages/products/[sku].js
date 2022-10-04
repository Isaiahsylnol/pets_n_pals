import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { createCart } from "../../slices/cart";
import { useEffect, useState } from "react";

const Details = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const query = router.query;
  const item = query;
  let user = {};

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);

  useEffect(()=>{
    user = JSON.parse(localStorage.getItem("user"))
  },[])
 

    // dispatch(createCart({"userId" : user.id,
    // "status" : true,
    // "quantity" : 1,
    // "total" : 224.99,
    // "products": [{
    //     "name": item.name,
    //     "sku": item.sku
    // }]})) 

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.sku === product.sku);
        console.log("EXIST: ", exist)
        if(exist) {
            setCartItems(
                cartItems.map((x) =>
                  x.sku === product.sku ? { ...exist, qty: exist.qty + 1 } : x
                )
              );
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } else {
            const newCartItems = [...cartItems, { ...product, qty: 1 }];
            console.log("New Items: ", newCartItems)
            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        }
    }

    useEffect(() => {
        setCartItems(localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []);
    },[]);

  return (
    <div className="mt-12">
      <Header countCartItems={cartItems.length} />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src={require(`/assets/${item.thumbnail}`)}
              alt="Product thumbnail"
              width={502}
              height={500}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 inline-flex">
                {item.name}
              </h1>
              <button className="rounded-full w-7 h-7 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
              <p className="leading-relaxed">{item.description}</p>
              <hr className="flex items-center border-b-2 border-gray-100 mt-5 mb-5" />
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${item.price}
                </span>
                <button onClick={() => onAdd(item)} className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Details;
