import numpy as np
bang=[[1,2,3],[3,1,2],[4,2,3],[3,3,2],[2,2,1],
      [5,2,3],[3,2,2],[3,2,3],[3,3,4],[2,3,1]]
def kcach(x,y):
    kc=0
    for i in range(len(x)):
        kc=kc+np.power((x[i]-y[i]),2)
    return kc

c1=[1,2,3]
c2=[3,1,2]
c3=[4,2,3]
for j in range(2):
    l1=[]
    l2=[]
    l3=[]
    print("Lần lặp thứ ",j+1)
    for i in range(10):
        kc1=kcach(bang[i],c1)
        kc2=kcach(bang[i],c2)
        kc3 = kcach(bang[i], c3)
        if kc1<kc2 and kc1<kc3:
            l1.append(i)
        elif kc2<kc1 and kc2<kc3:
            l2.append(i)
        else:
            l3.append(i)
    x1=x2=x3=y1=y2=y3=z1=z2=z3=0
    if len(l1)>0:
        for z in l1:
            x1=x1+bang[z][0]
            y1 = y1 + bang[z][1]
            z1 = z1 + bang[z][2]
        c1=[x1/len(l1),y1/len(l1),z1/len(l1)]
        print("Cập nhật trọng tâm c1:",c1)
    if len(l2)>0:
        for z in l2:
            x2=x2+bang[z][0]
            y2 = y2 + bang[z][1]
            z2 = z2+ bang[z][2]
        c2=[x2/len(l2),y2/len(l2),z2/len(l2)]
        print("Cập nhật trọng tâm c2:",c2)
    if len(l3)>0:
        for z in l3:
            x3=x3+bang[z][0]
            y3 = y3 + bang[z][1]
            z3= z3+ bang[z][2]
        c3=[x3/len(l3),y3/len(l3),z3/len(l3)]
        print("Cập nhật trọng tâm c3:",c3)
print("Cụm 1:",l1)
print("Cụm 2:",l2)
print("Cụm 3:",l3)