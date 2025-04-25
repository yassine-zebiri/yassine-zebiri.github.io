"use client";
import { addWindow, DeleteWindow,  setPositionWindow } from "@/store/features/windowsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { windowType } from "@/types";
import { useEffect, useRef, useState } from "react";
import ContainerDiv from "../containerDiv";
import WindowComponent from "../windows/window";

export default function BoardComponent() {

  const states=useAppSelector((state:RootState)=>state);
  const dispatch=useAppDispatch();
  const[element,setElement]=useState<windowType|null>();

  const [isDragging, setIsDragging] = useState(false);
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const boardRef = useRef<HTMLDivElement>(null);

  const Delete=(id:any)=>{
    dispatch(DeleteWindow({id:id}));
    setElement(null);
  }
  const handleMouseDown = (
    component: windowType,
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setDraggedId(component.id);
    setIsDragging(true);
    setElement(component)
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || draggedId === null || !boardRef.current) return;

    const boardRect = boardRef.current.getBoundingClientRect();
    const newX = e.clientX - boardRect.left - offset.x;
    const newY = e.clientY - boardRect.top - offset.y;
    dispatch(setPositionWindow({id:element?.id,left:newX,top:newY,cursor:"grabbing"}));
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
    //if(element && element!=undefined  && element!=null && element.id!=undefined) dispatch(setPositionWindow({id:element?.id,cursor:"grab"}));

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
      {states.windows.map((item:windowType,index) => (
         <WindowComponent key={index} handle={handleMouseDown} windowData={item} />
      ))}
    

      <ContainerDiv/>
    </div>
  );
}
