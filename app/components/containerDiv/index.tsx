import { addWindow } from "@/store/features/windowsSlice";
import { useAppDispatch } from "@/store/hooks";
import { faCircleInfo, faFolderClosed, faLink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContainerDiv({handle}:any){
    const dispatch=useAppDispatch();
    const handleAddWindow=(name:string,width?:number)=>{
        dispatch(addWindow({
            name:name,
            top:handle().y,
            left:handle().x,
            cursor:'grab',
            width:width
        }));
    }
    
    return(
        <div style={{maxWidth:'800px',width:'100%',    backgroundColor:' rgb(5, 14, 32)'
        }}
         className="bg-slate-800 text-white sm:border-2 sm:border-b-6  sm:border-r-3 sm:border-gray-400 rounded-xl overflow-hidden">
            <div className="bg-slate-950 p-3 text-2xl font-mono font-semibold text-white hidden sm:block">
                Home
            </div>
            <div 
            className=" bg-amber-00 h-full pt-26 py-12 sm:px-0 px-4">
                <div className="flex justify-center gap-5 items-center flex-col">
                <div>
                    <h1 className="sm:text-6xl text-4xl font-semibold">Hi! i'm <br/> Yassine Zebiri</h1>
                    <p className="text-lg text-center mt-5">developer web</p>  
                </div>

                <div className="flex gap-y-12 sm:gap-12 p-5 text-center font-mono flex-wrap">
                    <div className=" cursor-pointer hover:scale-110 w-1/2 sm:w-auto"  onClick={()=>handleAddWindow('about',800)}>
                        <FontAwesomeIcon  className="text-6xl" icon={faCircleInfo} />
                        <h3 className="text-lg mt-3">about</h3>
                    </div>
                    <div className=" cursor-pointer hover:scale-110 w-1/2 sm:w-auto" onClick={()=>handleAddWindow('links',650)}>
                        <FontAwesomeIcon className="text-6xl" icon={faLink} />
                        <h3  className="text-lg  mt-3">links</h3>
                    </div>
                    <div className=" cursor-pointer hover:scale-110  w-1/2 sm:w-auto" onClick={()=>handleAddWindow('works',900)}>
                        <FontAwesomeIcon className="text-6xl" icon={faFolderClosed} />
                        <h3  className="text-lg  mt-3">works</h3>
                    </div>
                   
                    <div className=" cursor-pointer hover:scale-110 w-1/2 sm:w-auto" onClick={()=>handleAddWindow('contact',500)}>
                        <FontAwesomeIcon className="text-6xl  " icon={faPaperPlane} />
                        <h3  className="text-lg  mt-3">contact me</h3>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}