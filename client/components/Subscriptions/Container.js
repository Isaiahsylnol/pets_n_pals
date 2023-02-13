import { CheckIcon } from "@heroicons/react/solid";

export default function SubscribeContainer({
  children,
  tier,
  price,
  description,
}) {
  return (
    <div className="h-auto bg-[#f5f4ef] flex flex-wrap gap-y-5 hover:shadow-xl sm:w-2/3 md:w-3/5 lg:w-96">
      <div className="m-4 flex font-bold">
        <span className="text-3xl p-4">{tier}</span>
        <span className="text-lg p-4 mt-1">{price}</span>
      </div>

      <div className="p-8 -mt-12 text-[#1F1F1F]">
        <p className="pb-8">{description}</p>
        <CheckIcon className="h-6 w-6 ml-5 inline" />
        <h3 className="pl-4 inline">Curated Pet Feed</h3>
        {children}
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center mx-auto mt-12 w-full">
          Subscribe
        </button>
      </div>
    </div>
  );
}
