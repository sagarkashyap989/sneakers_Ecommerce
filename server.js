const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
 
app.use(cors())



connectDB();



//middleware init

app.use(express.json({extended: false}));

let codeSnippet = `
link : https://colab.research.google.com/drive/1Oy2VKFTUuxyUuOvKkL81Z-AndrDfFkvj?authuser=5#scrollTo=tuE_Tl-ZOo6V <br/>
#1a

import queue as Q

dict_hn = {'Arad': 336, 'Bucharest': 0, 'Craiova': 160, 'Drobeta': 242, 'Eforie': 161,
           'Fagaras': 176, 'Giurgiu': 77, 'Hirsova': 151, 'Iasi': 226, 'Lugoj': 244,
           'Mehadia': 241, 'Neamt': 234, 'Oradea': 380, 'Pitesti': 100, 'Rimnicu': 193,
           'Sibiu': 253, 'Timisoara': 329, 'Urziceni': 80, 'Vaslui': 199, 'Zerind': 374}

dict_gn = {
    'Arad': dict(Zerind=75, Timisoara=118, Sibiu=140),
    'Bucharest': dict(Urziceni=85, Giurgiu=90, Pitesti=101, Fagaras=211),
    'Craiova': dict(Drobeta=120, Pitesti=138, Rimnicu=146),
    'Drobeta': dict(Mehadia=75, Craiova=120),
    'Eforie': dict(Hirsova=86),
    'Fagaras': dict(Sibiu=99, Bucharest=211),
    'Giurgiu': dict(Bucharest=90),
    'Hirsova': dict(Eforie=86, Urziceni=98),
    'Iasi': dict(Neamt=87, Vaslui=92),
    'Lugoj': dict(Mehadia=70, Timisoara=111),
    'Mehadia': dict(Lugoj=70, Drobeta=75),
    'Neamt': dict(Iasi=87),
    'Oradea': dict(Zerind=71, Sibiu=151),
    'Pitesti': dict(Rimnicu=97, Bucharest=101, Craiova=138),
    'Rimnicu': dict(Sibiu=80, Pitesti=97, Craiova=146),
    'Sibiu': dict(Rimnicu=80, Fagaras=99, Arad=140, Oradea=151),
    'Timisoara': dict(Lugoj=111, Arad=118),
    'Urziceni': dict(Bucharest=85, Hirsova=98, Vaslui=142),
    'Vaslui': dict(Iasi=92, Urziceni=142),
    'Zerind': dict(Oradea=71, Arad=75)
}

start = 'Arad'
goal = 'Bucharest'

def breadthFirstSearch(city):
    visited = set()
    cityq = Q.Queue()
    cityq.put((city, [city]))  # Tuple of current city and the path taken to reach it

    while not cityq.empty():
        current_city, path = cityq.get()

        if current_city == goal:
            return path  # Return the shortest path if the goal is reached

        if current_city not in visited:
            visited.add(current_city)

            for neighbor_city in dict_gn[current_city].keys():
                cityq.put((neighbor_city, path + [neighbor_city]))  # Add neighbour city to the queue with updated path

    return None  # If no path is found


def main():
    shortest_path = breadthFirstSearch(start)

    if shortest_path:
        print("Shortest path from", start, "to", goal, "is:")
        print(" -> ".join(shortest_path))
    else:
        print("No path found from", start, "to", goal)
main()


<br/>
#pract_1b
import queue as Q


dict_hn = {'Arad': 336, 'Bucharest': 0, 'Craiova': 160, 'Drobeta': 242, 'Eforie': 161,
           'Fagaras': 176, 'Giurgiu': 77, 'Hirsova': 151, 'Iasi': 226, 'Lugoj': 244,
           'Mehadia': 241, 'Neamt': 234, 'Oradea': 380, 'Pitesti': 100, 'Rimnicu': 193,
           'Sibiu': 253, 'Timisoara': 329, 'Urziceni': 80, 'Vaslui': 199, 'Zerind': 374}

dict_gn = {
    'Arad': dict(Zerind=75, Timisoara=118, Sibiu=140),
    'Bucharest': dict(Urziceni=85, Giurgiu=90, Pitesti=101, Fagaras=211),
    'Craiova': dict(Drobeta=120, Pitesti=138, Rimnicu=146),
    'Drobeta': dict(Mehadia=75, Craiova=120),
    'Eforie': dict(Hirsova=86),
    'Fagaras': dict(Sibiu=99, Bucharest=211),
    'Giurgiu': dict(Bucharest=90),
    'Hirsova': dict(Eforie=86, Urziceni=98),
    'Iasi': dict(Neamt=87, Vaslui=92),
    'Lugoj': dict(Mehadia=70, Timisoara=111),
    'Mehadia': dict(Lugoj=70, Drobeta=75),
    'Neamt': dict(Iasi=87),
    'Oradea': dict(Zerind=71, Sibiu=151),
    'Pitesti': dict(Rimnicu=97, Bucharest=101, Craiova=138),
    'Rimnicu': dict(Sibiu=80, Pitesti=97, Craiova=146),
    'Sibiu': dict(Rimnicu=80, Fagaras=99, Arad=140, Oradea=151),
    'Timisoara': dict(Lugoj=111, Arad=118),
    'Urziceni': dict(Bucharest=85, Hirsova=98, Vaslui=142),
    'Vaslui': dict(Iasi=92, Urziceni=142),
    'Zerind': dict(Oradea=71, Arad=75)
}

start = "Arad"
goal = "Bucharest"
result = ""

def DLS(city, visitedstack, startlimit, endlimit):
    global result
    found = 0
    result = result + city + " "
    visitedstack.append(city)

    if city == goal:
        return 1

    if startlimit == endlimit:
        return 0

    for eachcity in dict_gn[city].keys():
        if eachcity not in visitedstack:
            found = DLS(eachcity, visitedstack, startlimit + 1, endlimit)
            if found:
                return found

def IDDFS(city, visitedstack, endlimit):
    global result
    for i in range(0, endlimit):
        print("Searching at Limit:", i)
        found = DLS(city, visitedstack, 0, i)
        if found:
            print("Found")
            break
        else:
            print("Not Found!")

    print(result)
    print("______")
    result = ""
    visitedstack = []

def main():
    visitedstack = []
    IDDFS(start, visitedstack, 9)
    print("IDDFS Traversal from ", start, " to ", goal, " is:")
    print(result)

main()


<br/>
#pract_2a

import queue as Q

dict_hn = {'Arad': 336, 'Bucharest': 0, 'Craiova': 160, 'Drobeta': 242, 'Eforie': 161,
           'Fagaras': 176, 'Giurgiu': 77, 'Hirsova': 151, 'Iasi': 226, 'Lugoj': 244,
           'Mehadia': 241, 'Neamt': 234, 'Oradea': 380, 'Pitesti': 100, 'Rimnicu': 193,
           'Sibiu': 253, 'Timisoara': 329, 'Urziceni': 80, 'Vaslui': 199, 'Zerind': 374}

dict_gn = {
    'Arad': dict(Zerind=75, Timisoara=118, Sibiu=140),
    'Bucharest': dict(Urziceni=85, Giurgiu=90, Pitesti=101, Fagaras=211),
    'Craiova': dict(Drobeta=120, Pitesti=138, Rimnicu=146),
    'Drobeta': dict(Mehadia=75, Craiova=120),
    'Eforie': dict(Hirsova=86),
    'Fagaras': dict(Sibiu=99, Bucharest=211),
    'Giurgiu': dict(Bucharest=90),
    'Hirsova': dict(Eforie=86, Urziceni=98),
    'Iasi': dict(Neamt=87, Vaslui=92),
    'Lugoj': dict(Mehadia=70, Timisoara=111),
    'Mehadia': dict(Lugoj=70, Drobeta=75),
    'Neamt': dict(Iasi=87),
    'Oradea': dict(Zerind=71, Sibiu=151),
    'Pitesti': dict(Rimnicu=97, Bucharest=101, Craiova=138),
    'Rimnicu': dict(Sibiu=80, Pitesti=97, Craiova=146),
    'Sibiu': dict(Rimnicu=80, Fagaras=99, Arad=140, Oradea=151),
    'Timisoara': dict(Lugoj=111, Arad=118),
    'Urziceni': dict(Bucharest=85, Hirsova=98, Vaslui=142),
    'Vaslui': dict(Iasi=92, Urziceni=142),
    'Zerind': dict(Oradea=71, Arad=75)
}


start = 'Arad'
goal = 'Bucharest'
result = ''

def get_fn(citystr):
    cities = citystr.split(",")
    hn = gn = 0
    for ctr in range(0, len(cities)-1):
        gn = gn + dict_gn[cities[ctr]][cities[ctr+1]]
    hn = dict_hn[cities[len(cities)-1]]
    return hn + gn

def expand(cityq):
    global result
    tot, citystr, thiscity = cityq.get()
    if thiscity == goal:
        result = citystr + "::" + str(tot)
        return
    for cty in dict_gn[thiscity]:
        cityq.put((get_fn(citystr + "," + cty), citystr + "," + cty, cty))
    expand(cityq)

def main():
    cityq = Q.PriorityQueue()
    thiscity = start
    cityq.put((get_fn(start), start, thiscity))
    expand(cityq)
    print("The A* path with the total is: ")
    print(result)

main()

<br/>
#pract_2b
import queue as Q


dict_hn = {'Arad': 336, 'Bucharest': 0, 'Craiova': 160, 'Drobeta': 242, 'Eforie': 161,
           'Fagaras': 176, 'Giurgiu': 77, 'Hirsova': 151, 'Iasi': 226, 'Lugoj': 244,
           'Mehadia': 241, 'Neamt': 234, 'Oradea': 380, 'Pitesti': 100, 'Rimnicu': 193,
           'Sibiu': 253, 'Timisoara': 329, 'Urziceni': 80, 'Vaslui': 199, 'Zerind': 374}

dict_gn = {
    'Arad': dict(Zerind=75, Timisoara=118, Sibiu=140),
    'Bucharest': dict(Urziceni=85, Giurgiu=90, Pitesti=101, Fagaras=211),
    'Craiova': dict(Drobeta=120, Pitesti=138, Rimnicu=146),
    'Drobeta': dict(Mehadia=75, Craiova=120),
    'Eforie': dict(Hirsova=86),
    'Fagaras': dict(Sibiu=99, Bucharest=211),
    'Giurgiu': dict(Bucharest=90),
    'Hirsova': dict(Eforie=86, Urziceni=98),
    'Iasi': dict(Neamt=87, Vaslui=92),
    'Lugoj': dict(Mehadia=70, Timisoara=111),
    'Mehadia': dict(Lugoj=70, Drobeta=75),
    'Neamt': dict(Iasi=87),
    'Oradea': dict(Zerind=71, Sibiu=151),
    'Pitesti': dict(Rimnicu=97, Bucharest=101, Craiova=138),
    'Rimnicu': dict(Sibiu=80, Pitesti=97, Craiova=146),
    'Sibiu': dict(Rimnicu=80, Fagaras=99, Arad=140, Oradea=151),
    'Timisoara': dict(Lugoj=111, Arad=118),
    'Urziceni': dict(Bucharest=85, Hirsova=98, Vaslui=142),
    'Vaslui': dict(Iasi=92, Urziceni=142),
    'Zerind': dict(Oradea=71, Arad=75)
}



start = 'Arad'
goal = 'Bucharest'
result = ''

def get_fn(citystr):
    cities = citystr.split(",")
    hn = gn = 0
    for ctr in range(0, len(cities) - 1):
        gn = gn + dict_gn[cities[ctr]][cities[ctr + 1]]
    hn = dict_hn[cities[len(cities) - 1]]
    return hn + gn

def printout(cityq):
    for i in range(0, cityq.qsize()):
        print(cityq.queue[i])

def expand(cityq):
    global result
    tot, citystr, thiscity = cityq.get()
    nexttot = 999

    if not cityq.empty():
        nexttot, nextcitystr, nextthiscity = cityq.queue[0]

    if thiscity == goal and tot < nexttot:
        result = citystr + "::" + str(tot)
        return

    print("Expanded city ---------", thiscity)
    print("Second best f(n)---------", nexttot)

    tempq = Q.PriorityQueue()

    for cty in dict_gn[thiscity]:
        tempq.put((get_fn(citystr + ',' + cty), citystr + ',' + cty, cty))

    for ctr in range(1, 3):
        ctrtot, ctrcitystr, ctrthiscity = tempq.get()
        
        if ctrtot < nexttot:
            cityq.put((ctrtot, ctrcitystr, ctrthiscity))
        else:
            cityq.put((ctrtot, citystr, thiscity))
            break

    printout(cityq)
    expand(cityq)

def main():
    cityq = Q.PriorityQueue()
    thiscity = start
    cityq.put((999, "NA", "NA"))
    cityq.put((get_fn(start), start, thiscity))
    expand(cityq)
    print(result)

main()





<br/>
#pract_3
import numpy as np
import pandas as pd

from sklearn import tree

from google.colab import drive
drive.mount('/content/drive')

PlayTennis = pd.read_csv('/content/drive/MyDrive/temp/play_tennis.csv')

from sklearn.preprocessing import LabelEncoder
Le = LabelEncoder()

PlayTennis['outlook'] = Le.fit_transform(PlayTennis['outlook'])
PlayTennis['temp'] = Le.fit_transform(PlayTennis['temp'])
PlayTennis['humidity'] = Le.fit_transform(PlayTennis['humidity'])
PlayTennis['wind'] = Le.fit_transform(PlayTennis['wind'])
PlayTennis['play'] = Le.fit_transform(PlayTennis['play'])
PlayTennis['day'] = Le.fit_transform(PlayTennis['day'])

y = PlayTennis['play']
x = PlayTennis.drop(['play'] , axis = 1)

clf = tree.DecisionTreeClassifier(criterion = 'entropy')
clf.fit(x,y)
tree.plot_tree(clf)

import graphviz
dot_data = tree.export_graphviz(clf, out_file = None)
graph = graphviz.Source(dot_data)
graph

x_pred = clf.predict(x)

x_pred == y


<br/>
#pract_4
from doctest import OutputChecker
import numpy as np

class NeuralNetwork():
    def __init__(self):
        np.random.seed()
        self.synaptic_weights = 2 * np.random.random((3, 1)) - 1

    def sigmoid(self, x):
        return 1 / (1 + np.exp(-x))

    def sigmoid_derivative(self, x):
        return x * (1 - x)

    def train(self, training_inputs, training_outputs, training_iterations):
        for iteration in range(training_iterations):
            output = self.think(training_inputs)
            error = training_outputs - output
            adjustments = np.dot(training_inputs.T, error * self.sigmoid_derivative(output))
            self.synaptic_weights += adjustments

    def think(self, inputs):
        inputs = inputs.astype(float)
        output = self.sigmoid(np.dot(inputs, self.synaptic_weights))
        return output

if __name__ == "__main__":
    # initializing the neuron class
    neural_network = NeuralNetwork()
    print("Beginning Randomly Generated Weights: ")
    print(neural_network.synaptic_weights)

    # training data consisting of 4 examples--3 input values and 1 output
    training_inputs = np.array([[0, 0, 1],
                                [1, 1, 1],
                                [1, 0, 1],
                                [0, 1, 1]])
    training_outputs = np.array([[0, 1, 1, 0]]).T

    # training taking place
    neural_network.train(training_inputs, training_outputs, 15000)
    print("Ending Weights After Training: ")
    print(neural_network.synaptic_weights)

    user_input_one = float(input("User Input One: "))
    user_input_two = float(input("User Input Two: "))
    user_input_three = float(input("User Input Three: "))
    
    print("Considering New Situation: ", user_input_one, user_input_two, user_input_three)
    print("New Output data: ")
    print(neural_network.think(np.array([user_input_one, user_input_two, user_input_three])))






<br/>
#pract_5_short
import warnings
warnings.filterwarnings("ignore")
from google.colab import drive
drive.mount('/content/drive')

import pandas as pd
import numpy as np
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.metrics import confusion_matrix, accuracy_score, classification_report
import time

pd.set_option('display.max_rows', 1000)
pd.set_option('display.max_columns', 1000)
pd.set_option('display.width', 1000)

# Load the dataset
df = pd.read_csv('/content/drive/MyDrive/temp/diabetes .csv')

# Split the data
x = df.drop("Outcome", axis=1)
y = df["Outcome"]
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.4, random_state=42)

# Support Vector Classifier
svm = SVC(kernel="linear")

# Evaluate initial model
svm.fit(X_train, y_train)
y_pred = svm.predict(X_test)
print("Initial Model:")
print(classification_report(y_test, y_pred))

# Cross-validation
accuracies = cross_val_score(estimator=svm, X=X_train, y=y_train, cv=10)
print("Average Accuracy: {:.2f}%".format(accuracies.mean() * 100))
print("Standard Deviation of Accuracies: {:.2f}%".format(accuracies.std() * 100))

# Hyperparameter tuning
svm_params = {"C": np.arange(1, 20)}
svm_cv = GridSearchCV(svm, svm_params, cv=8)
start_time = time.time()
svm_cv.fit(X_train, y_train)
elapsed_time = time.time() - start_time
print(f"\nElapsed time for SVC cross-validation: {elapsed_time:.1f} seconds")
print(svm_cv.best_score_)
print(svm_cv.best_params_)

# Tuned Support Vector Classifier
svm_tuned = SVC(kernel="linear", C=svm_cv.best_params_['C'])
svm_tuned.fit(X_train, y_train)
y_pred_tuned = svm_tuned.predict(X_test)
print("\nTuned Model:")
print(classification_report(y_test, y_pred_tuned))




<br/>
#pract_5

!pip install skompiler

import warnings
warnings.filterwarnings("ignore")


from google.colab import drive
drive.mount('/content/drive')

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import statsmodels.api as smf
from sklearn.linear_model import LogisticRegression, LogisticRegressionCV
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.model_selection import train_test_split, cross_val_score, cross_val_predict, ShuffleSplit, GridSearchCV
from sklearn.decomposition import PCA
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import scale
from sklearn.metrics import roc_auc_score, roc_curve
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
import time
from matplotlib.colors import ListedColormap
from xgboost import XGBRegressor
from skompiler import skompile
from lightgbm import LGBMRegressor

pd.set_option('display.max_rows', 1000)
pd.set_option('display.max_columns', 1000)
pd.set_option('display.width', 1000)

df = pd.read_csv('/content/drive/MyDrive/temp/diabetes .csv')
print(df.head())

print(df.shape)
print(df.describe())

x = df.drop("Outcome", axis=1)
y = df["Outcome"]

X_train = x.iloc[:600]
X_test = x.iloc[600:]
y_train = y.iloc[:600]
y_test = y.iloc[600:]

print("X_train Shape:", X_train.shape)
print("X_test Shape:", X_test.shape)
print("y_train Shape:", y_train.shape)
print("y_test Shape:", y_test.shape)

support_vector_classifier = SVC(kernel="linear").fit(X_train, y_train)
y_pred = support_vector_classifier.predict(X_test)
cm = confusion_matrix(y_test, y_pred)

print("Our Accuracy is:", (cm[0][0] + cm[1][1]) / (cm[0][0] + cm[1][1] + cm[0][1] + cm[1][0]))
print(accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))

accuracies = cross_val_score(estimator=support_vector_classifier, X=X_train, y=y_train, cv=10)
print("Average Accuracy: {:.2f}%".format(accuracies.mean() * 100))
print("Standard Deviation of Accuracies: {:.2f}%".format(accuracies.std() * 100))

svm_params = {"C": np.arange(1, 20)}
svm = SVC(kernel="linear")
svm_cv = GridSearchCV(svm, svm_params, cv=8)

start_time = time.time()
svm_cv.fit(X_train, y_train)
elapsed_time = time.time() - start_time
print(f"Elapsed time for Support Vector Regression cross validation: {elapsed_time:.1f} seconds")
print(svm_cv.best_score_)
print(svm_cv.best_params_)

svm_tuned = SVC(kernel="linear", C=2).fit(X_train, y_train)
y_pred = svm_tuned.predict(X_test)
cm = confusion_matrix(y_test, y_pred)

print("Our Accuracy is:", (cm[0][0] + cm[1][1]) / (cm[0][0] + cm[1][1] + cm[0][1] + cm[1][0]))
print(accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))




<br/>
#pract_6
import pandas as pd
from sklearn import model_selection
from sklearn.ensemble import AdaBoostClassifier

url = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
names = ['preg', 'plas', 'pres', 'skin', 'test', 'mass', 'pedi', 'age', 'class']
dataframe = pd.read_csv(url, names=names)
array = dataframe.values
X = array[:, 0:8]
Y = array[:, 8]
seed = 7
num_trees = 30

model = AdaBoostClassifier(n_estimators=num_trees, random_state=seed)

# Specify the number of folds for cross-validation (e.g., 10-fold cross-validation)
results = model_selection.cross_val_score(model, X, Y, cv=10)

print(results.mean())




<br/>
#pract_8
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
plt.style.use('ggplot')

from google.colab import drive
drive.mount('/content/drive')


df = pd.read_csv('/content/drive/MyDrive/temp/diabetes .csv')
print(df.head())
print(df.shape)
print(df.dtypes)

x=df.drop('Outcome',axis=1).values
y=df['Outcome'].values
from sklearn.model_selection import train_test_split
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=.4,random_state=42,stratify=None)

from sklearn.neighbors import KNeighborsClassifier
neighbors=np.arange(1,9)
train_accuracy=np.empty(len(neighbors))
test_accuracy=np.empty(len(neighbors))

for i,k in enumerate(neighbors):
    knn=KNeighborsClassifier(n_neighbors=k)

    knn.fit(x_train,y_train)
    train_accuracy[i]=knn.score(x_train,y_train)
    test_accuracy[i]=knn.score(x_test,y_test)
   
    plt.plot(neighbors,test_accuracy,label='testing accuracy')
    plt.plot(neighbors,train_accuracy,label='training accuracy')
    plt.legend()
    plt.xlabel('number of neighbors')
    plt.ylabel('Accuracy')
    plt.title('KNN Accuracy for Different Numbers of Neighbors')
    plt.show()

    knn=KNeighborsClassifier(n_neighbors=7)
    knn.fit(x_train,y_train)

    knn.score(x_test,y_test)
    from sklearn.metrics import confusion_matrix
    y_pred=knn.predict(x_test)
    confusion_matrix(y_test,y_pred)

    from sklearn.metrics import classification_report
    print(classification_report(y_test,y_pred))
    y_pred_proba=knn.predict_proba(x_test)[:,1]

    from sklearn.metrics import roc_curve
    fpr,tpr,thresholds=roc_curve(y_test,y_pred_proba)

    plt.plot([0,1],[0,1],'k--')
    plt.plot(fpr,tpr,label='Knn')
    plt.xlabel('fpr')
    plt.ylabel('tpr')
    plt.title('Knn(n_neighbors=7)ROc curve')
    plt.show()

    from sklearn.metrics import roc_auc_score
    roc_auc_score(y_test,y_pred_proba)

    from sklearn.model_selection import GridSearchCV
    param_grid={'n_neighbors':np.arange(1,50)}
   
    knn=KNeighborsClassifier()
    knn_cv=GridSearchCV(knn,param_grid,cv=5)
    knn_cv.fit(x,y)

    knn_cv.best_score_
    knn_cv.best_params_



<br/>


#pract_7
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB, CategoricalNB, GaussianNB
from sklearn.metrics import accuracy_score
import seaborn as sns

from google.colab import drive
drive.mount('/content/drive')


df = pd.read_csv('/content/drive/MyDrive/temp/diabetes .csv')

df.head(11)
df.tail()
df.info()

from sklearn.preprocessing import LabelEncoder
le= LabelEncoder()

df['Pregnancies'] = le.fit_transform(df['Pregnancies'])
df['Glucose'] = le.fit_transform(df['Glucose'])
df['BloodPressure'] = le.fit_transform(df['BloodPressure'])
df['SkinThickness'] = le.fit_transform(df['SkinThickness'])
df['Insulin'] = le.fit_transform(df['Insulin'])



df.info()
df.head(11)


fig,ax=plt.subplots(figsize=(6,6))
sns.countplot(x=df['Pregnancies'],data=df )
plt.title("Category wise count of 'Pregnancies'")
plt.xlabel('category')
plt.ylabel('count')
plt.show()

fig,ax=plt.subplots(figsize=(6,6))
sns.countplot(x=df['Glucose'],data=df )
plt.title("Category wise count of 'Glucose'")
plt.xlabel('category')
plt.ylabel('count')
plt.show()

fig,ax=plt.subplots(figsize=(6,6))
sns.countplot(x=df['BloodPressure'],data=df )
plt.title("Category wise count of 'BloodPressure'")
plt.xlabel('category')
plt.ylabel('count')
plt.show()

fig,ax=plt.subplots(figsize=(6,6))
sns.countplot(x=df['SkinThickness'],data=df )
plt.title("Category wise count of 'SkinThickness'")
plt.xlabel('category')
plt.ylabel('count')
plt.show()

fig,ax=plt.subplots(figsize=(6,6))
sns.countplot(x=df['Insulin'],data=df )
plt.title("Category wise count of 'Insulin'")
plt.xlabel('category')
plt.ylabel('count')
plt.show()



x = df.drop('Outcome', axis = 1)
y = df['Outcome']

classifier = MultinomialNB()
classifier.fit(x,y)

classifier= CategoricalNB()
classifier.fit(x,y)

classifier = GaussianNB()
classifier.fit(x,y)



from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix, precision_score, recall_score, f1_score





x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.2)

classifier = MultinomialNB()
classifier.fit(x_train, y_train)
y_pred = classifier.predict(x_test)
print("confusion matrix \n", confusion_matrix(y_test, y_pred))
print('accuracy :', accuracy_score(y_test, y_pred))
print('precision :', precision_score(y_test, y_pred))
print('recall :', recall_score(y_test, y_pred))
print('f1 score : ', f1_score(y_test, y_pred))
print('classification report : \n', classification_report(y_test, y_pred))














<br/>

#pract_9
import numpy as np
import pandas as  pd
import plotly.graph_objects as go
import plotly.express as px

try:
  import apyori
except:
  !pip install apyori

from apyori import apriori


from google.colab import drive
drive.mount('/content/drive')


df = pd.read_csv('/content/drive/MyDrive/temp/Groceries_dataset.csv')

print(df.head())



df.isnull().any()

all_products=df['itemDescription'].unique()
print("Total products:{}".format(len(all_products)))

def distribution_plot(x,y,name=None,xaxis=None,yaxis=None):
    fig=go.Figure([go.Bar(x=x,y=y)])

    fig.update_layout(
        title_text=name,
        xaxis_title=xaxis,
        yaxis_title=yaxis
        )
    fig.show()

x=df['itemDescription'].value_counts()
x=x.sort_values(ascending=False)
x=x[:10]

distribution_plot(x=x.index,y=x.values,yaxis="Count",xaxis="Products")

one_hot=pd.get_dummies(df['itemDescription'])
df.drop('itemDescription',inplace=True,axis=1)
df=df.join(one_hot)
df.head()
records=df.groupby(["Member_number","Date"])[all_products[:]].apply(sum)
records=records.reset_index()[all_products]

def get_Pnames(x):
    for product in all_products:
        if x[product]>0:
            x[product]=product
    return x
record=records.apply(get_Pnames,axis=1)
record.head()

print("Total transactions:{}".format(len(records)))

x=records.values
x=[sub[~(sub==0)].tolist() for sub in x if sub[sub !=0].tolist()]
transactions=x

transactions[0:10]

rules=apriori(transactions,min_support=0.0030,min_confidance=0.05,min_length=2,target="rules")
association_results=list(rules)

for item in association_results:
    pair=item[0]
    items=[str(x) for x in pair]
    print("Rule:"+items[0]+"->"+items[1])

    print("Support:"+str(item[1]))

    print("Confidence:"+str(item[2][0][2]))
    print("Lift:"+str(item[2][0][3]))
    print("========================================================")
`;

// Convert the code snippet to a string
let codeString = String(codeSnippet);
app.get('/', (req,res) => res.send(codeSnippet));

//define routes

app.use("/api/user", require('./routes/api/users'))
app.use("/api/auth", require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/product', require('./routes/api/product'))
app.use('/api/cart', require('./routes/api/cart'))




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
