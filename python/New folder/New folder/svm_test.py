import numpy as np
from sklearn.svm import SVC
import matplotlib.pyplot as plt

X1 = [[85,80], [70,90], [75,85],[90,80], [95,90], [80,70]]
y1 = [1, 1, 1,1,1,1]
X2 = [[60,70], [70,50],[70,70],[40,60], [50,60], [20,40]]
y2 = [-1, -1,-1,-1,-1,-1]
X = np.array(X1 + X2)
y = y1 + y2

clf = SVC(kernel='linear', C=0.02)
clf.fit(X, y)
print(clf.support_vectors_)

w = clf.coef_
b = clf.intercept_
print('w = ', w)
print('b = ', b)


def plot_svc_decision_function(clf, ax=None, plot_support=True):
    """Plot the decision function for a 2D SVC"""
    if ax is None:
        ax = plt.gca()
    xlim = ax.get_xlim()
    ylim = ax.get_ylim()

    # create grid to evaluate model
    x = np.linspace(xlim[0], xlim[1], 30)
    y = np.linspace(ylim[0], ylim[1], 30)
    Y, X = np.meshgrid(y, x)
    xy = np.vstack([X.ravel(), Y.ravel()]).T
    P = clf.decision_function(xy).reshape(X.shape)

    # plot decision boundary and margins
    ax.contour(X, Y, P, colors='k',
               levels=[-1, 0, 1], alpha=0.5,
               linestyles=['--', '-', '--'])

    # plot support vectors
    if plot_support:
        ax.scatter(clf.support_vectors_[:, 0],
                   clf.support_vectors_[:, 1],
                   s=300, linewidth=1, facecolors='none');
    ax.set_xlim(xlim)
    ax.set_ylim(ylim)


plt.scatter(X[:, 0], X[:, 1], c=y, s=50, cmap='brg');
plot_svc_decision_function(clf)
plt.show()

