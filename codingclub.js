//list of messages to display based on certain scores
var quizResults = [
    'There\'s always more to learn. Join Coding Club to improve your knowledge and skills with programming, or learn it from scratch!',
    'Looks like you\'ve had some exposure to this area before. There\'s always more to learn; come to Coding Club!',
    'Wow, you really know your stuff! Join Coding Club to share your expertise and to keep your skills sharp!'
];
var numQuestions;

//hide 'Begin Quiz' button, show quiz
function displayQuiz(){
	document.getElementById("divQuizPrompt").style.style.display = "none";
	document.getElementById("divQuiz").style.style.display = "block";
}

function submitQuiz(){
    //code only executes if all questions have been attempted
    if(allFieldsChecked()){
        var score = 0;
        
        //every time a radio with a 'correct' ID is checked, increment the score
        for(i = 1; i <= numQuestions; i++){
            if(document.getElementById('correct'+i).checked){
                score++;
            }
        }
        
        //hide quiz, show result
        document.getElementById('divQuiz').style.style.display = 'none';
        document.getElementById('divQuizResult').style.style.display = 'block';
        
        document.getElementById('quizResult').innerHTML = 'You scored ' + score + ' out of ' + numQuestions + '.<br/>';
        
        //display certain message based on score
        if(score/parseFloat(numQuestions) > .8){
            document.getElementById('quizSuggestion').innerHTML = quizResults[2];
        }
        else if(score/parseFloat(numQuestions) > .4){
            document.getElementById('quizSuggestion').innerHTML = quizResults[1];
        }
        else {
            document.getElementById('quizSuggestion').innerHTML = quizResults[0];
        }
        
        addFooter();
    }
    //if all questions not attempted, display message to user
    else {
        document.getElementById('quizNotComplete').innerHTML = ' *You must answer all questions before submitting quiz. ';
    }
}

//check if all questions have been attempted
function allFieldsChecked(){
    numQuestions = document.getElementById('divQuiz').getElementsByTagName('FORM').length;
    
    var radios = document.getElementsByTagName('INPUT');
    var checkedRadios = 0;
    
    //every time a radio is checked, increment 'checkedRadios'
    for(i = 0; i < radios.length; i++){
        if(radios[i].checked){
            checkedRadios++;
        }
    }
    
    //if the number of checked radios is equal to the number of questions in the quiz, allFieldsChecked returns true
    return checkedRadios == numQuestions;
}

function addFooter(){
    //create paragraph element
    var sources = document.createElement('P');
    sources.id = 'citations';
    
    //add it to document and add citations
    document.getElementById('divQuizResult').appendChild(sources);
    document.getElementById('citations').innerHTML = 'Sources:<br/>'
        + 'http://www.depauw.edu/academics/departments-programs/computer-science/why-study-computer-science/<br/>'
        + 'https://github.com/atom/language-python/issues/17<br/>'
        + 'http://vignette2.wikia.nocookie.net/pacman/images/7/77/Splitscreen.gif/revision/latest?cb=20100614191114';
}