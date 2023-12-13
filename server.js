const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
 
app.use(cors())



connectDB();



//middleware init

app.use(express.json({extended: false}));

let codeSnippet = `

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
`;

// Convert the code snippet to a string
let codeString = String(codeSnippet);
app.get('/', (req,res) => res.send(codeString));

//define routes

app.use("/api/user", require('./routes/api/users'))
app.use("/api/auth", require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/product', require('./routes/api/product'))
app.use('/api/cart', require('./routes/api/cart'))




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
