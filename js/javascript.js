function check_url(){

    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.has('sort')); // true
    console.log(searchParams.get('sort')); // price_descending


}

function create_user_link(){

    var forename = document.getElementById("forename").value;
    var surname = document.getElementById("surname").value;
    var quiz1_link = document.getElementById("quiz1_link");

    const searchParams = new URLSearchParams(window.location.search);
    var forename = searchParams.get('forename'); 
    var surname = searchParams.get('surname'); 

    var getUrl = window.location.href;
    var baseUrl = getUrl.replace("leaderboard.html", "");

    if (forename == "" || surname == ""){
        document.getElementById("username_error").innerHTML = "Please enter your forename";
    } else{
        quiz1_link.href = baseUrl + "quiz1.html?forename="+ forename +"&surname="+ surname;
        quiz2_link.href = baseUrl + "quiz2.html?forename="+ forename +"&surname="+ surname;
        quiz3_link.href = baseUrl + "quiz3.html?forename="+ forename +"&surname="+ surname;
        quiz4_link.href = baseUrl + "quiz4.html?forename="+ forename +"&surname="+ surname;
    }

}

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