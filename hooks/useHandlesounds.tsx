import { useAppSelector } from "@/store/hooks";
import { store } from "@/store/store";
import { useEffect } from "react";

export  function useHandleSounds(src: string) {
 /*  const soundEnabled = useAppSelector((state) => state.screen.sound);


  useEffect(() => {
    if (soundEnabled) {
      const audio = new Audio(src);
      audio.play();
    }
  }, [src, soundEnabled]); */
  const {sound}=store.getState().screen;
  if(!sound) return;
  const audio = new Audio(src);
  audio.play();
}