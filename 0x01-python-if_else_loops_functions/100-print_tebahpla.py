#!/usr/bin/python3

d = 0
for c in range(ord('z'), ord('a') - 1, -1):
    print("{}".format(chr(c - d)), end="")

    if d == 0:
        d = 32
    else:
        d = 0
