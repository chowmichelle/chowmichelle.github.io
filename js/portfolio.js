
function classic(){
	var background = document.querySelector('body'); 
 	background.style.backgroundColor = 'black'; 
  	background.style.color = 'white';

  	var navigation = document.querySelectorAll('nav > a'); // access <a> elements of primary navigation
  
    navigation[0].className = 'classic';
 	  navigation[1].className = 'classic'; 
  	navigation[2].className = 'classic'; 


	var header = document.querySelector('a > h1');
	header.className = 'classic';

  var link = document.querySelectorAll('section > div > div > a');
 link.className = '.classic';

  	var footer = document.querySelector('footer > p');
  	footer.className = 'classic';

	var text1 = document.getElementsByTagName("LI");

	for (var i = 0; i < text1.length; i++) {
    text1[i].style.color = "white";
    text1[i].style.fontFamily = "times new roman";
  }

  	var text2 = document.getElementsByTagName("P");
	for (var j = 0; j < text2.length; j++) {
    text2[j].style.color = "white";
    text2[j].style.fontFamily = "times new roman";
  }
	

	var text3 = document.getElementsByTagName("h2");
	for (var k = 0; k < text3.length; k++) {
    text3[k].style.color = "white";
    text3[k].style.fontFamily = "times new roman";
  }

  	var text4 = document.getElementsByTagName("h3");
	for (var l = 0; l < text4.length; l++) {
    text4[l].style.color = "white";
    text4[l].style.fontFamily = "times new roman";
  }

    var myTitle= document.querySelector(".title");
    myTitle.style.borderColor = "white";

    var myNav= document.querySelector(".navigation");
    myNav.style.borderColor = "white";

	var brandingBorder = document.querySelector(".branding-container");
  brandingBorder.style.borderColor = "white";

	var bookBorder = document.querySelector(".book-container");
	bookBorder.style.borderColor = "white";

	var bauhausBorder = document.querySelector(".bauhaus-container");
	bauhausBorder.style.borderColor = "white";

	var postcardBorder = document.querySelector(".postcard-container");
	postcardBorder.style.borderColor = "white";

	var ghibliBorder = document.querySelector(".ghibli-site");
	ghibliBorder.style.borderColor = "white";

	var musicBorder = document.querySelector(".music-site");
	musicBorder.style.borderColor = "white";

	var illustrationBorder = document.querySelector(".illustration-container");
	illustrationBorder.style.borderColor = "white";

	var myBtn = document.querySelector(".myButton");
    myBtn.style.display = "none";

  	var myBtn2 = document.querySelector(".myButton2");
    myBtn2.style.display = "block";
}


function refreshPage(){
    window.location.reload();
   }