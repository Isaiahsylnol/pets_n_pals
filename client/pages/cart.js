import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header.js";
import Basket from "../components/Basket";

const Cart = () => {

  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Shopping cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <div className="w-full flex flex-wrap bg-grey-light justify-center">
          <Basket />
        </div>
      <Footer />
    </div>
  );
};

export default Cart;
