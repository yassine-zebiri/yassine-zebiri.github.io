import { addWindow } from "@/store/features/windowsSlice";
import { useAppDispatch } from "@/store/hooks";
import { faCircleInfo, faFolderClosed, faLink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContainerDiv(){
    const dispatch=useAppDispatch();
    const handleAddWindow=(name:string,width?:number)=>{
        dispatch(addWindow({
            name:name,
            top:500,
            left:500,
            cursor:'grab',
            width:width
        }));
    }
    return(
        <div style={{maxWidth:'800px',width:'100%'}}
         className="bg-white ">
            <div className="bg-black p-3 text-2xl font-mono font-semibold text-white">
                Home
            </div>
            <div 
            className=" bg-amber-00 h-full pt-26 py-12">
                <div className="flex justify-center gap-5 items-center flex-col">
                <div>
                    <h1 className="text-6xl font-semibold">Hi! i'm Yassine Zebiri</h1>
                    <p className="text-lg text-center">developer web</p>  
                </div>

                <div className="flex gap-12 p-5 text-center">
                    <div className=" cursor-pointer hover:scale-110"  onClick={()=>handleAddWindow('about',800)}>
                        <FontAwesomeIcon  className="text-6xl" icon={faCircleInfo} />
                        <h3 className="font-semibold mt-3">about</h3>
                    </div>
                    <div className=" cursor-pointer hover:scale-110" onClick={()=>handleAddWindow('links',650)}>
                        <FontAwesomeIcon className="text-6xl" icon={faLink} />
                        <h3  className="font-semibold mt-3">links</h3>
                    </div>
                    <div className=" cursor-pointer hover:scale-110" onClick={()=>handleAddWindow('works',900)}>
                        <FontAwesomeIcon className="text-6xl" icon={faFolderClosed} />
                        <h3  className="font-semibold mt-3">works</h3>
                    </div>
                   
                    <div className=" cursor-pointer hover:scale-110" onClick={()=>handleAddWindow('contact',500)}>
                        <FontAwesomeIcon className="text-6xl  " icon={faPaperPlane} />
                        <h3  className="font-semibold mt-3">contact me</h3>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}