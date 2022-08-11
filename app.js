function calculate(){
      let num1 = document.querySelector("#num1").value;
      num1 = Number(num1)

      result = num1 % 2;

      let resultline =` Here is your ${num1} Result: ${result} <br> if zero it means your number is even otherwise that is Odd` ;
      
      document.querySelector("#result").innerHTML = resultline;
}