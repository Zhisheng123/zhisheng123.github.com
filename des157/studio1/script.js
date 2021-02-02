(function(){
    'use strict';
    const myForm = document.querySelector('#myForm');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit',function(event){
        event.preventDefault();

		let name = document.querySelector('#name').value;
		let time = document.querySelector('#time').value;
		let verb = document.querySelector('#verb').value;
		let friend = document.querySelector('#friend').value;
		let meat = document.querySelector('#meat').value;
		let teacher = document.querySelector('#teacher').value;
		let mythical = document.querySelector('#mythical').value;
		let loginDiv =  document.querySelector('#login');
		loginDiv.style.display="none";
	 
	
		let myText = `One beautiful winter morning ${name}woke me up at ${time}.
		It was just near the end of the winter and I'm about to get up for ${verb}
		exercise . ${friend}said “Wake up ${meat}!This is my first quarter at UC 
		Davis! Let’s get going because my new professor${teacher}is really a 
		${mythical}.`;   

		madlib.innerHTML = myText;

		if ( name && time && verb && friend && meat && teacher && mythical){
			let myText = `One beautiful winter morning ${name}woke me up at ${time}.
			It was just near the end of the winter and I'm about to get up for ${verb}
			exercise . ${friend}said “Wake up ${meat}!This is my first quarter at UC 
			Davis! Let’s get going because my new professor${teacher}is really a 
			${mythical}.`;      
		}
		else {
            let myText = "Please give me words so I can make you Mad Libs !";
        }
  
    });

})();