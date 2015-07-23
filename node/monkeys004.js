// Typewriter object
// holds string and it's length and an counter to the string
function Typewriter (string) {
        "use strict";
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
        this.story = string;
        this.counter = 0;
        this.best_count = 0;
        this.guess_count = 0;
        this.incomplete = true;
    };

//Adding method to Typewriter
// Returns a random letter of the alphabet
Typewriter.prototype.random_letter = function () {
    "use strict";
    return this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
};

Typewriter.prototype.guess = function () {
    "use strict";
    this.letter = this.random_letter();
    this.guess_count += 1;

    if (this.letter === this.story.charAt(this.counter)) {
        this.matched_advance();
    } else {
        this.counter = 0;
    }
};

// Called when a match is found, advances counter
Typewriter.prototype.matched_advance = function () {
    "use strict";
    // check to see if final letter matched, if so, mark as complete
    if (this.counter === this.story.length - 1) {
        this.incomplete = false;
    } else {
    // increase counter, increase best if applicable
    this.counter += 1;
        if (this.counter > this.best_count){
            this.best_count = this.counter;
            console.log(this.answer());
        }
    }
};


Typewriter.prototype.answer = function () {
    "use strict";

    if (this.incomplete){
        var story_so_far ="";
        for (var i = 0; i < this.best_count; i++){
            story_so_far = story_so_far + this.story.charAt(i);
        }
        return ("found " + story_so_far + " after " + this.guess_count + " guesses");

    } else {
        
        return ("found " + this.story + " after " + this.guess_count + " guesses.");
    }
    
};



// Main Program
var Monkey = [];
 Monkey[0] = new Typewriter("abcde");

while (Monkey[0].incomplete) {
    Monkey[0].guess();
}
console.log(Monkey[0].answer());

