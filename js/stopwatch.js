function display_quiz(quiz_number){

  var quiz = document.getElementById("quiz-area-"+ quiz_number);

  if (quiz.classList.contains("hide")){
      quiz.classList.remove("hide");
      quiz.classList.add("in");
      quiz.style.display = "block";
  } else{
      quiz.classList.remove("in");
      quiz.classList.add("hide");
      quiz.style.display = "none";
  }
}

window.onload = function () {
  
    var seconds = 0; 
    var tens = 0; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    if (buttonStart !== undefined && buttonStart !== null) {
      buttonStart.onclick = function() {

        display_quiz(1);
      
        clearInterval(Interval);
         Interval = setInterval(startTimer, 10);
      }
      
        buttonStop.onclick = function() {
           clearInterval(Interval);
      }
      
    
      buttonReset.onclick = function() {
         clearInterval(Interval);
        tens = "00";
          seconds = "00";
        appendTens.innerHTML = tens;
          appendSeconds.innerHTML = seconds;
      }
      
       
      
      function startTimer () {
        tens++; 
        
        if(tens <= 9){
          appendTens.innerHTML = "0" + tens;
        }
        
        if (tens > 9){
          appendTens.innerHTML = tens;
          
        } 
        
        if (tens > 99) {
          console.log("seconds");
          seconds++;
          appendSeconds.innerHTML = "0" + seconds;
          tens = 0;
          appendTens.innerHTML = "0" + 0;
        }
         
        if (seconds > 9){
          appendSeconds.innerHTML = seconds;
        }
      
      }
    }
  
    
  
  }