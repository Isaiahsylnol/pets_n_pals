import { CheckIcon, MinusIcon } from "@heroicons/react/solid";
function SubscribeContainer({ children, tier, price, description }) {
  console.log(children);
  return (
    <div className="p-8 m-8 h-auto flex flex-wrap gap-y-5 items-center justify-center border-4 border-black w-full md:w-1/2 lg:w-1/4 bg-cadmium-orange rounded">
      <div className="m-4 w-full text-black h-auto hover:bg-black hover:text-white font-bold bg-card-head rounded flex justify-between">
      <span className="text-2xl text-left p-4">{tier}</span>
      <span className="text-lg text-left p-4 mt-1">
        {price}/month
      </span>
    </div>
        <p className="justify-center items-center">{description}</p>
        <div className="w-full flex">
              <CheckIcon className="h-6 w-6 ml-5" />
              <h3 className="pl-4">Curated Pet Feed</h3>
            </div>
      {children}
    </div>
  );
}

export default SubscribeContainer;
