
let power=document.getElementById("power")
let clr=document.getElementById("clr")
let ac=document.getElementById("ac")
let preinput=document.getElementById('preinput')
let textbox=document.getElementById('input')
let btn=document.querySelectorAll('button')
let operand1,operand2,result,opr,on
let operation=['+','-','*','/','%','^']

ac.addEventListener('click',function(){    
    power.style.backgroundColor=(power.style.backgroundColor=="green")?'red':'green'
    power.style.backgroundColor=="green"?on=true:on=false
    clrevent()
})
function perform(opr1,opr2,opr){
    if(opr=='+')
        return opr1+opr2
    else if(opr=='-')
        return opr1-opr2
    else if(opr=='*')
        return opr1*opr2
    else if(opr=='/')
        return opr1/opr2
    else if(opr=='%')
        return opr1%opr2
    else if(opr=='^')
        return opr1**opr2
}
btn.forEach( (btn)=> btn.addEventListener('click',function(){
   if(on){
    if(operation.includes(btn.value)){
    opr=btn.value
    operand1=Number(textbox.value)
    preinput.innerHTML=`${operand1}${opr}`
    textbox.value=""
   }
   else if(btn.value=='='){
    operand2=Number(textbox.value)
    preinput.innerHTML+=operand2
   result=perform(operand1,operand2,opr)
    textbox.value=result
    operand1=""
    operand2=""
   }
   else if((btn.value>=0 && btn.value<=9) || (btn.value=='.')){
    input.value+=btn.value
    
   }
   
   }
}))
clr.addEventListener('click',clrevent)
function clrevent(){
    textbox.value=""
    operand1=""
    operand2=""
    preinput.innerHTML=""
}
