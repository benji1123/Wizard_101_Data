let attacks=["ATTACKS","Thunder Snake","Lightning Bats","Storm Shark","Kraken","Triton","Stormzilla", "Storm Lord","Tempest","Sirens","Leviathan"];
let damage=[0,125,265,405,550,835,690,690,10000000,880,1030];

let blades=["BLADES","Storm Blade","Elemental Blade"]; 
let blade_mult = [0,1.30,1.35];

let traps = ["TRAPS","Storm Trap","Windstorm","Feint"];
let trap_mult = [0,1.25,1.2,1.7]

let deck = [blades, attacks, traps];	// modularize deck


//calculation variables
let attack = "";
let charm = [];
let base_damage = 0;
let multiplier = 1.81;  //base 81% increase


//BUTTONS....................................................................................................................................
for(let k=0; k<deck.length; k++) {

	let subdeck = deck[k];	// where SUBDECKS = blades, attacks, etc.
	// set TITLE of subdecks accordingly
	let title = document.createElement('h1');						
	title.textContent = subdeck[0];	title.classList.add('header'); 		//CSS	
	// CONTAINER for buttons
	let col = document.createElement('div');
	col.classList.add("col");

	// Populate Subdeck-Container with CARDS	
	for(let r=1; r<subdeck.length; r++) { 
		let card = document.createElement('button');	
		card.classList.add('card');							// CSS	
		let name_card = subdeck[r];	
		card.textContent = name_card;						// label cards

		if(k==1) //attack card
		{
			card.addEventListener('click', () => {
				base_damage = damage[r];
				attack = name_card;
			});

		}

		else if(k==0) //blades
		{
			card.addEventListener('click', () => {
				multiplier = multiplier + blade_mult[r];
				charm.push(name_card);
			});
		}

		else if(k==2) { //traps
			card.addEventListener('click', () => {
				multiplier = multiplier + trap_mult[r];
				charm.push(name_card);
			});
		}
		col.appendChild(card)								
	}
	container.append(title,col);									
}


// COMPUTE FUNCTION
let calculator = document.createElement('button');
calculator.textContent = "COMPUTE DAMAGE";
calculator.addEventListener('click', () => {

	//output data
	console.log(attack + "  "+charm);
	console.log(base_damage + " * " + multiplier);
	console.log(base_damage*multiplier);

	alert(attack + ", "+charm+"\n"+base_damage + " * " + multiplier+"\n= "+base_damage*multiplier);

	//reset calculator
	base_damage=0;
	multiplier=1.81;	//base 81% increase
	charmm=[];
});
container.append(calculator);