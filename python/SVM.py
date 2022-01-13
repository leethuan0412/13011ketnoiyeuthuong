import numpy as np
import matplotlib.pyplot as plt
from pandas import read_csv
import os
#gọi file
file= os.getcwd() + '\gianha.csv'
tenCot = ['dientich', 'chieucao','n']
duLieu = read_csv(file, names=tenCot)
X1 = duLieu.values
X=X1[:,:2]
#2 lớp
group1=[]
group2=[]
for i in range (len(X1)):
    for j in range(1):
        if(X1[i][2]=="yes"):
            h=(X1[i][0]+X1[i][1])
            group1.append(h)
        elif (X1[i][2]=="no"):
            h1=(X1[i][0]+X1[i][1])
            group2.append(h1)
group1 = [e for e in group1 if e]
group2= [e for e in group2 if e]
#tím 2 điểm gàn siêu phẳng nhất
min_g1=group1[0]
for i in range(len(group1)):
    if group1[i]<min_g1:
        min_g1=group1[i]

max_g2=group2[0]
for i in range(len(group2)):
    if group2[i]>max_g2:
        max_g2=group2[i]
s=(max_g2+min_g1)/4
x1=int(input("Nhập diện tích: "))
x2=int(input("Nhập chiều cao: "))
#tính hàm quyết định
x0=np.array([0,s*2])
y0=np.array([s*2,0])
y=x1+x2-s*2
if y>0:
    print("thuê")
else:
    print("không thuê")
a1=[]
a2=[]
b1=[]
b2=[]
#phân chia các điểm theo hàm quyết định
for i in range(len(X)):
    for j in range(1):
        if X[i][0]+X[i][1]-2*s>0:
            a1.append(X[i][0])
            a2.append(X[i][1])
        elif X[i][0]+X[i][1]-2*s<=0:
            b1.append(X[i][0])
            b2.append(X[i][1])
#vẽ hình
plt.plot(a1, a2,'bo')
plt.plot(b1, b2,'yo')
plt.plot(x0, y0,'g-')
plt.plot(x1,x2,'ro')
plt.plot([max_g2,0], [0,max_g2],'y-')
plt.plot([min_g1,0], [0,min_g1],'y-')
plt.axis([0,60, 0, 60])
plt.show()
