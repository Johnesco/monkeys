alpha = ("a".."z").to_a

unfinished = true
best_guess = "a"
counter = 0

puts
print best_guess

while (unfinished)

	streak = 0
	guess = alpha.sample 

	if (guess == alpha[0])
		on_streak = true

		while (on_streak) 
			if guess == alpha[streak]
				if (guess > best_guess)
					best_guess = guess
					print guess
				end
				streak = streak + 1 
				if (guess == "z")
					puts ; puts "amazing!"
					exit
				end
				guess = alpha.sample
			else
				on_streak = false
			end
		end

	end

end 
