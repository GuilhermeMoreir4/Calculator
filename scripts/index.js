import {Stack} from "./stack.js";

const stack = new Stack();

var operation = "";

function toPoloneseNotation(){
    const stack = new Stack();
    let polonese = "";
    const opArray = operation.split(" ");

    opArray.forEach(op => {
        if(op == "x" || op == "/"){
            if(stack.isEmpty()){
                stack.push(op);
            }else if(stack.top() == "+" || stack.top() == "-")
            {
                stack.push(op);
            }else if(stack.top() == "/" || stack.top() == "x"){
                while(stack.top() == "/" || stack.top() == "x"){
                    polonese += " " + stack.pop();
                }
                stack.push(op);
            }
        }else if(op == "+" || op == "-"){
            if(stack.isEmpty()){
                stack.push(op);
            }else if(stack.top() == "/" || stack.top() == "x")
            {
                polonese += " " + stack.pop();
                stack.push(op);

            }else if(stack.top() == "+" || stack.top() == "-"){
                while(stack.top() == "+" || stack.top() == "-"){
                    polonese += " " + stack.pop();
                }
                stack.push(op);
            }
        }else{
            polonese += " " + op;
        }
    })

    while(!stack.isEmpty()){
        polonese += " " + stack.pop();
    }

    console.log(polonese);

    return polonese;
}

function isDigit(str) {
    return /^\d+([.,]\d+)?$/.test(str);
}
  
  

function calculateResult(){
    const polonese = toPoloneseNotation();
    const poloneseSplit = polonese.split(" ");
    const result = new Stack();
    
    
    poloneseSplit.forEach(element => {
        if(isDigit(element)){
            result.push(parseFloat(element));
        }else{
            switch(element){
                case "x":
                    result.push(result.pop() * result.pop());
                    break;
                case "/":
                    const div2 = result.pop();
                    const div1 =  result.pop();

                    result.push(div1 / div2);    
                    break;
                case "+":

                    result.push(result.pop() + result.pop());    
                    break;
                case "-":
                    const second =  result.pop();
                    const first = result.pop();

                    result.push(first - second);
                    break;
            }
        }

    });
    const r = result.pop();

   return r;
}


function getInput(){
    const operations = document.querySelectorAll(".operation");
    const operationHistory = document.querySelector("#operation-history");
    const resultElement = document.querySelector("#result");


    operations.forEach(op => {
         op.addEventListener("click", (o)=>{
            const content = o.target.textContent;
            if(content === "="){
               const result = calculateResult();
               operationHistory.textContent = "";
               resultElement.textContent = result;
               operation = "";
            }else if(content === "c"){
                operation = "";
                operationHistory.textContent = "";
                resultElement.textContent = "";
            }else if(content === "," ){
                operation += ".";
                operationHistory.textContent += content; 
            }else if(content === "m"){
                operation = resultElement.textContent;
                operationHistory.textContent = resultElement.textContent;
            }else if(isDigit(parseFloat(content))){
                operation += content; 
                operationHistory.textContent += content;
            }else{
                operation += " " + content + " "; 
                operationHistory.textContent += content;
            }
         });   
    });
}


getInput();