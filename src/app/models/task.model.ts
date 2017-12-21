export class Task{
    name:string;
    state:boolean;
    constructor(_name:string, _state:boolean){
        this.name = _name;
        this.state = _state;
    }
}