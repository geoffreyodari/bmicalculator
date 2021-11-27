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





console.log(giveResults(bmi(60,1.7)))