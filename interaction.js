
//CONTAINER for g.u.i. 
let container = document.getElementById('container');	

//DATA..................................... .................................................................................................
let attacks=["ATTACKS","Thunder Snake","Lightning Bats","Storm Shark","Kraken","Triton","Stormzilla", "Storm Lord","Tempest","Sirens"];
let shields=["SHEILDS","Storm Shield","Thermic Shield","Dream Shield"];
let blades=["BLADES","Storm Blade","Elemental Blade"]; 
let traps = ["TRAPS","Storm Trap","Feint"];
let deck = [blades, attacks, traps, shields];	// modularize deck

let HISTORY = [];				// TEMP STORAGE 			


//BUTTONS....................................................................................................................................
for(k=0; k<deck.length; k++) {

	let subdeck = deck[k];	// where SUBDECKS = blades, attacks, etc.
	// set TITLE of subdecks accordingly
	let title = document.createElement('h1');						
	title.textContent = subdeck[0];	title.classList.add('title'); //CSS	
	// CONTAINER for buttons
	let col = document.createElement('div');
	col.classList.add("col");

	// Populate Subdeck-Container with CARDS	
	for(r=1; r<subdeck.length; r++) { 
		let card = document.createElement('button');		
		let name_card = subdeck[r];	
		card.textContent = name_card;						// label cards

		card.addEventListener('click', () => {			
			HISTORY.push(name_card);						// add card to history 
			console.log(HISTORY);
		});
		col.appendChild(card)								
	}
	container.append(title,col);									
}


// DATA TRANSFER....................................................................................................................................

// MODULARIZE DATA  
let pusher = document.createElement('button');
pusher.textContent = "PUSH";

let DISPLAY = document.createElement('ol');		// store session data

// PUSH BUTTON
pusher.addEventListener('click', () => {
	// 
	let temp = document.createElement('li');
	temp.textContent = HISTORY;
	DISPLAY.appendChild(temp);
	HISTORY = [];					// reset data variable
});

container.append(pusher, DISPLAY);