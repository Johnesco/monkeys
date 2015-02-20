// Typewriter object holds string
// and it's length and an index to the string
function typewriter(string)
{
	this.string = string;
	this.story = this.string.split("");
	this.length = this.story.length;
	this.index = 0;
	this.best_index = 0;
	this.guess_count = 0;
	this.incomplete = true;

// Returns a random index of the story
	this.randomIndex = function ()
	{
		return Math.floor(Math.random() * this.length)
	};

// Called when a match is found
// advances index
	this.matched = function()
	{
		// check to see if final letter matched.
		if (this.index == this.length-1)
		{
			this.incomplete = false;
		};

		// increase index
		this.index++;
	};

// Called on a mismatch
// Sets best match
// resets index
	this.mismatched = function()
	{
		this.index = 0;
	};

// This function guesses a letter. If it matches the index is incremented for
// the next letter. If it doesn't match, the index is reset and the best
// index increased if needed.

	this.guess = function()
	{
		// Pick a random letter from story
		this.letter = this.story[this.randomIndex()];
		// increment guess
		this.guess_count++;

		// If letter matches current index call matched()
		// else call mismatched()
		if (this.letter == this.story[this.index])
		{
			this.matched();
		} else {
			this.mismatched();
		};

		// check to see if new best index reached,
		// print latest streak and guesses taken
		if (this.index > this.best_index)
		{
			console.log(this.story[this.best_index] + " " + this.guess_count + " guesses.");
			this.best_index = this.index;

		};
	};
};

// Create new typewriter object, send it a "story"
var Monkey1 = new typewriter("abcdefg");

while (Monkey1.incomplete){
		Monkey1.guess();
	}

console.log("Monkey1 printed " + Monkey1.string + " after " + Monkey1.guess_count + " guesses.");
