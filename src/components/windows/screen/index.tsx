import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutWindow from "../about";
import LinksWindow from "../links";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setStateScreenClose } from "@/store/features/ScreenSlice";
import { useEffect, useState } from "react";
import WorksWindow from "../works";
import ContactWindow from "../contact";
import {useHandleSounds} from "@/hooks/useHandlesounds";

export default function ScreenComponent(){
    const states=useAppSelector(state=>state);
    const dispatch=useAppDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const {playClickSound}=useHandleSounds();
    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 10); 
        return () => clearTimeout(timeout);
      }, []);
    const handleClose=()=>{
        setIsVisible(false);
        setTimeout(()=>{
            dispatch(setStateScreenClose());
        },400);
        playClickSound('/sounds/notebook-close.mp3');
    }
    return(
        <>
            <div className={`w-full bg-black fixed p-0 h-full z-10 transition-opacity 
            duration-400 ${
          isVisible ? "opacity-75" : "opacity-0"
        }`}>
                
            </div>
            <div  className={`transition-transform duration-400 ease-in-out transform ${
          isVisible ? "translate-y-0" : "translate-y-full"
        } pb-5 w-full fixed z-20 h-14/15 bottom-0`}>
                <div className=" bg-slate-950 p-5 text-white rounded-t-2xl flex justify-between items-center">
                   
                    <div>
                        <h2 className="text-2xl font-bold ">
                            {states.screen.name}
                        </h2>
                    </div>
                    <div onClick={()=>handleClose()}>
                        <FontAwesomeIcon className="text-2xl cursor-pointer" icon={faCircleChevronDown} />
                    </div>
                </div>
                <div className="bg-slate-800 p-0 h-full overflow-y-auto pb-12">
                {(() => {
                    switch (states.screen.name) {
                    case "about":
                        return <AboutWindow />;
                    case "links":
                        return <LinksWindow />;
                    case "works":
                        return <WorksWindow/>;
                    case "contact":
                        return <ContactWindow/>;
                    default:
                        return <div>Not found</div>;
                    }
                })()}
                </div>

            </div>
        </>
    )
}