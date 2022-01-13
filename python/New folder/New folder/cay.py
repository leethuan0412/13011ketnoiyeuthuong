import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import sklearn.tree as tr
import matplotlib.pyplot as pl
from sklearn import metrics
import matplotlib.pyplot as pl
d1=input('Tinh trang Huyet Ap:')
d2=input('Tinh trang Nhip Tim:')
d3=input('Tinh trang Mach:')
d4=input('Tinh trang Mo mau:')
input1=np.array([d1,d2,d3,d4,'nhan'])
a=pd.read_csv('data.csv').values
a=np.vstack([a,input1])
for i in range(len(a)):
    if a[i][0]=="cao":
        a[i][0]=2
    elif a[i][0]=="on dinh":
        a[i][0]=3
    elif a[i][0]=="thap":
        a[i][0]=4
    if a[i][1]=='cao':
        a[i][1]=5
    elif a[i][1]=="on dinh":
        a[i][1]=6
    elif a[i][1] == "thap":
        a[i][1] = 7
    if a[i][2]=='cao':
        a[i][2]=8
    elif a[i][2]=="thap":
        a[i][2]=9
    if a[i][3]=='cao':
        a[i][3]=10
    elif a[i][3]=="thap":
        a[i][3]=11
    if a[i][4]=='yeu':
        a[i][4]=0
    elif a[i][4]=="binh thuong":
        a[i][4]=1
print(a)
b = a[-1]
print(b)
b = np.delete(b, len(b) - 1)
print(b)
a = np.delete(a, len(a)-1, 0)
print(a)
label=["Yeu","Binh thuong"]
x_train=list((a[:,:4]))
y_train=list((a[:,4]))
print(x_train)
print(y_train)
tree=tr.DecisionTreeClassifier(criterion='entropy')
tree=tree.fit(x_train,y_train)
kq=tree.predict(list([b]))
print(f'Ket qua la suc khoe {label[kq[0]]}')
fig=pl.figure(figsize=(6,6))
_=tr.plot_tree(tree,class_names=['yeu', 'binh thuong'],feature_names=['Huyet ap','Nhip tim','Mach','Mo mau'])
fig.savefig('tree.jpg')
pl.show()
