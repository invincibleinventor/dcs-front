import {Icon} from "@iconify/react"
export default function Popular(props:any){
    return(

        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
        <img
        className="w-full h-48 object-cover"
        src={props.image}

        />

        <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{props.title}</h3>

        <div className="flex items-start text-orange-500">
        <h1 className="text-base text-black font-bold">€</h1><h1 className="text-3xl font-bold text-orange-500">{props.price}</h1>
        <span className="ml-1 text-gray-500 text-sm mt-auto">/day</span>
        </div>

        <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-600">
        <Icon icon="mdi:bike" className="w-5 h-5 text-orange-500 mr-2" />
        {props.one}
        </li>
        <li className="flex items-center text-gray-600">
        <Icon icon="mdi:map-marker-outline" className="w-5 h-5 text-orange-500 mr-2" />
        {props.two}
        </li>
        <li className="flex items-center text-gray-600">
        <Icon icon="mdi:ticket-percent-outline" className="w-5 h-5 text-orange-500 mr-2" />
        {props.three}
        </li>
        <li className="flex items-center text-gray-600">
        <Icon icon="mdi:headset" className="w-5 h-5 text-orange-500 mr-2" />
        Guaranteed Support
        </li>
        </ul>

        <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
        Book Now
        </button>
        </div>
        </div>
    )
}
