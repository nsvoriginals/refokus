import {Button } from './Button'
export function Navbar()
{
    return <div className="max-w-screen-lg mx-auto p-3 py-3 bg-zinc-900 text-center font-Satoshi flex items-center justify-between border-b-[1px]">
        <div className="flex items-center justify-between gap-20">
            <h1 className="text-white">Logo</h1>
            <div className="flex items-center text-white justify-between gap-10">
                {["Home","Work","Contact","","News"].map((element,index)=>(<a className="text-sm" href="#">
                   {index ===1 &&  <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>}{element}
                   {element.length===0 &&<span className="border-r-[2px]"></span> }
                    </a>))}
                  
            </div>
            
        </div>
        <Button className="ml-10"></Button> 
    </div>
}
