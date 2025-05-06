import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data";

export default function WorksWindow(){
    const skills:string[]=['HTML/CSS','Javascript','Typescript','Php','Sql','React','Next.js'];
    return(
        <div className="bg-slate-800 text-white p-5 overflow-y-scroll" style={{maxHeight:'500px'}}>
            <div className="border-b">
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
                        <div className="flex p-3 py-10 border-b border-b-gray-300" key={index}>
                            <div className="" style={{display:'contents'}}>
                                <Image className="rounded-xl  border-3 border-gray-400" 
                                src={item.pic} width={300} height={200} alt="..."/>
                            </div>
                            <div className="p-3">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="text-sm text-gray-300 py-3">{item.description}</p>
                                <div>
                                {item.links.length>0 ?
                            (
                            <div className="p-5 flex flex-wrap items-center justify-center gap-3">
                                {item.links.map((item,index)=>{
                                        if(item.name==="github"){
                                            return(
                                            <Link 
                                                key={index} 
                                                href={item.link} 
                                                target="_blank" 
                                                className="bg-amber-400 px-4 py-2 rounded-xl ring-1 text-base font-semibold"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                                <span>Github</span>
                                            </Link>)
                                        }else if(item.name==='demo'){
                                            return(
                                            <Link key={index} href={item.link} target="_blank" className="bg-amber-400 px-4 py-2 rounded-xl ring-1 text-base font-semibold">
                                                <FontAwesomeIcon icon={faLink} />
                                                <span>Demo</span>
                                            </Link>)
                                        }
                                    })}

                                    </div>
                                    )
                                    :
                                    null
                                }
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}