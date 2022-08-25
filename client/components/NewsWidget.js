import React from "react";
import Image from "next/image";
import Dropdown from "../components/Dropdown";

function NewsWidget({ item }) {
  return (
    <div key={item.id} className="grid md:grid-cols-1 lg:grid-cols-1 p-3 rounded-xl border-2 border-gray-300 bg-gray-100 text-6xl">
      <span className="float-right z-30 p-3"><Dropdown item={item}  /></span>
      <div className="rounded-xl  p-6">
      <Image
                src={require(`/assets/${item.thumbnail}`)}
                alt="Vercel Logo"
                width={502}
                height={306}
              />
        <div>
          <h2 className="font-semibold text-xl mt-4">{item?.title}</h2>
          <h4 className="text-xl mt-4">{item?.date_created}</h4>
        </div>
      </div>
    </div>
  );
}

export default NewsWidget;
