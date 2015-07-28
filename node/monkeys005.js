'use strict';
var util = require( 'util' );

function Alphabet ( alphabet ) {
        this.alphabet = alphabet || "abcdefghijklmnopqrstuvwxyz";
        this.alphabetSize = this.alphabet.length;
};

Alphabet.prototype.rand = function () {
    return this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
};

function Monkey( story, alphabet ) {
    this.alphabet = alphabet || new Alphabet();
    this.story = story.toLowerCase();

    this.consecutiveMatches = 0;
    this.recordNumConsecutiveMatches = 0;
    this.numGuesses = 0;
    this.isComplete = false;
};

Monkey.prototype.guess = function() {
    this.numGuesses++;

    var letter = this.alphabet.rand();
    if ( letter === this.story[ this.consecutiveMatches ] ) {
        this.matchFound();
    } else {
        this.consecutiveMatches = 0;
    }
};

Monkey.prototype.matchFound = function() {
    this.consecutiveMatches++

    if(this.consecutiveMatches > this.recordNumConsecutiveMatches) {
        this.recordNumConsecutiveMatches = this.consecutiveMatches;
        console.log( this.answer() );
    }

    // if final letter matched, mark complete
    if ( this.consecutiveMatches === this.story.length ) {
        this.isComplete = true;
    }
};

Monkey.prototype.answer = function() {
    return util.format( 'found \'%s\' after %s guesses', this.story.substring( 0, this.recordNumConsecutiveMatches), (this.numGuesses));
}


// Main

var monkey = new Monkey( 'abcde' );

while ( !monkey.isComplete ) {
    monkey.guess();
}

