import pandas as pd


df_Region1 = pd.DataFrame({
    "CustumerId" : [1,2],
    "Name" : ["Gopal","Haati"]
})


df_Region2 = pd.DataFrame({
    "CustumerId" : [3,4],
    "Name" : ["Goki","Hari"]
})


df_concat = pd.concat([df_Region1 , df_Region2] , ignore_index=True)
print(df_concat)

df_concat = pd.concat([df_Region1 , df_Region2] ,axis = 1, ignore_index=True)
print(df_concat)