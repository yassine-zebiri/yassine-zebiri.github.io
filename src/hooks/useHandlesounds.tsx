import { store } from "@/store/store";


export  function useHandleSounds() {
const {sound}=store.getState().screen;
  const playHoverSound=()=>{
    if(!sound) return;

   if(sound){
      const audio=new Audio('/sounds/click-menu-app.mp3');
      audio.volume=0.1;
      audio.play();
   }  
    
  }
  const playClickSound=(src:string)=>{
    if(!sound) return;

    if(sound){
        const audio=new Audio(src);
        audio.volume=0.1;
        audio.play();
    } 
  }

  return{
    playHoverSound,
    playClickSound
  }

}