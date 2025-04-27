import { DeleteWindow } from "@/store/features/windowsSlice";
import { useAppDispatch } from "@/store/hooks";
import { windowType, windowTypeWithHandle } from "@/types";
import { faCaretDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WindowComponent({windowData,handle,children}:windowTypeWithHandle<windowType>){
    const dispatch=useAppDispatch();
    const handleDelete=()=>{
        dispatch(DeleteWindow({id:windowData.id}));
    }
    return(
        <div className=" absolute top-1 bg-red-00 z-10  rounded-sm overflow-hidden border 
        border-gray-400"
        style={{
            left:windowData.left+"px",
            top:windowData.top+"px",
            width:windowData.width+"px",
            transition: 'left 1ms ease, top 1ms ease'
           
        }}
        >
            <div  className="bg-black justify-between text-white flex flex-row">
                <div onMouseDown={(e)=>handle(windowData,e)}
                style={{ cursor:windowData.cursor}}
                className="w-full p-3">
                        <h1 className="font-mono font-semibold text-2xl">{windowData.name}</h1>
                </div>
                <div className="flex px-2 text-center items-center gap-3 text-2xl"> 
                    <div className= "w-6 cursor-pointer">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className="w-8 cursor-pointer" onClick={handleDelete}>
                        [<FontAwesomeIcon icon={faClose} />]
                    </div>
                </div>
                
            </div>
            <>
            {children}
            </>
        </div>
    )
}