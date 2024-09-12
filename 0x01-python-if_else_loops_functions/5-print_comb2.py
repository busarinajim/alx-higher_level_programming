#!/usr/bin/python3
for i in range(100):
    if i <= 98:
        print(f"{i // 10}{i % 10}", end=", ")
    else:
        print("99")

