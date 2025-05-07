import { setStateScreen } from "@/store/features/ScreenSlice";
import { addWindow } from "@/store/features/windowsSlice";
import { useAppDispatch } from "@/store/hooks";
import { faCircleInfo, faFolderClosed, faLink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContainerDiv({handle}:any){
    const dispatch=useAppDispatch();
    const handleAddWindow=(name:string,width?:number)=>{
        if(window.innerWidth>640){
            dispatch(addWindow({
                name:name,
                top:handle().y,
                left:handle().x,
                cursor:'grab',
                width:width
            }));
        }else{
            dispatch(setStateScreen({name:name}))
        }
        
    }
    
    return(
        <div style={{maxWidth:'800px',width:'100%'
        }}
         className=" bg-primary text-white sm:border-2 sm:border-b-6  sm:border-r-3 sm:border-gray-400 rounded-xl overflow-hidden">
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

                <div className="flex gap-y-6 sm:gap-6 p-5 text-center font-mono flex-wrap">
                    <div className="w-1/2 sm:w-auto bg-red-1 00 px-3">
                        <div className=" cursor-pointer hover:scale-110 w-26 h-26 sm:w-fit pt-4  ml-auto bg-slate-800 sm:bg-transparent rounded-lg"  onClick={()=>handleAddWindow('about',800)}>
                            <FontAwesomeIcon  className="sm:text-6xl text-4xl" icon={faCircleInfo} />
                            <h3 className="sm:text-lg text-sm mt-3">about</h3>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-auto  bg-red-40 0 px-3">
                        <div className=" cursor-pointer hover:scale-110 w-26 h-26 sm:w-fit pt-4 mr-auto  bg-slate-800 sm:bg-transparent rounded-lg" onClick={()=>handleAddWindow('links',650)}>
                            <FontAwesomeIcon className="sm:text-6xl text-4xl" icon={faLink} />
                            <h3  className="sm:text-lg text-sm  mt-3">links</h3>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-auto px-3">
                        <div className=" cursor-pointer hover:scale-110 w-26 h-26 sm:w-fit pt-4 ml-auto  bg-slate-800 sm:bg-transparent rounded-lg" onClick={()=>handleAddWindow('works',900)}>
                            <FontAwesomeIcon className="sm:text-6xl text-4xl" icon={faFolderClosed} />
                            <h3  className="sm:text-lg text-sm  mt-3">works</h3>
                        </div>
                    </div>
                   
                    <div className="w-1/2 sm:w-auto px-3">
                        <div className=" cursor-pointer hover:scale-110 w-26 h-26 sm:w-fit pt-4 mr-auto bg-slate-800 sm:bg-transparent rounded-lg" onClick={()=>handleAddWindow('contact',500)}>
                            <FontAwesomeIcon className="sm:text-6xl text-4xl  " icon={faPaperPlane} />
                            <h3  className="sm:text-lg text-sm mt-3">contact me</h3>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}