export class Stack{
    constructor(){
        this.stack = {};
        this.length = 0;
    };
    
    push(number){
        this.length++;
        this.stack[this.length] = number;
    };


    pop(){
        const stackVal = this.stack[this.length];
        this.stack[this.length] = null;
        this.length --;

        return stackVal;
    };

    top(){
        return this.stack[this.length];
    }

    isEmpty(){
        
        return this.length === 0;
    }

    printStack(){
        let stackValues = "";

        for (let i = 1; i <= this.length; i++) {
            stackValues += this.stack[i] + " ";
        }
        return stackValues;
    }

}