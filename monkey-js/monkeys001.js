// Typewriter object holds string
// and it's length and an index to the string
function typewriter(string)
{
	this.story = string.split("");
	this.length = this.story.length;
	this.index = 0;
	this.best_index = 0;
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
		// Assign random guess to object's "letter"
		this.letter = this.story[this.randomIndex()];

		// If letter matches current index call matched()
		// else call mismatched()
		if (this.letter == this.story[this.index])
		{
			this.matched();
		} else {
			this.mismatched();
		};

		//check to see if new best index reached, reset index
		if (this.index > this.best_index)
		{
			console.log(this.story[this.best_index]);
			this.best_index = this.index;

		};
	};
};


// Create new object, send it "abc"
var abc = new typewriter("abcdef");

while (abc.incomplete){
	abc.guess();
};

console.log("You win");
