import random

easy_words = ["apple" , "train " , "tiger" ,"money", "disco"] 
medium_words = ["apple" , "train " , "tiger" ,"money", "disco"] 
hard_words = ["apple" , "train " , "tiger" ,"money", "disco"] 



print("Welcome To the Password Guessing Game")
print("Chose a Difficulty Level : Easy , Medium or Hard")


level = input("Enter Difficulty :  ").lower()
if level == "easy":
    secret = random.choices(easy_words)

elif level == "medium":
    secret == random.choice(medium_words)


elif level == "hard":
    secret == random.choice(hard_words)

else:
    print("Invalid Choices. Defaultinh to Easy Level")


attempts = 0
print("\nGuess The Secret Password")


while True:
    guess = input("Enter your guess : ").lower()
    attempts += 1

    if guess == secret:
        print(f"Congratulation ! You Guessed it in {attempts} attempts")
        break

    hint = ""

    for i in range(len(secret)):
        if i < len(guess) and guess[i] == secret[i]:
            hint += guess[i]
        else:
            hint += ""

    print("Hint :" ,hint)

print("Game Over")