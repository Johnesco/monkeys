var str = "abcdefghijklmnopqrstuvwxyz"
var alpha = str.split("");

var unfinished = true;
var best_guess = "a";
var counter = 0;

print (best_guess);

while (unfinished){
	var streak = 0;
	var guess = alpha[Math.floor(Math.random() * alpha.length)];

	if (guess === alpha[0]){
		var on_streak = true;

		while (on_streak){

			if (guess === alpha[streak]){

				if (guess > best_guess){
					best_guess = guess;
					print (guess);
				};

				streak++;

				if (guess === "z"){ print ("amazing!");};

				guess = alpha[Math.floor(Math.random() * alpha.length)];

			} else {
				on_streak = false;

			};
		};
	};
}; // end while
