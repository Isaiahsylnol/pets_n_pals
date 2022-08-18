import React from "react";
import Image from "next/image";
import Dropdown from "../components/Dropdown";

function NewsWidget({ item }) {
  return (
    <div className="rounded-xl border-2 border-gray-300 bg-gray-100 p-6 text-6xl">
      <Dropdown item={item} />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 justify-center p-5 rounded-xl">
        <div>
          <h2 className="font-semibold text-xl">{item.title}</h2>
          <h4 className="text-xl">{item.date_created}</h4>
        </div>
      </div>
    </div>
  );
}

export default NewsWidget;
