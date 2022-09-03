import { CheckIcon } from '@heroicons/react/solid';

function SubscriptionItem(props) {
return(
  
          <div className="p-8 m-8 h-auto flex flex-wrap gap-y-5 items-center justify-center border-4 border-black w-full md:w-1/2 lg:w-1/4 bg-orange-300">
            <button className="border-4 border-black bg-slate-200 text-black h-20 w-full hover:bg-black hover:text-white text-white font-bold py-2 rounded">{props.tier}</button>
            <div><p>This is the plan of Basic</p></div>
           <div class="w-full bg-gray-500 flex justify-center"><CheckIcon className='h-6 w-6 ml-5'/><h3 className="pl-4">Curated Pet Feed</h3></div>
           <div class="w-full bg-gray-500 flex justify-center"><CheckIcon className='h-6 w-6 ml-5'/><h3 className="pl-4">Register up to 2 Pets</h3></div>
        
          </div>
      
      
)
}

export default SubscriptionItem;