function mark_quiz1(){

    var question1 = document.getElementById("quiz1_question1").value;
    var question2 = document.getElementById("quiz1_question2").value;
    var question3 = document.getElementById("quiz1_question3").value;
    var question4 = document.getElementById("quiz1_question4").value;
    var question5 = document.getElementById("quiz1_question5").value;

    var quiz1_results_text = document.getElementById("quiz1_results_text");

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

    /*
    if (score < 2){
        document.getElementById("try_again_image_1").style.display = "block";
        document.getElementById("better_image_1").style.display = "none";
        document.getElementById("great_work_image_1").style.display = "none";
    } else if (score > 1 && score < 4){
        document.getElementById("try_again_image_1").style.display = "none";
        document.getElementById("better_image_1").style.display = "block";
        document.getElementById("great_work_image_1").style.display = "none";
    } else if (score >= 4){
        document.getElementById("try_again_image_1").style.display = "none";
        document.getElementById("better_image_1").style.display = "none";
        document.getElementById("great_work_image_1").style.display = "block";
    }*/

    quiz1_results_text.innerHTML = "You scored " + score + " out of 5";
    
}

function mark_quiz2(){

    var question1 = document.getElementById("quiz2_question1").value;
    var question2 = document.getElementById("quiz2_question2").value;
    var question3 = document.getElementById("quiz2_question3").value;
    var question4 = document.getElementById("quiz2_question4").value;
    var question5 = document.getElementById("quiz2_question5").value;

    var quiz2_results_text = document.getElementById("quiz2_results_text");

    var score = 0;

    if (question1 == "1"){
        score ++;
    }
    if (question2 == "1"){
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

        /*
    if (score < 2){
        document.getElementById("try_again_image_2").style.display = "block";
        document.getElementById("better_image_2").style.display = "none";
        document.getElementById("great_work_image_2").style.display = "none";
    } else if (score > 1 && score < 4){
        document.getElementById("try_again_image_2").style.display = "none";
        document.getElementById("better_image_2").style.display = "block";
        document.getElementById("great_work_image_2").style.display = "none";
    } else if (score >= 4){
        document.getElementById("try_again_image_2").style.display = "none";
        document.getElementById("better_image_2").style.display = "none";
        document.getElementById("great_work_image_2").style.display = "block";
    }*/

    quiz2_results_text.innerHTML = "You scored " + score + " out of 5";
    
}

function mark_quiz3(){

    var question1 = document.getElementById("quiz3_question1").value;
    var question2 = document.getElementById("quiz3_question2").value;
    var question3 = document.getElementById("quiz3_question3").value;
    var question4 = document.getElementById("quiz3_question4").value;
    var question5 = document.getElementById("quiz3_question5").value;

    var quiz3_results_text = document.getElementById("quiz3_results_text");

    var score = 0;

    if (question1 == "2"){
        score ++;
    }
    if (question2 == "Carolina Reaper"){
        score ++;
    }
    if (question3 == "Cucumber"){
        score ++;
    }
    if (question4 == "1"){
        score ++;
    }
    if (question5 == "Tequila"){
        score ++;
    }

        /*
    if (score < 2){
        document.getElementById("try_again_image_3").style.display = "block";
        document.getElementById("better_image_3").style.display = "none";
        document.getElementById("great_work_image_3").style.display = "none";
    } else if (score > 1 && score < 4){
        document.getElementById("try_again_image_3").style.display = "none";
        document.getElementById("better_image_3").style.display = "block";
        document.getElementById("great_work_image_3").style.display = "none";
    } else if (score >= 4){
        document.getElementById("try_again_image_3").style.display = "none";
        document.getElementById("better_image_3").style.display = "none";
        document.getElementById("great_work_image_3").style.display = "block";
    }*/

    quiz3_results_text.innerHTML = "You scored " + score + " out of 5";
    
}

function mark_quiz4(){

    var question1 = document.getElementById("quiz4_question1").value;
    var question2 = document.getElementById("quiz4_question2").value;
    var question3 = document.getElementById("quiz4_question3").value;
    var question4 = document.getElementById("quiz4_question4").value;
    var question5 = document.getElementById("quiz4_question5").value;

    var quiz4_results_text = document.getElementById("quiz4_results_text");

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

        /*
    if (score < 2){
        document.getElementById("try_again_image_4").style.display = "block";
        document.getElementById("better_image_4").style.display = "none";
        document.getElementById("great_work_image_4").style.display = "none";
    } else if (score > 1 && score < 4){
        document.getElementById("try_again_image_4").style.display = "none";
        document.getElementById("better_image_4").style.display = "block";
        document.getElementById("great_work_image_4").style.display = "none";
    } else if (score >= 4){
        document.getElementById("try_again_image_4").style.display = "none";
        document.getElementById("better_image_4").style.display = "none";
        document.getElementById("great_work_image_4").style.display = "block";
    }*/

    quiz4_results_text.innerHTML = "You scored " + score + " out of 5";
    
}
