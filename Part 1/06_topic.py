import pandas as pd

data= {
    "Name": ["Ram","Shyam","Vinod","Anshul","Shivam","Satya","Thakur","Jagdesh"],
    "Age": [23,45,67,76,54,32,45,67],
    "Salary" : [40000,6000,8000,5600,7689,66000,6780,5600]
}

df = pd.DataFrame(data)
print(df)
print(f"Shape :  {df.shape}")
print(f"Columns : {df.columns}")