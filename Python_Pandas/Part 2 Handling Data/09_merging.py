
import pandas as pd

df_customers = pd.DataFrame({
    "CustomerID" : [1,2,3],
    "Name" : ["Ramesh ","Suresh","Kaplesh"]
})

df_orders = pd.DataFrame({
    "CustomerID" : [1,2,4],
    "OredrAmount" :[450,250,300]
})

df_merged = pd.merge(df_customers,df_orders , on="CustomerID",how="inner")
print("Inner")
print(df_merged)


df_merged = pd.merge(df_customers,df_orders , on="CustomerID",how="outer")
print("Outer")
print(df_merged)

df_merged = pd.merge(df_customers,df_orders , on="CustomerID",how="left")
print("Left")
print(df_merged)

df_merged = pd.merge(df_customers,df_orders , on="CustomerID",how="right")
print("Right")
print(df_merged)

