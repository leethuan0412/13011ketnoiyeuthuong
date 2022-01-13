from sklearn import tree
import matplotlib.pyplot as pl
x=[[1,2,2],[7,6,5],[7,7,7],[2,3,4],[3,4,5],[7,5,5],
   [2,2,1],[6,7,7],[6,5,5],[4,5,5],[3,2,2],[5,7,5]]
lable=[0,1,1,0,0,1,0,1,1,0,0,1]
print(x)
#khởi tạo cây quyết định
my_tree=tree.DecisionTreeClassifier()
#tranning
result=my_tree.fit(x,lable)
#dự đoán với data_train
kq=result.predict([[1,2,2]])
print("Thuộc label:",kq)
#voi du lieu ngoai bo data_train
kq=result.predict([[6,6,6]])
print("Thuộc label",kq)
fig=pl.figure(figsize=(6,6))
_=tree.plot_tree(my_tree)
fig.savefig('cay.jpg')
pl.show()