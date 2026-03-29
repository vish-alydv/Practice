import pandas as pd

data= {
    "Name": ["Ram","Shyam","Vinod","Anshul","Shivam","Satya","Thakur","Jagdesh"],
    "Age": [23,45,67,76,54,32,45,67],
    "Salary" : [40000,6000,8000,5600,7689,66000,6780,5600]
}

df = pd.DataFrame(data)
print("Sample DataFrame")
print(df)
print("Names (Single Column Return Series)")
name = df["Name"]
print(name)


print("\n Subset With Name And Salary")
subset = df[["Name","Salary"]]
print(subset)