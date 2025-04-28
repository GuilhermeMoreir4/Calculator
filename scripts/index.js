import {Stack} from "./stack.js";

const stack = new Stack();

var operation = {};




function calculateResult(){
    
}


function getInput(){
    const operations = document.querySelectorAll(".operation");
    const operationHistory = document.querySelector("#operation-history");
    operations.forEach(op => {
         op.addEventListener("click", (o)=>{
            const content = o.target.textContent;
            if(content == "="){
            console.log(operation);
            }else if(content == "c"){
                operation = "";
            }else{
                operation += " " + content; 
            }
                operationHistory.textContent += content;
         });   
    });
}


getInput();