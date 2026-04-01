# interperatlation
# liner
# polynomial
# time

import pandas as pd

data= {
    "Time":[1,2,3,4,5],
    "Value": [10,20,None,40,None]
}

df = pd.DataFrame(data)
print("Before Interpolation")
print(df)

df["Value"]=df["Value"].interpolate(method="linear")
print("After Interpolation")
print(df)