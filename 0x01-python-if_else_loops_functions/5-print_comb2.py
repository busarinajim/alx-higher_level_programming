#!/usr/bin/python3
for i in range(100):
    if i == 99:
        print("{}".format(i))
    else:
        print(f"{i // 10}{i % 10}", end=", ")
