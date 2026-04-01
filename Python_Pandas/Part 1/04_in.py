import pandas as pd

data = {
    "Name":["Vishal" , "Visvaas" , "Lokesh" , "Bhavesh"],
    "Age" :[18,19,20,21],
    "City":["Alwar","Grugram","Delhi","Jhunjhnu"]
}

df= pd.DataFrame(data)
print(df.info())