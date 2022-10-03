import Image from "next/image";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemPrice * 0.15;
  const shippingPrice = itemPrice > 2000 ? 0 : 20;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  return (
    <div className="block w-full lg:w-1/2 bg-orange-400 p-12">
      <h1>Cart Items</h1>
   
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.sku} className="bg-slate-300 p-5 m-1 border-solid border-2 border-black">
            
            <div>
            <div className="row flex flex-row p-1">
            <div className="pr-5">
            <Image
                className="object-cover object-center"
                src={require(`/assets/${item.thumbnail}`)}
                alt="ecommerce thumbnail"
                width={133}
                height={133}
              />
            </div>
              <div className="basis-3/4">
                <h2>{item.name}</h2>
                <div className="row p-1">Quantity: {item.qty}</div>
                <div className="row p-1">
              <button onClick={() => onRemove(item)} className="remove p-1 text-lg font-extrabold">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add p-1 w-12 font-bold">
                +
              </button>
            </div>
              </div>
              <div className="text-right font-bold">${item.price}</div>
            </div>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <div className="row mt-11">
              <div>Items Price</div>
              <div className="text-right">${itemPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="">Tax Price</div>
              <div className="text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div>Shipping Price</div>
              <div className="text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div>Total Price</div>
              <div className="text-right font-bold">${totalPrice.toFixed(2)}</div>
            </div>
            <button onClick={() => alert("implement Checkout")}>
              Checkout
            </button>
          </>
        )}
    </div>
  );
}
