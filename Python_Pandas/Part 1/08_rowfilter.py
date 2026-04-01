import pandas as pd

data= {
    "Name": ["Ram","Shyam","Vinod","Anshul","Shivam","Satya","Thakur","Jagdesh"],
    "Age": [23,45,67,76,54,23,45,67],
    "Salary" : [40000,6000,8000,56000,7689,660000,6780,5600],
    "Performance_Score" :[45,67,89,78,56,45,676,6]
}

df = pd.DataFrame(data)

print("Employee With Salary Greater Than 50000")
high_salary = df[df["Salary"] > 50000]
print(high_salary)


print("Employee With Salary Greater Than 50000 And Age > 30")
condition = df[(df["Salary"] > 50000) & (df["Age"]>30)]
print(condition)


print("Employee With Age Greater Than 30 Or Performance > 50")
filter = df[(df["Age"]>30) | (df["Performance_Score"]>50) ]
print(filter)
