export function Navbar()
{
    return <div className="max-w-screen-xl mx-auto p-3 py-6 bg-zinc-800 text-center flex items-center justify-between">
        <div className="flex items-start justify-between">
            <h1 className="">Logo</h1>
            <div>
                {["Home","Work","Contact","","News"].map((element,index)=>(<a className="text-sm" href="#">
                   {index ===1 &&  <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>}{element}
                    </a>))}

            </div>
        </div>
    </div>
}
