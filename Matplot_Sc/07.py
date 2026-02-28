import matplotlib.pyplot as plt

hours = [1,2,3,4,5,6,7,8]
score = [45,50,6,34,56,98,56,78]

plt.scatter(hours,score, color = "Green" , marker = "o" , label = "Student Data" )
plt.xlabel("Number Of Hours")
plt.ylabel("Their Score")
plt.title("Marks Vs Study Hours")
plt.grid(True)
plt.show()