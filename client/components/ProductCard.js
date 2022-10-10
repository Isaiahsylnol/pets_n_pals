import React from "react";
import Image from "next/image";
import StarRatings from "react-star-ratings";

const ProductCard = (props) => {
  const { item, onAdd } = props;
  return (
    <div className="text-left m-6">
      <div className="block relative h-48 rounded overflow-hidden">
        <Image
          className="object-cover object-center w-full h-full block"
          src={require(`/assets/${item.thumbnail}`)}
          alt="ecommerce thumbnail"
          width={420}
          height={260}
        />
      </div>
      <div className="p-4">
        <div className="mb-1">
          <StarRatings
            rating={item.rating}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="5px"
            name="rating"
          />
        </div>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {item.name}
        </h2>
        <p className="mt-1">${item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
