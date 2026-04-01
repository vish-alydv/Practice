import pandas as pd

data = {
    "Name" : ["Arun","Varun","Tarun"],
    "Age" : [14,20,6],
    "Salary" : [1000,30000,2000]
}

df= pd.DataFrame(data)
df.sort_values(by = "Age" , ascending= False ,inplace=True)
print("Sorted Age By Descending")
print(df)
df.sort_values(by = "Age" , ascending= True ,inplace=True)
print("Sorted Age By Ascending")
print(df)