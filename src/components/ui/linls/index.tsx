"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


export default function LinksComponent({links}:{
    links:{name:string,link:string}[]
}){
    return(
        <div>
            {links.length>0 ?
            (
                <div className="p-5 flex flex-wrap items-center justify-center gap-3">
                    {links.map((item,index)=>{
                            if(item.name==="github"){
                                return(
                                <Link 
                                    key={index} 
                                    href={item.link} 
                                    target="_blank" 
                                    className="btn btn-primary"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                    <span className="mx-2">Github</span>
                                </Link>)
                            }else if(item.name==='demo'){
                                return(
                                <Link key={index} href={item.link} target="_blank" className="btn btn-primary ">
                                    <FontAwesomeIcon icon={faLink} />
                                    <span className="mx-2">Demo</span>
                                </Link>)
                            }
                        })}
                </div>
                    )
                    :
                    null
                }
        </div>
    )
}