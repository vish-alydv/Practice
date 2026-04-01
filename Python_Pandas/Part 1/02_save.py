import pandas as pd

data = {
    "Name":["Vishal" , "Visvaas" , "Lokesh" , "Bhavesh"],
    "Age" :[18,19,20,21],
    "City":["Alwar","Grugram","Delhi","Jhunjhnu"]
}

df= pd.DataFrame(data)
print(df)

# df.to_csv("output.csv" , index = False)
# df.to_excel("output.xlsx" )
df.to_json("output.json" ,index = False)