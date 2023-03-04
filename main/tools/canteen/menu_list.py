import os

array = os.listdir("./assets/munch")

print("[")
for i in array:
    print("'",i, "',", sep="")
print("]")