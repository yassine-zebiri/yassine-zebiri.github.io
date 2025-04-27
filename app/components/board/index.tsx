"use client";
import { addWindow, DeleteWindow,  setPositionWindow } from "@/store/features/windowsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { windowType } from "@/types";
import { useEffect, useRef, useState } from "react";
import ContainerDiv from "../containerDiv";
import WindowComponent from "../windows/window";
import AboutWindow from "../windows/about";
import LinksWindow from "../windows/links";
import WorksWindow from "../windows/works";

export default function BoardComponent() {

  const states=useAppSelector((state:RootState)=>state);
  const dispatch=useAppDispatch();
  const[element,setElement]=useState<windowType|null>();

  const [isDragging, setIsDragging] = useState(false);
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const boardRef = useRef<HTMLDivElement>(null);
  const[elementTarget,seElementTarget]=useState<any>();
  const Delete=(id:any)=>{
    dispatch(DeleteWindow({id:id}));
    setElement(null);
  }
  const handleMouseDown = (
    component: windowType,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
console.log(e.currentTarget);
    seElementTarget(e.currentTarget)
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setDraggedId(component.id);
    setIsDragging(true);
    setElement(component)
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || draggedId === null || !boardRef.current) return;

    const boardRect = boardRef.current.getBoundingClientRect();
    let newX = e.clientX - boardRect.left - offset.x;
    let newY = e.clientY - boardRect.top - offset.y;

    const elementRect=boardRect;

    const maxX=elementRect.width-(elementTarget.offsetWidth+85);
    const maxY=elementRect.height-(elementTarget.offsetHeight)

    newX=Math.max(0,Math.min(newX,maxX))
    newY=Math.max(0,Math.min(newY,maxY))

    requestAnimationFrame(()=>{
      dispatch(setPositionWindow({id:element?.id,left:newX,top:newY}));
    })
   /*  setComponents((prev) =>
      prev.map((comp) =>
        comp.id === draggedId
          ? {
              ...comp,
              left: `${Math.round(newX)}px`,
              top: `${Math.round(newY)}px`,
            }
          : comp
      )
    ); */
  };

  const handleMouseUp = () => {
    document.body.style.cursor = "default";
   /*  if(element && element!=undefined  && element!=null && element.id!=undefined) {
      dispatch(setPositionWindow(
        {
          id:element?.id,
          cursor:"grab",
        }));
    } */

    setIsDragging(false);
    setDraggedId(null);
    setElement(null);

  };
  
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, draggedId, offset]);

  
  return (
    <div
      ref={boardRef}
      className="bg-amber-500 relative w-full h-screen overflow-hidden flex justify-center items-center"
    >
      {states.windows.map((item:windowType,index) => {
        switch (item.name) {
          case 'about':
            return (
              <WindowComponent key={index} handle={handleMouseDown} windowData={item} >
                <AboutWindow/>
            </WindowComponent>
            )     
            case 'links':
              return (
                <WindowComponent key={index} handle={handleMouseDown} windowData={item} >
                  <LinksWindow/>
              </WindowComponent>
              )  
            case 'works':
              return (
                <WindowComponent key={index} handle={handleMouseDown} windowData={item} >
                  <WorksWindow/>
              </WindowComponent>
              )       
          default:
            break;
        }
      })}
    

      <ContainerDiv/>
    
    </div>
  );
}
