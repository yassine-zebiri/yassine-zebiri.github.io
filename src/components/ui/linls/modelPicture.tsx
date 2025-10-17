"use client"
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export default function ModelPicture({src}:{src:string}){
    const [show,setShow]=useState<boolean>(false)
    return(
        <div className="w-full box-model">
            <div onClick={()=>setShow(true)} className="box-model-icon">
                <FontAwesomeIcon icon={faExpand} />
            </div>
            <Image
                className="w-full"
                src={src}
                width={400}
                height={200}
                alt="..."
            />
             {show && 
             (
                <div className="model-pic">
                    <button
                        onClick={()=>setShow(false)} 
                        className="btn text-white absolute top-5 left-5 cursor-pointer"
                    >x</button>
                    <div>
                        <Image
                        className=""
                        src={src}
                        width={1000}
                        height={1080}
                        alt="..."
                    />
                    </div>
                </div>
            )}
</div>
    )
}