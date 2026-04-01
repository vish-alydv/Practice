import pandas as pd

data= {
    "Name": ["Ram","Shyam","Vinod","Anshul","Shivam","Satya","Thakur","Jagdesh"],
    "Age": [23,45,67,76,54,23,45,67],
    "Salary" : [40000,6000,8000,56000,7689,660000,6780,5600],
    "Performance_Score" :[45,67,89,78,56,45,676,6]
}

df = pd.DataFrame(data)
print(df)

df["Salary"] = df["Salary"] * 2
print(df) 