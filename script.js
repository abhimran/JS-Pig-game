
let roundScore, activePlayer, scores, gameplaying;

//Calling init Function
init();

//Random Dice generator

document.querySelector(".btn-roll").addEventListener('click', function(){
    if(gameplaying){
        let dice = Math.floor(Math.random()*6)+1;
        diceDom = document.querySelector(".dice");
        diceDom.style.display = 'block';
        diceDom.src = 'dice-'+ dice+'.png';

        if(dice !== 1){
            roundScore += dice;
            document.querySelector("#current-"+activePlayer).innerHTML = roundScore;
        }else{
            nextplayer();
        }
    }
    
});


//Hold Button Action 

document.querySelector(".btn-hold").addEventListener('click', function(){
    if(gameplaying){
        scores[activePlayer] += roundScore;
        document.querySelector("#score-"+activePlayer).innerHTML = scores[activePlayer];
   
    

        if(scores[activePlayer] >=20){
            document.querySelector('#name-'+activePlayer).innerHTML = 'Winner!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gameplaying = false;
        
        }else{
            nextplayer();
        }
        document.querySelector(".dice").style.display= 'none';

    
    }
    
});

//Start New Game 
document.querySelector(".btn-new").addEventListener('click', init);


// ======== Function Start ========= //

// Next Player Function

function nextplayer(){
    if(activePlayer === 0){
        activePlayer =1;
    }else{
        activePlayer = 0;
    }
    roundScore =0;
    document.querySelector("#current-0").innerHTML = '0';
    document.querySelector("#current-1").innerHTML = '0';

    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');

    
}

//Initial Function
function init(){
    scores = [0, 0];
    roundScore =0;
    activePlayer =0;
    gameplaying = true;

    document.querySelector(".dice").style.display= 'none';

    document.querySelector("#score-0").innerHTML = '0';
    document.querySelector("#score-1").innerHTML = '0';
    document.querySelector("#current-0").innerHTML = '0';
    document.querySelector("#current-1").innerHTML = '0';
    document.querySelector("#name-0").innerHTML = 'Player 1';
    document.querySelector("#name-1").innerHTML = 'Player 2';
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');
}