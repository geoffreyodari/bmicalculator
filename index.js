const bmi = function(weight,height){
   return Math.round(weight/Math.pow(height,2))  
}

const giveResults = function(result){
    if(result<18.5){
        return "underweight"
    }else if(result<=24.9){
         return "normal"
    }else if(result<=29.9){
      return "overweight"
    }else{
        return "Obese"
    }
}



let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let age  = document.querySelector("#age");
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let result = document.querySelector("#result");


const getResult = ()=>{
    document.querySelector("#result").innerHTML = `Hi ${firstName.value} you have a BMI of ${bmi(weight.value,height.value)} this means that you are ${giveResults(bmi(weight.value,height.value))}`
}

document.querySelector("#button").addEventListener("click",()=>getResult())