import React from "react";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import Link from "next/link";
const ProductCard = (props) => {
  const { item } = props;
  return (
    <Link
      href={{
        pathname: "/products/[sku]",
        query: {
          sku: item?.sku,
          name: item?.name,
          price: item?.price,
          thumbnail: item?.thumbnail,
          description: item?.description,
          rating: item?.rating,
        },
      }}
      as={`/product/${item?.sku}`}
      key={item?.sku}
      className="lg:w-1/4 md:w-1/2 w-full"
    >
      <a className="m-4">
        <div className="text-left m-6">
          <div className="block relative  rounded overflow-hidden">
            {item ? <Image
              className="object-cover object-center w-full h-full block"
              src={item?.thumbnail}
              alt="Product thumbnail"
              width={420}
              height={400}
            /> : null}
          </div>
          <div className="p-4">
            <div className="mb-1">
              <StarRatings
                rating={item?.rating}
                starRatedColor="orange"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="5px"
                name="rating"
              />
            </div>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {item?.name}
            </h2>
            <p className="mt-1">${item?.price}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
