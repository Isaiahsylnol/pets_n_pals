import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { createCart } from "../../slices/cart";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import { useEffect, useState } from "react";

export async function getStaticProps(context) {
  const sku = context.params.slug;
  const res = await fetch(`http://localhost:3000/api/product/${sku}`);
  const data = await res.json();

  return {
    props: {
      product: data.product,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data.data.map((item) => {
    return {
      params: { slug: item.sku.toString() },
    };
  });
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
}

export default function DynamicPage({ product }) {
  const dispatch = useDispatch();
  let user = {};
  const [cartItems, setCartItems] = useState([]);
  const [rating, setRating] = useState();
  useEffect(() => {
    user = JSON.parse(localStorage.getItem("user"));
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);
  
  function changeRating(newRating, name) {
    setRating(newRating);
  }

  function onAdd(product) {
    let newCartItems;
    const exist = cartItems.find((x) => x.sku === product.sku);
    if (exist) {
      newCartItems = cartItems.map((x) =>
      x.sku === product.sku ? { ...exist, qty: exist.qty + 1 } : x
    )
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      dispatch(
        createCart({
          userId: user.id,
          status: true,
          products: newCartItems,
        })
      );
    } else {
      newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      dispatch(
        createCart({
          userId: user.id,
          status: true,
          products: newCartItems,
        })
      );
    }
  };

  return (
    <div className="mt-12">
      <Header countCartItems={product.length} />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src={`${product.thumbnail}`}
              alt="Product thumbnail"
              width={502}
              height={500}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 inline-flex">
                {product.name}
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
              <br />
              <StarRatings
                rating={parseInt(product.rating)}
                starRatedColor="orange"
                changeRating={changeRating}
                numberOfStars={5}
                starDimension="20px"
                starSpacing="5px"
                name="rating"
              />
              <p className="leading-relaxed">{product.description}</p>
              <hr className="flex items-center border-b-2 border-gray-100 mt-5 mb-5" />
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button
                  onClick={() => onAdd(product)}
                  className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
