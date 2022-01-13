from __future__ import division, print_function, unicode_literals
import numpy as np
import matplotlib.pyplot as plt

a1=int(input("nhap:"))
X=np.array([[1,41],[1, 54],[1, 63], [1,54], [1,48], [1,46], [1,62],
[1,61], [1,64], [1,71]])
y=np.array([[1250,1380,1425,1425,1450,1300,1400,1510,1575,1650]]).T
a=X.T
A=np.dot(a,X)
b=np.dot(X.T,y)
w=np.dot(np.linalg.pinv(A),b)
w_0=w[0][0]
w_1=w[1][0]
x0=np.array([40,80])
y0=np.array([w_0+w_1*x0[0],w_0+w_1*x0[1]])
a11=w_0+w_1*a1
print(f'Doanh thu: {round(a11),2}')

X=np.array([[41,54,63,54,48,46,62,61,64,71]]).T
plt.plot(X.T,y.T,'ro')
plt.plot(x0,y0,'go-')
plt.plot(a1,a11,'bo-')
plt.axis([0,100,1000,2000])
plt.xlabel('Chi thieu quang cao hang tuan')
plt.ylabel('Doanh thu hang tuan')
plt.show()