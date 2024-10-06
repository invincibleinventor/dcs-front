import { Icon } from "@iconify/react/dist/iconify.js";

export default function Card(props:any){
    return(
<div className="w-auto flex flex-col h-auto">
<img src={props.image} className="w-full object-cover rounded-2xl h-72" /> 
<h1 className="text-black font-bold mt-3 px-1 text-lg">{props.name}</h1>
<h1 className="text-neutral-700 font-medium mt-1 px-1 text-base">from <span className="inline-block pl-1 text-orange-500 font-bold">{props.price}</span></h1>
<div className="flex flex-row items-center content-center justify-between">

    <div className="text-sm font-medium text-orange-300 px-1 mt-2 flex flex-row items-center content-center space-x-2">
        <Icon className="w-4 h-4" icon="solar:calendar-outline" />
        <h1>{props.day.toUpperCase()}</h1>
    </div>
    <div className="text-sm font-medium text-orange-300 px-1 mt-2 flex flex-row items-center content-center space-x-2">
        <Icon className="w-4 h-4" icon="mdi:account-group-outline" />
        <h1>{props.people.toUpperCase()} PP</h1>
    </div>
</div>
<h1 className="text-sm px-1 mt-3 two-line-ellipsis">{props.description}</h1>

</div>

)
}