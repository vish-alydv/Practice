import pandas as pd

df = pd.read_csv("sales_data_sample.csv" , encoding="latin1")  

print("Dispaly 10 Rows Of First")
print(df.head(10))

print("Dispaly 10 Rows Of Last")
print(df.tail(10))