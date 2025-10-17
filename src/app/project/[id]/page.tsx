
import LinksComponent from "@/components/ui/linls";
import ModelPicture from "@/components/ui/linls/modelPicture";
import { projects } from "@/components/windows/works/data";
import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";



export async function generateStaticParams(){
    return [{id:"1"},{id:"2"},{id:"3"}]
}


type Props={
    params:Promise<{id:string}>
}

export async function generateMetadata({params}:Props):Promise<Metadata>{

    const {id}=await params;
    const project=projects.find((i)=>i.id===parseInt(id));

    return{
        title:project?.name,
        description:project?.description
    }
}


 
export default async function page({params}:Props){
    await new Promise((resolve)=>setTimeout(resolve,0))
    const {id}=await params;
    const project=projects.find((i)=>i.id===parseInt(id));
    if(!project) return;

    return(
        <div className="sm:p-5 pt-5">
           <div  className="bg-slate-800 lg:w-10/12 md:w-11/12 w-full h-full m-auto p-3 rounded">
            <div className="grid grid-cols-6">
                <div className="sm:col-span-3 col-span-6">

                    <Suspense fallback={<div className="p-5 text-center">Wait picture ...</div>}>
                        <Image
                            src={project?.pic}
                            width={500}
                            height={500}
                            alt="..."
                            style={{width:'100%'}}
                            priority
                        />
                    </Suspense>
                </div>
                <div className="sm:col-span-3 col-span-6 flex flex-col gap-3 sm:p-5 p-3 text-white">
                    <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold">{project.name}</h1>
                    <p className="lg:text-md text-sm pl-3">{project.description}</p>
                    <div>
                        <LinksComponent links={project.links} />
                    </div>
                </div>
                <hr className="col-span-6 my-5 text-white"/>
                <div className="col-span-6 py-3">
                    <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 w-full">
                        {project.image.map((item,index)=>(
                            <div key={index} className="rounded-lg overflow-hidden sm:col-span-1 col-span-2 w-full  border border-gray-500">
                                
                                <ModelPicture src={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
               
           </div>
        </div>
    )
}