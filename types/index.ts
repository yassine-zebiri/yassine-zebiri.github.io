export type windowType ={
    id:number;
    name:string;
    left:number;
    top:number;
    cursor:string;
    width:number;
}

export interface windowTypeWithHandle <T extends windowType>{
    windowData:T;
    handle:(windowData:T,e:React.MouseEvent<HTMLDivElement>)=>void;
    children:React.ReactNode
}