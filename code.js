//a function to play craps on my index page
function playCraps(){
    console.log("playCraps() started");
    //step 1. roll 2 6 sided dice
    var die1;
    var die2;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);
    //step 1b print results on screen
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    //step 2. calculate the sum of die 1 and die 2
    var diceSum = die1 + die2;
    console.log("The sum of the dice is:" + diceSum);
    document.getElementById("diceSum").innerHTML = diceSum;
    //step 3. does the sum equal 7 or 11, meaning are you a loser
    if(diceSum==7||diceSum==11){
        document.getElementById("gameRes").innerHTML = 
            "Ha ha! You lose, loser! Try again, you are due!";
    }else if(die1 == die2 && die1%2 == 0){
        //step 4. did the dice come up double> are they evens? if so, you win
        document.getElementById("gameRes").innerHTML = "You win! That was easy!";
    }else{
        //step 5. otherwise push
        document.getElementById("gameRes").innerHTML = 
            "You did not lose, You did win, be kuhl and please play again!";
      
}
}
//checkCreds function for strings.html
function checkCreds(){
    console.log("checkCreds() started...");
    document.getElementById("loginStatus").innerHTML = "Status of login";
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;

    //this will place the characters under the fName id in the firstName variable
    firstName = document.getElementById("fName").value;
    console.log("The first name is inputted as " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("The last name is inputted as " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("The zip code is inputted as " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters");
    
    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again";
    } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid zip code, please try again";
    } else{
        alert("User credientals passed, welcome to the site, " + fullName);
    }

}

function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById('mymarquee').start();
}

function stopFun(){
    console.log("stopFun() started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById('mymarquee').stop();
}

function checkPalin(){
    //check to see if a sentence is a palindrome
    console.log("checkPalin() started");

    //extract the entered text to a string variable called entStr
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("The text entered is: " + entStr);

    //remove the spaces from the string
    var entStrNoSpace = entStr.split(" ").join("");
    console.log("no spaces = " + entStrNoSpace);

    //create a new variable called revStr and store the entered string reversed here
    var revStr;
    const revArray = [];
    length = entStrNoSpace.length - 1;
    console.log("string length = " + length);
    for(let i = length; i >=0; i--){
        revArray.push(entStrNoSpace[i]);
    }
    revStr = revArray.join("");
    console.log("reversed is: " + revStr);

    //compare entStr to revStr
    var equal = 0;
    equal =  (entStrNoSpace === revStr);
    console.log(equal);

    //give notice of equality status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome!";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome!";
    }

}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function playBowie(){
    console.log("playBowie() started");
    mySound = new sound("David-Bowie-Space-Oddity.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function setTime(){
    console.log("setTime() started");
    //1. extract the number in the form
    var numOfSec;
    numOfSec = document.getElementById("timeInput").value;
    //2. use this number to create timers
    //time for a loop
    var currTime = numOfSec;
    for(var i = 0; i <= numOfSec; i++){
        if(i == numOfSec){
            setTimeout(function(){
                document.getElementById("statusUpdate").innerHTML = "Time for Mr. David Bowie";
                currTime--;
            },i * 1000);
        } else {
            setTimeout(function(){
                document.getElementById("statusUpdate").innerHTML = currTime;
                currTime--;
            },i * 1000);
        }
    }
    //3. use this number to play music after number of sec
    setTimeout(function(){
        playBowie();
    }, numOfSec * 1000);
}