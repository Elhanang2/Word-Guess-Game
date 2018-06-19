
        var WORDS=["jupiter",
                "mars", 
                "neptune",
                "pluto",
                "saturn",
                "uranus",
                "earth",
                "mercury",
                "venus"

            ]; 
        //initialize and declare variables
        var word="";    
        var answerArray=[];
        var wrongArray=[];
        var wrong=true;
        var guess=0;
        var losses=0;
        var wins=0;
        var numOfGuess=10;
        
                 
        //call  start function
        
        if((losses+wins)<= "10") {
            start();
        //
            for(var i=0; i<word.length; i++){
                document.onkeyup = function() {
                        
                guess=event.key;
                 getguess(guess);
                    
                wronglist();
                score();
                }
            }       
        }   
               
    //start function to pick words randomly and create underscore empity array
    function start(){
        word=WORDS[Math.floor(Math.random()*WORDS.length)];
        
        // for function to create underscore array the same us word length
        answerArray=[];
        for(var i=0; i<word.length; i++){
            answerArray[i]="_";
        }
        
        document.getElementById("answer-array").innerHTML="Word length: "+answerArray.join(" ");
        document.getElementById("numOf").innerHTML="GuessChance: "+ numOfGuess; 
    } 
    //getguess accepts the user guess and check if it exists 
    //if it exists put it in the exact place of the answer arrary  
    function getguess(){
        
        for(var j=0; j<word.length; j++){
            if(word[j]==guess ){
                wrong=false;
                if(answerArray[j]==guess){
                   
                }else {
                    answerArray[j]=guess;
                    
                    numOfGuess--;}    
            }
        }
        document.getElementById("numOf").innerHTML="GuessChance: "+ numOfGuess; 
        document.getElementById("answer-array").innerHTML="Word length: "+answerArray.join(" ");
    }      
    function wronglist(){
        if(wrong){
            if(wrongArray.indexOf(guess)<0){
                
                wrongArray[wrongArray.length]=guess;
                numOfGuess--;
                
            }else{}
           
            
        }
        document.getElementById("numOf").innerHTML="GuessChance: "+ numOfGuess; 
        document.getElementById("wrongans").innerHTML="wrong guess: "+wrongArray.join(" ");
        wrong=true;
    }                
    function score(){
        if(answerArray.indexOf("_")==-1 && numOfGuess>=0){
            wins++;
            
            numOfGuess=10;
            wrongArray=[];
            document.getElementById("wrongans").innerHTML="wrong guess: "+wrongArray.join(" ");
            document.getElementById("wins").innerHTML="wins: "+ wins;
            document.getElementById("image").src="assets/images/"+word+".jpg"
            start();
        }else if(answerArray.indexOf("_")!=-1 && numOfGuess<1){
            losses++;
            numOfGuess=10;
            wrongArray=[];
            document.getElementById("wrongans").innerHTML="wrong guess: "+wrongArray.join(" ");
            document.getElementById("losses").innerHTML="losses: " + losses;
            
            start();
        }
    }          
           

        
    