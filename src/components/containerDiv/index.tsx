import {useHandleSounds} from "@/hooks/useHandlesounds";
import { useAppDispatch } from "@/store/hooks";
import { setStateScreen } from "@/store/features/ScreenSlice";
import { addWindow } from "@/store/features/windowsSlice";
import { faCircleInfo, faFolderClosed, faLink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContainerDiv({handle}:any){
    const dispatch=useAppDispatch();

    const {playHoverSound,playClickSound}=useHandleSounds();
    const handleAddWindow=(name:string,width?:number)=>{
        console.log(handle().y);
        
        if(window.innerWidth>640){
            dispatch(addWindow({
                name:name,
                top:handle().y,
                left:handle().x-100,
                cursor:'grab',
                width:width
            }));
            playClickSound('/sounds/pop-1.mp3')
        }else{
            dispatch(setStateScreen({name:name}));
            playClickSound('/sounds/open-doors.mp3')
        }
        
    }
    
    return(
        <div className="container-div max-w-[800px]">
            <div className="container-div-head ">
                Home
            </div>
            <div 
            className="h-full md:pt-26 md:py-12 sm:pt-14 sm:py-6 sm:px-0 px-4">
                <div className="flex justify-center gap-5 items-center flex-col">
                <div>
                    <h1 className="md:text-5xl sm:text-4xl text-3xl font-semibold">Hi! i'm <br/><strong className="hero-title">Yassine Zebiri</strong> </h1>
                    <p className="text-lg text-center mt-5">developer web</p>  
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 p-5 font-mono ">
                    <div >
                        <div className="container-div-box" 
                        onMouseEnter={()=>{
                           playHoverSound();
                        }}  onClick={()=>handleAddWindow('about',50)}>
                                <FontAwesomeIcon className="container-div-box-icon" icon={faCircleInfo} />
                            <h3 className="container-div-box-title">about</h3>
                        </div>
                    </div>
                    <div >
                        <div className="container-div-box" 
                        onMouseEnter={playHoverSound} onClick={()=>handleAddWindow('links',40)}>
                            <FontAwesomeIcon className="container-div-box-icon" icon={faLink} />
                            <h3  className="container-div-box-title">links</h3>
                        </div>
                    </div>
                    <div>
                        <div className="container-div-box" 
                        onMouseEnter={playHoverSound} onClick={()=>handleAddWindow('works',70)}>
                            <FontAwesomeIcon className="container-div-box-icon" icon={faFolderClosed} />
                            <h3  className="container-div-box-title">works</h3>
                        </div>
                    </div>
                   
                    <div >
                        <div className="container-div-box" 
                        onMouseEnter={playHoverSound} onClick={()=>handleAddWindow('contact',30)}>
                            <FontAwesomeIcon className="container-div-box-icon " icon={faPaperPlane} />
                            <h3  className="container-div-box-title">contact me</h3>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}