import React from "react";
import Image from "next/image";

function NewsWidget({ item }) {
  return (
    <div key={item.id} className="p-4 w-full mb-6">
      <div className="rounded-lg">
        <Image
          src={`${item.thumbnail}`}
          alt="News thumbnail"
          width={502}
          height={306}
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {item?.title}
      </h2>
      <p className="text-base leading-relaxed mt-2">
        Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed.
        Gastropub street art beard dreamcatcher neutra, ethical XOXO
        lumbersexual.
      </p>
      <a href="#" className="text-indigo-500 inline-flex items-center mt-3">
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
}

export default NewsWidget;
