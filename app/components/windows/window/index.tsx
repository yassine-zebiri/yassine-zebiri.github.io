import { DeleteWindow } from "@/store/features/windowsSlice";
import { useAppDispatch } from "@/store/hooks";
import { windowType, windowTypeWithHandle } from "@/types";
import { faCaretDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WindowComponent({windowData,handle}:windowTypeWithHandle<windowType>){
    const dispatch=useAppDispatch();
    const handleDelete=()=>{
        dispatch(DeleteWindow({id:windowData.id}));
    }
    return(
        <div className=" absolute top-1 bg-red-500 w-52 h-34 rounded-sm overflow-hidden"
        style={{
            left:windowData.left+"px",
            top:windowData.top+"px"
        }}
        >
            <div onMouseDown={(e)=>handle(windowData,e)} className="bg-black p-3 text-white flex gap-3 flex-row-reverse">
                <div className=" z-10" onClick={handleDelete}>
                    [<FontAwesomeIcon icon={faClose} />]
                </div>
                <div>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}