// set key
localStorage.test = 2;



function User(forename, surname, quiz, score) {
    this.forename = forename;
    this.surname = surname;
    this.quiz = quiz;
    this.score = score;

}

function add_user(){

    var forename = document.getElementById('forename').value; 
    var surname = document.getElementById('surname').value; 

        // get key
    console.log( localStorage.test ); // 2

    // remove key
    delete localStorage.test;

    // we can use the name of a method as key, but it will give us an error with object notation
    let key = 'length';
    localStorage[key] = 5; // Error, can't assign length

    // The same thing won't happen with method notation
    localStorage.setItem(key, 5);
    console.log(localStorage.getItem(key, 5));  // Will print 5 to the console


    /*

    const searchParams = new URLSearchParams(window.location.search);


    var forename = searchParams.get('forename'); // get forename from url
    var surname = searchParams.get('surname'); 
    var quiz = searchParams.get('quiz'); 
    var score = searchParams.get('score'); 

    users.push(new User(forename, surname, quiz, score));

    console.log(users);
    */

}
  