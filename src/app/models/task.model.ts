export class Task{
    id:string;
    name:string;
    state:boolean;
    constructor(_id:string, _name:string, _state:boolean){
        this.id = _id;
        this.name = _name;
        this.state = _state;
    }
}