s = input()
a = list()
for i in range(26):
    a.append(chr(i+97))
for i in a:
    print(s.find(i), end=' ')
