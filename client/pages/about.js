import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header.js";

export default function About() {
  const [data, setData] = useState("");

  async function fetchData() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.accessToken;
    await fetch("http://localhost:8080/api/user/test/guarded", {
      method: "GET",
      headers: { "x-access-token": token },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data));
    return data;
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Head>
        <title>The Latest News on Pets</title>
        <meta name="description" content="News Feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div>About, {data}</div>
        <div></div>
      </main>
    </div>
  );
}
