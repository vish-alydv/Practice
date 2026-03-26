import random


subjects = ["Sharukh Khan", 
            "Virat Kohli " , 
            "Nirmala Sitharaman",
             
            "A Mumbai Cat",
            "A group Of Monkeys",
            "Prime Minister Modi",
            "Auto Rickshaw Driver From Delhi",
            ]



actions = [
    "Launches",
    "Cancels",
    "Dances With",
    "Eats",
    "Declares War On",
    "Orders",
    "Celebration"
]


places_of_things =[
    "at red fort",
    "During Ipl ",
    "India Gate",
    "Usa",
    "Putin",
    "Arjun"
]



while True :
    subject = random.choice(subjects)
    action = random.choice(actions)
    place = random.choice(places_of_things)

    headline  = f" Breaking News : {subject} {action} {place}"
    print("\n" + headline)


    user_input = input("Do You Want Another Headline ?? (yes/no ) " ).strip().lower()

    if user_input== "no":
        break


print("Thanks For Using The Fake Line Generator")