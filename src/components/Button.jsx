import { MdArrowOutward } from "react-icons/md";

export function Button(){
    return <div className="w-40 py-2 px-3 flex items-center justify-between bg-slate-100 rounded-full">
        <span className="text-sm">Get Started</span>
        <MdArrowOutward/>

    </div>
}