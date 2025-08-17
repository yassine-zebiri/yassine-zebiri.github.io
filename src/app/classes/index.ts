import { DB } from "./DB";
type StarTypes={
    id:number;
    x:number;
    y:number;
    size:number;
    duration:number;

}
class App{

    private Number:number | undefined;
    static nbr:number=5;

    static Star:StarTypes[]=[];
    static Div:HTMLElement|null;
    constructor(){
        this.Number=15;
                
        
    }

    static DrawStars(count:number){
        for(let i =0;i<count;i++){
            App.Star.push({
                id:i,
                x:Math.random()*100,
                y:Math.random()*100,
                size:Math.random()* 2 + 1,
                duration:Math.random()* 20 +10
            })
        }
        App.Star=[...App.Star];
    }
    static Draw(){
        App.Div=document.getElementById('stars-background')

        App.Star.forEach((e: StarTypes)=>{

            const div=document.createElement('div');
            div.classList.add('star');
            div.style.left=e.x+"%";
            div.style.top=e.y+"%";
            div.style.width=e.size+"px";
            div.style.height=e.size+"px";
            div.style.animationDuration=e.duration+"s";
            App.Div?.appendChild(div);
        })
    }
}

export default App;


export class User extends DB{
    static created:number=0;
    static Arr:string[]=[];
    constructor(public title:string){
        super(title);
        User.created +=1;
        User.Arr.push(title);
    }
    static Say(s:string){
        console.log(s);
        
    }
}