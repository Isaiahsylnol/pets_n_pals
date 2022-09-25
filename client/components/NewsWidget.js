import React from "react";
import Image from "next/image";
import Dropdown from "../components/Dropdown";

function NewsWidget({ item }) {
  return (
    <div key={item.id} className="p-4 w-full lg:w-2/3 mb-6">
        <div className="rounded-lg">
        <span className="float-right z-30 p-3"><Dropdown item={item}  /></span>
        <Image
                src={require(`/assets/${item.thumbnail}`)}
                alt="News thumbnail"
                width={502}
                height={306}
              />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item?.title}</h2>
        <h5 className="text-base mt-2">{item?.date_created}</h5>
        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
  );
}

export default NewsWidget;
