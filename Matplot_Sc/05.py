import matplotlib.pyplot as plt

regions = ["North","South","East","West"]
revenue = [3000,200,3090,2346]

plt.pie(revenue, labels=regions , autopct="%1.1f%%",colors = ["gold","skyblue", "lightgreen","coral"])
plt.title("Revenue Contribution By Region")
plt.show()