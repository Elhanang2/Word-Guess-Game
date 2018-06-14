//list of words for the player with in an array
        var WORDS=["jupiter",
                "mars", 
                "neptune",
                "pluto",
                "saturn",
                "uranus"
              ]; 
        //variable initialization and defining    
        var wins=0;
        var losses=0;
        var y="";
        var guesschance=10;
        var remaining;
        var wrong=true;
        var remainingLetter=0;       
        var  answerArray=[];
        var word="";
        var wrongletters=[];   
        var showmessage="";
        //input users guess
            var guess=document.getElementById("answer-array");
            document.onkeyup = function() {
            
                //get guess from player
                guess= event.key;
        
            guessone(guess,word);
        
                
                var html =

                "<p>remaining number of letters : " + remainingLetter + "</p>" +
                "<p> " + y + "</p>" +
                "<p>guess chance: " + guesschance + "</p>" +
                "<p>guess: " + guess + "</p>" +
                "<p>answer array: " + answerArray.join(" ") + "</p>" +
                "<p>wins: " + wins + "</p>" +
                "<p>losses: " + losses + "</p>" +
                "<p>wrong letters: " + wrongletters.join(" ") + "</p>";
          
                // Set the inner HTML contents of the #game div to our html string
                document.querySelector("#game").innerHTML = html;
                
            }
        
    ;
    //initial function to randomly pick the word and generate underscore array
        function empityArray(){
             //pick random word
             word=WORDS[Math.floor(Math.random()*WORDS.length)];
             remainingLetter=word.length;
            //empityArrayize the answer array 
            for(var i=0; i<word.length; i++){
                answerArray[i]="_";
                //wrongletters[i]=" "
                 //console.log("hi");
                //document.getElementById("answer").innerHTML=answerArray.join(" ");
            }
        }
            
        
        
        // function to check  user input and give the required output  
        function guessone(){
            //to check if user finish the word and to store the guess in the answer array list 
            if(guesschance>0 && remainingLetter!=0){
                wrong=true;
                guesschance--;
                //update the game with the guess
                for(var i=0; i<word.length; i++){
                    if(word[i]===guess){
                        answerArray[i]=guess;
                        wrong=false;
                        remainingLetter--;
                        
                    }
                    else{}
                }            
                 //to check if the user guess is wrong and put the wrong lettrs in an array             
                if(wrong){
                    for(var k=0; k<=wrongletters.length; k++){
                        if(wrongletters[k]==guess){
                            wrongletters[k]=guess;
                            
                        }
                            
                    }
                    wrongletters[wrongletters.length+1]=guess; 
                    
                }
             
            } 
             //to check remaining letter and guess chance and determine if the user win   
             else   if(remainingLetter===0 && guesschance>=0){
                 
                    wins++;
                    guesschance=10;
                    answerArray=[];
                    empityArray();
                    remainingLetter=word.length;
                    guessone();
                //to check remaining letters and guess chance to determine if the user losses
                }else if(guesschance<=0 && remainingLetter>=0){
                    losses++;
                     y="the word was "+word;
                    guesschance=10;
                    answerArray=[];
                    empityArray();
                    remainingLetter=word.length;
                    guessone();
                    
                    
                    
                }
                  
            
              
        }
    
        

        