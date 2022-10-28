import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from '../../styles/Home.module.css'
import Image from "next/image";
import { useEffect, useState } from "react";

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3000/api/article/${id}`);
  const data = await res.json();

  return {
    props: {
     article: data.article,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/articles");
  const data = await res.json();

  const paths = data.data.map((article) => {
    return {
      params: { id: article.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default function DynamicArticle({ article }) {
  let user = {};
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    user = JSON.parse(localStorage.getItem("user"));
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []); 

  return (
    <div>
        <Header countCartItems={cartItems.length} />
        <main className={styles.main}>
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto">
          <div className="justify-center mx-auto flex flex-wrap">
            {/* <Image
              src={`${article.thumbnail}`}
              alt="Product thumbnail"
              width={502}
              height={500}
            /> */}
            <div className="lg:w-1/2 w-full lg:py-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-6 inline-flex">
                {article.title}
              </h1>
              <p className="leading-relaxed">{article.description}</p>
            </div>
          </div>
        </div>
      </section>
        </main>
        <Footer />
    </div>
  );
}
