import numpy as np
def khoangcach(x,y):
    return np.power(x[0]-y[0],2)+np.power(x[1]-y[1],2)
bangdiem=[[85,80],[60,70],[70,50],[70,90],[75,85]]
lop=[1,0,0,1,1]
Anh=[70,70]
kcach=[]
n=len(bangdiem)
for i in range (n):
    kcach.append(khoangcach(Anh,bangdiem[i]))

for i in range(0,n-1):
    for j in range(i+1,n):
        if(kcach[i]>kcach[j]):
            tg=kcach[i]
            kcach[i]=kcach[j]
            kcach[j]=tg

            tg = lop[i]
            lop[i] = lop[j]
            lop[j] = tg
print("Khoảng cách sau khi sắp xếp là:")
print(kcach)
k=3
print("Chọn k=",k)
dem1=0
dem2=0
for i in range(k):
    if lop[i]==0:
        dem1=dem1+1
    else:
        dem2 = dem2+ 1
print("Số học sinh trượt:",dem1)
print("Số học sinh đỗ:",dem2)
if dem2>dem1:
    print("Anh thi đỗ")
    dem1=dem2=0
else:
    print("Anh thi trượt")
