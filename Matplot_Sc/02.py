import matplotlib.pyplot as plt

x = ["Monday","Tuesday","Wed","Thu","Fri"]

y = [12,34,20,44,14]

plt.plot(x,y)

plt.title("Bakery Sales This Week")

plt.xlabel("Day Of The Week")
plt.ylabel("Sales Of The Week")

plt.show()