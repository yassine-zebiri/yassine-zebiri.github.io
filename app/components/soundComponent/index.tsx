import { setStateSound } from "@/store/features/ScreenSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { faVolumeOff, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SoundComponent(){
    const state=useAppSelector(state=>state);
    const dispatch=useAppDispatch();
    const handleStateSound=()=>{
        dispatch(setStateSound())
    }
    return(
        <div className="p-1 px-2 text-white fixed top-5 left-5 sm:text-2xl text-lg cursor-pointer hover:scale-120 ease-out transition-all" onClick={()=>handleStateSound()}>
           
            {state.screen.sound ? ( <FontAwesomeIcon icon={faVolumeOff} />):(<FontAwesomeIcon icon={faVolumeXmark} />)}
        </div>
    )
}