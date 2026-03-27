History_File = "02_history.txt"

def show_history():
    file = open(History_File,"r")
    lines = file.readlines()
    if len(lines) == 0:
        print("No History Found!")
    else:
        for line in reversed(lines):
            print(line.strip())
    file.close()

def clear_history():
    file = open(History_File,"w")
    file.close()
    print("History Cleared")

def save_to_history(equation , result):
    file = open(History_File,"a")
    file.write(equation + "=" + str(result) + "\n")
    file.close()


def calculate(user_input):
    parts = user_input.split()
    if len(parts) != 3:
        print("Invalid Input ")
        return
    

    num1 = float(parts[0])
    op = parts[1]
    num2 = float(parts[2])


    if op == "+" :
        result = num1 + num2
    elif op == "-" :
        result = num1 - num2
    elif op == "*" :
        result = num1*num2
    elif op == "/" :
        if num2 == 0:
            print("Cannot Divide by Zero")
            return
        result = num1/num2
    else : 
        print("Invalid Operstion ! Only Use  + , - ,* , /")
        return
    
    if int(result) == result:
        result = int(result)
    print("Result : ", result)
    save_to_history(user_input , result)



def main():
    print("---Simple Calculator (Type History , Clear , Exit)")
    while True:
        user_input = input ("Enter Calculation (+ - * / ) or Command (History,Clear,Exit) : ")
        if user_input == "Exit" :
            print("Goodbye")
            break
        elif user_input == "history":
            show_history()
        elif user_input == "clear":
            clear_history()
        else:
            calculate(user_input)

main()