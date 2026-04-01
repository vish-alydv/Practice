import pandas as pd

data= {
    "Name": ["Ram",None,"Vinod","Anshul","Shivam","Satya","Thakur","Jagdesh"],
    "Age": [23,None,67,76,54,23,45,67],
    "Salary" : [40000,None,8000,56000,7689,660000,6780,5600],
    "Performance_Score" :[45,None,89,78,56,45,676,6]
}

df = pd.DataFrame(data)
print(df)


# df.fillna(0 , inplace = True)
# print(df)

df["Age"].fillna(df["Age"].mean(), inplace=True)
df["Salary"].fillna(df["Salary"].mean(), inplace=True)
print(df)