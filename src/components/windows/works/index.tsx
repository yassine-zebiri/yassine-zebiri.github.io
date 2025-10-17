
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data";
import LinksComponent from "@/components/ui/linls";
import { useRouter } from "next/navigation";

export default function WorksWindow(){
    const skills:string[]=['HTML/CSS','Javascript','Typescript','Php','Sql','React','Next.js'];
    const route=useRouter()
    return(
        <div className="bg-slate-800 text-white sm:p-5 p-3" >
            <div className="">
                <h2 className="text-2xl font-bold py-3">skills</h2>
                <div className="flex flex-wrap p-3 gap-3 ">
                    {skills.map((item,index)=>(
                        <div key={index} className="border font-semibold hover:translate-y-1 rounded px-4 py-2  border-b-4 bg-slate-700 border-b-gray-300">
                            {item}
                        </div>
                    ))}
                    
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold py-3">my projects</h2>
                <div>
                    {projects.map((item,index)=>(
                        <div className="flex flex-col lg:flex-row justify-center items-center sm:p-3 py-10 border-dashed sm:border-b-4 border-b-2 last:border-0 border-b-gray-300" key={index}>
                            <div onClick={()=>{route.push(`/project/${item.id}`)}} className=" cursor-pointer lg:w-1/2" >
                                <Image className="rounded-xl  border-3 border-gray-400 w-full " 
                                src={item.pic} width={500} height={500} alt="..."/>
                            </div>
                            <div className="p-3 lg:w-1/2">
                                <h3 className="text-xl font-bold hover:underline">
                                    <Link href={`/project/${item.id}`} >{item.name}</Link>
                                </h3>
                                <p className="text-sm text-gray-300 py-3">{item.description}</p>
                                <div>
                                    <LinksComponent links={item.links} />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}