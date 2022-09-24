import React from "react";
import Image from "next/image";
function ProductCard({item}) {

    return(
        <div className="text-left m-6 bg-slate-500">
        <div className="block relative h-48 rounded overflow-hidden">
        <Image
                className="object-cover object-center w-full h-full block"
                src={require(`/assets/${item.thumbnail}`)}
                alt="ecommerce thumbnail"
                width={420}
                height={260}
              />
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
    )
}

export default ProductCard;