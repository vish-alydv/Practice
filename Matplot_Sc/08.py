import matplotlib.pyplot as plt

plt.scatter([1,2,3,4] , [50,60,70,80] , color = "Green" , marker = "o" , label = "Student Data Class A" )

plt.scatter([1,2,3,4] , [55,44,75,85] ,color = "orange" , marker = "+" , label = "Student Data Class B" )
plt.xlabel("Number Of Hours")
plt.ylabel("Their Score")
plt.title("Class A Vs Class B")
plt.grid(True)
plt.show()