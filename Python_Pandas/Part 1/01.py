import pandas as pd

# read data from csv file into dataframe

df = pd.read_csv("sales_data_sample.csv" , encoding="latin1")  
# encoding="utf8"
# df = pd.read_excel("sales_data_sample.csv" ) for excel file
# df = pd.read_json ("sales_data_sample.csv" ) for json  file


# gcsfs fo reading data online

print(df)