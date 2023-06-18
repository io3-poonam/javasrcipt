const displayValueCalc=document.getElementById('calc-operation')
const calculationValue=document.getElementById('calculation');
let displayValueStringPart="";
const button=document.querySelectorAll('button')
console.log('.........', displayValueCalc, calculationValue, displayValueStringPart);
Array.from(button).map((button)=>{
button.addEventListener('click',(event)=>{
if(event.target.value=='0'){
getEvaluation();}
 else if(
    event.target.value=='ac'){
        displayValueStringPart="0";
        displayValueCalc.innerText="0";
        calculationValue.innerText="0";
    }
    else if(event.target.value=='back'){
        displayValueStringPart=displayValueStringPart.slice(0,-1)
        displayValueStringPart.innerText=displayValueStringPart
    }
    else{getInputValues(event.target.innerText)}

})
})
