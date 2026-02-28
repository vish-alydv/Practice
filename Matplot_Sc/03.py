import matplotlib.pyplot as plt

months = [1,2,3,4,5]
sales = [23,45,64,22,12]

plt.plot(months , sales , color ="blue",linestyle="--", linewidth = "2"
         , marker = "o", label = "2025 label data")

plt.legend(loc = "upper left", fontsize = 10)
plt.grid(color = "red", linestyle=":")
plt.show()
