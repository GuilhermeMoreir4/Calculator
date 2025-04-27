export class Stack{
    constructor(){
        this.stack = {};
        this.length = 0;
    };
    push(number){
        this.stack[length + 1] = number;
        length++;
    };
    pop(){
        const stackVal = this.stack[length];
        this.stack[length] = null;
        length --;
        return stackVal;
    };

}