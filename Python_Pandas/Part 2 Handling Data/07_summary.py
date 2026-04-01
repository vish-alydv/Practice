import pandas as pd

data = {
    "Name" : ["Arun","Varun","Tarun"],
    "Age" : [14,20,6],
    "Salary" : [1000,30000,2000]
}

df= pd.DataFrame(data)


avg_salary = df["Salary"].mean()
print(avg_salary)