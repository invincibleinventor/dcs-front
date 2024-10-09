export default function Package(props:any){
    return(
        <div className="w-auto  flex flex-col space-y-4">
            <img className="w-full aspect-square rounded-lg h-auto" src={props.img}></img>
            <h1 className="text-lg font-bold text-black">{props.name}</h1>
            <h1 className="text-sm font-normal text-neutral-700 two-line-ellipsis">{props.desc}</h1>
        </div>
    )
}