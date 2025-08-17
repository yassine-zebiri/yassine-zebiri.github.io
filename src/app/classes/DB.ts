
export abstract class DB{
    static create:string[]=[];
    constructor(public title:string){
        
    }
    display():void{
        console.log(this.title);
        
    }
    create(s:string):void{
        console.log("created : "+s);
        DB.create.push(s);
    }
}

