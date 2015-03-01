// Typewriter object
// holds string and it's length and an counter to the string
var Typewriter = function(string){
	this.string = string;
	this.story = string.split("");
	this.length = this.story.length;
	this.alphabet = ("abcdefghijklmnopqrstuvwxyx").split("");
	this.counter = 0;
	this.best_count = 0;
	this.guess_count = 0;
	this.incomplete = true;
};

// Returns a random letter of the alphabet
Typewriter.prototype.randomcounter = function(){
	return Math.floor(Math.random() * this.alphabet.length)
};
	

// Called when a match is found
// advances counter
Typewriter.prototype.correct = function(){
	// check to see if final letter matched.
	if (this.counter === this.length-1)
	{
		this.incomplete = false;
	}

	// increase counter
	this.counter++;
};


Typewriter.prototype.incorrect = function(){
	this.counter = 0;
};


Typewriter.prototype.guess = function(){
	this.letter = this.alphabet[this.randomcounter()];
	this.guess_count++;

	if (this.letter === this.story[this.counter]){
	    this.correct();
	} else { 
	    this.incorrect();
	}

	// check to see if new best counter reached,
	// print latest streak and guesses taken
	if (this.counter > this.best_count){

		//loop out how much has been found
		var discovered = "";
		for (var i=0; i <= this.best_count; i++){
			discovered+= this.story[i];
		}

		console.log('"' + discovered + '"' + " string discovered after " + this.guess_count + " guesses.");
		this.best_count = this.counter;
	}
};

Typewriter.prototype.finalAnswer = function(){
	return ("Monkey1 printed " + this.string + " after " + this.guess_count + " guesses.");
};


// Create new typewriter object, send it a "story"
var Monkey1 = new Typewriter("hellow");

while (Monkey1.incomplete){
	Monkey1.guess();
}

console.log(Monkey1.finalAnswer());
