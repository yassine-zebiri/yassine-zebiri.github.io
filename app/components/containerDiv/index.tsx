import { addWindow } from "@/store/features/windowsSlice";
import { useAppDispatch } from "@/store/hooks";
import { faCircleInfo, faFolderClosed, faLink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContainerDiv(){
    const dispatch=useAppDispatch();
    const handleAddWindow=(name:string)=>{
        dispatch(addWindow({
            name:name,
            top:500,
            left:500,
            cursor:'grab'
        }));
    }
    return(
        <div style={{maxWidth:'620px',width:'100%',height:'250px'}}
         className="bg-white ">
            <div className="bg-black ">
                Home
            </div>
            <div 
            className="flex justify-center gap-5 items-center 
            flex-col bg-amber-200 h-full ">
                <div>
                    <h1 className="text-4xl font-bold">Hi! i'm Yassine Zebiri</h1>
                    <h2>developer web</h2>
                    <button className="sm:block hidden  px-4 py-2 bg-red-400" 
                    onClick={()=>{dispatch(addWindow({id:1,top:500,left:500,cursor:'grab'}))}}>push window</button>
                    
                </div>
                <div className="flex gap-5 p-5 text-center">
                    <div  onClick={()=>handleAddWindow('about')}>
                        <FontAwesomeIcon  className="text-5xl" icon={faCircleInfo} />
                        <h3 className="text-sm font-bold">about</h3>
                    </div>
                    <div  onClick={()=>handleAddWindow('links')}>
                        <FontAwesomeIcon className="text-5xl" icon={faLink} />
                        <h3  className="text-sm font-bold">links</h3>
                    </div>
                    <div  onClick={()=>handleAddWindow('works')}>
                        <FontAwesomeIcon className="text-5xl shadow-xl " icon={faFolderClosed} />
                        <h3  className="text-sm font-bold">works</h3>
                    </div>
                   
                    <div  onClick={()=>handleAddWindow('contact')}>
                        <FontAwesomeIcon className="text-5xl  " icon={faPaperPlane} />
                        <h3  className="text-sm font-bold">contact me</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}