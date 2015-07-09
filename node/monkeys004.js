// Typewriter object
// holds string and it's length and an counter to the string
var Typewriter = function (string) {
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
            console.log(this.current_answer());
        }
    }
};


Typewriter.prototype.missmatched_reset = function () {
    "use strict";
    this.counter = 0;
};

Typewriter.prototype.guess = function () {
    "use strict";
    this.letter = this.random_letter();
    this.guess_count += 1;

    if (this.letter === this.story.charAt(this.counter)) {
        this.matched_advance();
    } else {
        this.missmatched_reset();
    }
};

Typewriter.prototype.current_answer = function () {
    "use strict";
    var story_so_far ="";

    for (var i = 0; i < this.best_count; i++){
        story_so_far = story_so_far + this.story.charAt(i);
    }
    return ("found " + story_so_far + " after " + this.guess_count + " guesses");
};

Typewriter.prototype.finalAnswer = function () {
    "use strict";
    return ("found " + this.story + " after " + this.guess_count + " guesses.");
};


// Main Program
var Monkey1 = new Typewriter("abcdefg");

while (Monkey1.incomplete) {
    Monkey1.guess();
}

console.log(Monkey1.finalAnswer());

