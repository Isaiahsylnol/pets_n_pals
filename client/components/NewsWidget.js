import React from "react";
import Image from "next/image";
import Dropdown from "../components/Dropdown";

function NewsWidget({ item }) {
  return (
    <div key={item.id} className="rounded-xl border-2 bg-orange-200 text-6xl">
      <span className="float-right z-30 p-3"><Dropdown item={item}  /></span>
      <div className="rounded-xl  p-6">
      <Image
                src={require(`/assets/${item.thumbnail}`)}
                alt="Vercel Logo"
                width={502}
                height={306}
              />
        <div>
        <h5 className="text-base mt-2">{item?.date_created}</h5>
          <h2 className="font-semibold text-xl mt-4">{item?.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default NewsWidget;
