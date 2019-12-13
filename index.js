Languages = [
	"Français",
	"English",
	"Yogurt",
]

Topics = [
	"Love",
	"Sport",
	"Kebab",
]

Accords = [
	"C",
	"D",
	"E",
	"F",
	"G",
	"A",
	"B",
]

function getRandomValue( array ) {
	return array[ Math.floor(Math.random() * Math.floor( array.length )) ];
}

function spin( element , array ,  totalSpinDuration , spinFrequency ){
	if( totalSpinDuration <= 0 )
		return;
	
	element.innerHTML = getRandomValue( array );
	
	setTimeout(function(){ 
		spin( element , array , totalSpinDuration - spinFrequency , spinFrequency); 
	}, spinFrequency );
}

document.getElementById("generateButton").addEventListener("click", function(){
	var spinChords = document.getElementsByClassName("spinChord");
	var languageSpin = document.getElementById("languageSpin");
	var topicSpin = document.getElementById("topicSpin");
	
	spin( languageSpin, Languages ,500 , 10);
	spin( topicSpin, Topics ,500 , 10);
	
	for(var i=0 ; i < spinChords.length ; i++)
		spin( spinChords[i], Accords, 500 , 10 );
});
