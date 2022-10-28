import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import getStripe from "../lib/getStripe";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [purchaseSuccess, setSuccess] = useState();
  const itemPrice = cartItems?.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemPrice * 0.15;
  const shippingPrice = itemPrice > 2000 ? 0 : 20;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cartItems')));
  }, []);
  
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
  });
  if(response.statusCode === 500) return;

  const data = await response.json();

  toast.loading('Redirecting')
console.log(data)
  //stripe.redirectToCheckout({ sessionId: data.id });
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.sku === product.sku);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.sku === product.sku ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }  
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.sku === product.sku);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.sku !== product.sku);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.sku === product.sku ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };

  const onDelete = (product) => {
    const newCartItems = cartItems.filter(
      (item) => !(item.sku === product.sku)
    );
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  return (
    <div className={styles.main}>
      <div className="block w-full lg:w-1/2 bg-orange-400 p-12">
      <Toaster />
        <div className="mb-4">
          <h1>Your Cart</h1>
        </div>
        {cartItems?.length === 0 && (
          <div>
            Cart is empty{" "}
            <Link href="/shop">
              <button className="text-white block bg-orange-700 border-0 py-2 px-6 mt-4 focus:outline-none hover:bg-gray-900 rounded">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <Link href="/shop">
          <div>
            {cartItems?.length ? (
              <button className="text-black  float-right focus:outline-none hover:text-white rounded">
                Add More Items
              </button>
            ) : null}
          </div>
        </Link>
        {cartItems?.map((item) => (
          <div key={item.sku} className="bg-slate-300 p-5 m-1 mt-12">
            <div>
              <div className="row flex flex-row p-1">
                <div className="pr-5">
                  <Image
                    className="object-cover object-center"
                    src={`${item.thumbnail}`}
                    alt="ecommerce thumbnail"
                    width={133}
                    height={133}
                  />
                </div>
                <div className="basis-3/4">
                  <h2>{item.name}</h2>
                  <div className="row p-1">Quantity: {item.qty}</div>
                  <div className="row p-1">
                    <button
                      onClick={() => onRemove(item)}
                      className="remove p-1 text-lg font-extrabold"
                    >
                      -
                    </button>
                    <button
                      onClick={() => onAdd(item)}
                      className="add p-1 w-12 font-bold"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onDelete(item)}
                      className="remove   text-lg font-extrabold float-right"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-right font-bold">${item.price}</div>
              </div>
            </div>
          </div>
        ))}
        {cartItems?.length !== 0 && (
          <>
            <div className="row mt-11">
              <div>Items Price</div>
              <div className="text-right">{itemPrice ? `$${itemPrice.toFixed(2)}` : null}</div>
            </div>
            <div className="row">
              <div className="">Tax Price</div>
              <div className="text-right">{itemPrice ? `$${taxPrice.toFixed(2)}` : null}</div>
            </div>
            <div className="row">
              <div>Shipping Price</div>
              <div className="text-right">{itemPrice ? `$${shippingPrice.toFixed(2)}` : null}</div>
            </div>
            <div className="row">
              <div>Total Price</div>
              <div className="text-right font-bold">
                {totalPrice ? `$${totalPrice.toFixed(2)}` : null}
              </div>
            </div>
            {
             cartItems ? <button
             type="submit"
             onClick={handleCheckout}
             className="mt-4 bg-blue-500 text-white py-2 w-1/4 rounded-lg"
           >
             Checkout
           </button> : <></>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
