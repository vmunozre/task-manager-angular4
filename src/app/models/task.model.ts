export class Task{
    id:number;
    name:string;
    state:boolean;
    constructor(_id:number, _name:string, _state:boolean){
        this.id = _id;
        this.name = _name;
        this.state = _state;
    }
}