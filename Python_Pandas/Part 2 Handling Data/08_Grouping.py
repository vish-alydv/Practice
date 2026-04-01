import pandas as pd

data = {
    "Name" : ["Arun","Varun","Tarun","Karun","Parun"],
    "Age" : [14,20,6,56,20,],
    "Salary" : [1000,30000,2000,6000,34440]
}

df= pd.DataFrame(data)
grouped = df.groupby("Age")["Salary"].sum()
print(grouped)


group = df.groupby(["Age","Name"])["Salary"].sum()
print(group)