import os

array = os.listdir("../assets/stat/")

print("[")
for i in array:
    print("'",i, "',", sep="")
print("]")