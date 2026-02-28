import matplotlib.pyplot as plt

x = [1,2,3,4]
y = [10,20,25,15]

plt.subplot(1,2,1)  #1row 2 column 1st sublot
plt.plot(x,y)
plt.title("Line Chart")

plt.subplot(1,2,2)
plt.bar(x,y)
plt.title("Bar Chart")


plt.show()