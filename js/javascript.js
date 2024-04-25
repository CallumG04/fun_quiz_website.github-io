function mark_quiz1(){

    var question1 = document.getElementById("quiz1_question1").value;
    var question2 = document.getElementById("quiz1_question2").value;
    var question3 = document.getElementById("quiz1_question3").value;
    var question4 = document.getElementById("quiz1_question4").value;
    var question5 = document.getElementById("quiz1_question5").value;

    var quiz1_result = document.getElementById("quiz1_results_text");

    var score = 0;

    if (question1 == "Russia"){
        score ++;
    }
    if (question2 == "Vatican City"){
        score ++;
    }
    if (question3 == "Argentina and Chile"){
        score ++;
    }
    if (question4 == "France"){
        score ++;
    }
    if (question5 == "Ireland"){
        score ++;
    }

    if (score < 2){
        document.getElementById("try_again_image").style.display = "block";
        document.getElementById("better_image").style.display = "none";
        document.getElementById("great_work_image").style.display = "none";
    } else if (score > 1 && score < 4){
        document.getElementById("try_again_image").style.display = "none";
        document.getElementById("better_image").style.display = "block";
        document.getElementById("great_work_image").style.display = "none";
    } else if (score >= 4){
        document.getElementById("try_again_image").style.display = "none";
        document.getElementById("better_image").style.display = "none";
        document.getElementById("great_work_image").style.display = "block";
    }

    quiz1_result.innerHTML = "You scored " + score + " out of 5";
    
}

function mark_quiz2(){

    var question1 = document.getElementById("quiz2_question1").value;
    var question2 = document.getElementById("quiz2_question2").value;
    var question3 = document.getElementById("quiz2_question3").value;
    var question4 = document.getElementById("quiz2_question4").value;
    var question5 = document.getElementById("quiz2_question5").value;

    var quiz1_result = document.getElementById("quiz1_results_text");

    var score = 0;

    if (question1 == "158"){
        score ++;
    }
    if (question2 == "June 11"){
        score ++;
    }
    if (question3 == "The Daily Courant"){
        score ++;
    }
    if (question4 == "Darth Vader"){
        score ++;
    }
    if (question5 == "Iron Man"){
        score ++;
    }

    quiz2_results_text.innerHTML = "You scored " + score + " out of 5";
    
}

function mark_quiz3(){

    var question1 = document.getElementById("quiz1_question1").value;
    var question2 = document.getElementById("quiz1_question2").value;
    var question3 = document.getElementById("quiz1_question3").value;
    var question4 = document.getElementById("quiz1_question4").value;
    var question5 = document.getElementById("quiz1_question5").value;

    var quiz1_result = document.getElementById("quiz1_results_text");

    var score = 0;

    if (question1 == "Q1"){
        score ++;
    }
    if (question2 == "Q2"){
        score ++;
    }
    if (question3 == "Q3"){
        score ++;
    }
    if (question4 == "Q4"){
        score ++;
    }
    if (question5 == "Q5"){
        score ++;
    }

    quiz1_result.innerHTML = "You scored " + score + " out of 5";
    
}

function mark_quiz4(){

    var question1 = document.getElementById("quiz4_question1").value;
    var question2 = document.getElementById("quiz4_question2").value;
    var question3 = document.getElementById("quiz4_question3").value;
    var question4 = document.getElementById("quiz4_question4").value;
    var question5 = document.getElementById("quiz4_question5").value;

    var quiz4_result = document.getElementById("quiz4_results_text");

    var score = 0;

    if (question1 == "Mike Hawthorn"){
        score ++;
    }
    if (question2 == "Max Verstappen"){
        score ++;
    }
    if (question3 == "Cars"){
        score ++;
    }
    if (question4 == "Tesla"){
        score ++;
    }
    if (question5 == "Ford Puma"){
        score ++;
    }

    quiz4_result.innerHTML = "You scored " + score + " out of 5";
    
}