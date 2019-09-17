
        var WORDS=[
                "earth",
                "jupiter",
                "mars", 
                "neptune",
                "pluto",
                "saturn",
                "uranus",
                
                "mercury",
                "venus"

            ];
        const paragraph=[
                
                    `Mercury is the smallest planet in our solar system and nearest to the Sun, 
                    It only slightly larger than Earth's Moon. From the surface of Mercury,
                     the Sun would appear more than three times as large as it does when viewed from Earth, 
                     and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun,
                      Mercury is not the hottest planet."`,
                    `Venus is the second planet from the Sun and our closest planetary neighbor. 
                    Similar in structure and size to Earth, Venus spins slowly in the opposite direction 
                    from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, 
                    making it the hottest planet in our solar system with surface temperatures hot enough 
                    to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.`,
                    `Earth is the third planet from the Sun, and the only place we know of so far that’s inhabited
                     by living things. While Earth is only the fifth largest planet in the solar system, 
                     it is the only world in our solar system with liquid water on the surface. Just slightly larger 
                     than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are 
                     made of rock and metal.`,
                    `Mars is the fourth planet from the Sun, it is a dusty, cold, desert world with a very thin atmosphere.
                    This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes,
                     evidence of an even more active past.
                    Mars is one of the most explored bodies in our solar system, and it's the only planet where we've 
                    sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and 
                    one lander on the surface and another rover under construction here on Earth. India and ESA also have
                     spacecraft in orbit above Mars.`,
                     `Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – 
                     more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually
                      cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. 
                      Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.`,
                    `Saturn is the sixth planet from the Sun and the second largest planet in our solar system. 
                    Adorned with a dazzling system of icy rings, Saturn is unique among the planets. 
                    It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. 
                    Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.`,
                    `Uranus is the seventh planet from the Sun with the third largest diameter in our solar system,
                     It is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 
                     small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. 
                     This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.`,
                     `Neptune is Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.
                      More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. 
                      In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.
                     Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. 
                     The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.`,
                     `Pluto is orbited by five known moons, the largest of which is Charon. Charon is about half the size of Pluto itself, 
                     making it the largest satellite relative to the planet it orbits in our solar system. Pluto and Charon are often 
                     referred to as a "double planet."`
                
            ]


        //initialize and declare variables
        var word="";    
        var answerArray=[];
        var wrongArray=[];
        var wrong=true;
        var guess=0;
        var losses=0;
        var wins=0;
        var numOfGuess=10;
        var planetdescription='';
        var arrword = "";
             
        //call  start function
        
        if((losses+wins)<= "10") {
            start();
            var arrword1= word;
             arrword = arrword1.charAt(0).toUpperCase() + arrword1.slice(1);
            console.log(arrword1)
            paragraph.forEach(item => {
                
                
              console.log(item[0])
                
               if(item[0] == arrword[0] && item[1]== arrword[1]){
                   planetdescription= item;
                   
               }
            })
        
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
        document.getElementById("numOf").innerHTML="Guess Chance: "+ numOfGuess; 
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
        document.getElementById("numOf").innerHTML="Guess Chance: "+ numOfGuess; 
        document.getElementById("answer-array").innerHTML="Word length: "+answerArray.join(" ");
        document.getElementById("restart-button").innerHTML = "<button onclick= 'restart()'>Reset</button";
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
            document.getElementById("image").src="assets/images/"+word+".jpg";
            // console.log(planetdescription)
            document.getElementById("image-description").innerHTML="<h2>"+ arrword+ "</h2>"+"<p>" + planetdescription +"</p>";
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
    function restart(){
        location.reload(true);
    }    
           

        
    