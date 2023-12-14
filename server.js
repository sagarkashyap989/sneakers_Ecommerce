const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
 
app.use(cors())



connectDB();



//middleware init

app.use(express.json({extended: false}));

let codeSnippet = `<pre>
<code>
def encrypt(text, s):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isupper():
            result += chr((ord(char) + s - 65) % 26 + 65)
        else:
            result += chr((ord(char) + s - 97) % 26 + 97)
    return result

text = input("Enter the text to encrypt: ")
s = 3
print("text = " + text)
print("cipher = " + encrypt(text, s))
</code>
</pre>`;

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
