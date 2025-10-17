import {useHandleSounds} from "@/hooks/useHandlesounds";
import { DeleteWindow } from "@/store/features/windowsSlice";
import { useAppDispatch } from "@/store/hooks";
import { windowType, windowTypeWithHandle } from "@/types";
import { faCaretDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WindowComponent({windowData,handle,children}:windowTypeWithHandle<windowType>){
    const dispatch=useAppDispatch();
    const {playClickSound}=useHandleSounds();

    const handleDelete=()=>{
        dispatch(DeleteWindow({id:windowData.id}));
        playClickSound('/sounds/pop-off.mp3')
    }
    return(
        <div className="min-w-[400px] hidden sm:block absolute top-1 bg-red-00 z-10  rounded-sm overflow-hidden border 
        border-gray-400"
        style={{
            left:windowData.left+"px",
            top:windowData.top+"px",
            width:windowData.width+"vw",
            maxWidth:(windowData.width*18)+"px",
            transition: 'left 1ms ease, top 1ms ease'
           
        }}
        >
            <div  className="bg-slate-950 justify-between text-white flex flex-row">
                <div onMouseDown={(e)=>handle(windowData,e)}
                style={{ cursor:windowData.cursor}}
                className="w-full p-3">
                        <h1 className="font-semibold text-2xl">{windowData.name}</h1>
                </div>
                <div className="flex px-2 text-center items-center gap-3 text-2xl"> 
                    <div className= "w-6 cursor-pointer">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className="w-12 cursor-pointer" onClick={handleDelete}>
                        [<FontAwesomeIcon icon={faClose} />]
                    </div>
                </div>
                
            </div>
            <div className=" overflow-y-auto" style={{maxHeight:"70vh"}}>
            {children}
            </div>
        </div>
    )
}