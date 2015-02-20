// Typewriter object holds string
// and it's length and an index to the string
function typewriter(string)
{
	this.story = string.split("");
	this.length = this.story.length;
	this.index = 0;
	this.best_index = 0;
	this.incomplete = true;

	this.randomIndex = function ()
	{
		return Math.floor(Math.random() * this.length)
	};

	this.matched = function()
	{
		// check to see if final letter matched.
		if (this.index == this.length-1)
		{
			console.log("You win!");
			this.incomplete = false;
		};

		// increase index
		this.index++;
	};

	this.mismatched = function()
	{
		// else, check to see if new best index reached, reset index
		if (this.index > this.best_index)
		{
			this.best_index = this.index;
			console.log(this.best_index);
		};
		this.index = 0;
	};

// This function guesses a letter. If it matches the index is incremented for
// the next letter. If it doesn't match, the index is reset and the best
// index increased if needed.

	this.guess = function()
	{
		// If the letter matches random guess
		this.letter = this.story[this.randomIndex()];

		if (this.letter == this.story[this.index])
		{
			this.matched();
		} else {
			this.mismatched();
		};
	};
};


// Create new object, send it "abc"
var abc = new typewriter("abcdefgh");

while (abc.incomplete){
	abc.guess();
};
