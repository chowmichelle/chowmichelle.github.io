let day = new Date().getDay();
let quote;
let source;

console.log('Day:' + day);

function quoteOfTheDay(){
	if(day == 0){
		quote = '“We each need to find our own inspiration. Sometimes it’s not easy.”';
		source = '— Kiki’s Delivery Service (1989)';
	}else if(day == 1){
		quote = '“Life is suffering. It is hard. The world is cursed. But still you find reasons to keep on living.”';
		source = '— Princess Mononoke (1997)';
	}else if(day == 2){
		quote = '“Always believe in yourself. Do this and no matter where you are, you will have nothing to fear.”';
		source = ' — The Cat Returns (2002)';
	}else if(day == 3){
		quote = '“It’s funny how you wake up each day and never really know if it’ll be one that will change your life forever.”';
		source = '— The Secret World of Arrietty (2010)';
	}else if(day == 4){
		quote = '“No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love!”';
		source = ' — Castle in the Sky (1986)';
	}else if(day == 5){
		quote = '“Life, as they say, has its ups and downs. At times, the waves may taunt you, tossing you in their swells. But take heart. It’s hard to stick with it and make it on your own. But even a couple of losers can survive most things if they’re together.”';
		source = '—  Neighbors the Yamadas (1999)';
	}else{
		quote = '“Just follow your heart, and keep smiling.”';
		source = '— Kiki’s Delivery Service (1989)';
	}


	quoteText = document.getElementById('quoteText');
	quoteText.textContent = quote;

	sourceText = document.getElementById('sourceText');
	sourceText.textContent = source;
}


//Image opacity and shifting text

let films = document.querySelectorAll('div.film-image');
console.log(films);
let filmText = document.querySelectorAll('a.film');
console.log(filmText);

let image = document.querySelectorAll('img.image');
console.log(image);

// console.log(images);



function changeOpacity() {
  for (i = 0; i < films.length; i++){
	 films[i].style.opacity = '0.4';
	 this.style.opacity = '1'; 
	}
  for(i = 0; i < filmText.length; i++){
  	this.style.fontSize = 'xx-large'; 
	}
}

function resetOpacity() {
  for(i = 0; i < films.length; i++){
  films[i].style.opacity = '1';
  } 
}

for(i =0; i < films.length; i++){
	films[i].addEventListener('mouseover', changeOpacity);
	films[i].addEventListener('mouseout', resetOpacity);
}



function textSizeReset(){
	for(i = 0; i< filmText.length; i++){
	this.style.fontSize = 'medium';
	}
}

for(i =0; i < filmText.length; i++){
	films[i].addEventListener('mouseout', textSizeReset);
}



