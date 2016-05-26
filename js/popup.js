'use strict';
  
 function clickHandler(){


  	var urlField = document.querySelector('url');

  	if(urlField!=null){
  		url = urlField.value;
  	}
  	else{
  		alert("Empty url field!");
  		console.log("Empty url field!");

  	}
    	
    GitZip.zipRepo(url);
  }
  	

document.addEventListener('click',function () {
	var button = document.getElementById('submit');
	if(button){
  		button.addEventListener('click', clickHandler);
  	}else{
  		console.log("button is null");
  	}
  })