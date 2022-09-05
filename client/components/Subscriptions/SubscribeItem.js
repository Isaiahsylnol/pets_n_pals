import { CheckIcon } from '@heroicons/react/solid';

function SubscribeItem(props){

    return (
        <>
        <CheckIcon className='h-6 w-6 ml-5'/><h3 className="pl-4">{props.title}</h3>
        </>
    )
}

export default SubscribeItem