import matplotlib.pyplot as plt

scores = [22,32,12,67,45,65,90,87,78,66,87,98,33]

plt.hist(scores , bins=5 ,color = "purple", edgecolor="black")
plt.xlabel("Score Range")
plt.ylabel("Number of Students")
plt.title("Score Distribution Of Student")
plt.show()