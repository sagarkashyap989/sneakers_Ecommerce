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


#pract_2
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
import binascii

keyPair = RSA.generate(1024)

pubKey = keyPair.publickey()
print(f"Public Key: (n={hex(pubKey.n)}, e={hex(pubKey.e)})")

pubKeyPEM = pubKey.exportKey()
print(pubKeyPEM.decode("ascii"))

print(f"Private Key: (n={hex(keyPair.n)}, d={hex(keyPair.d)})")

privKeyPEM = keyPair.exportKey()
print(privKeyPEM.decode("ascii"))

msg = "Ismile Academy"
encryption = PKCS1_OAEP.new(pubKey)
encrypted = encryption.encrypt(msg.encode())
print("Encrypted:", binascii.hexlify(encrypted).decode("ascii"))

#pract_3
import hmac
import hashlib

secret_key = b'mysecretkey'

def generate_mac(message, key):
    mac = hmac.new(key, message.encode('utf-8'), hashlib.sha256)
    return mac.hexdigest()

message_to_send = input("Enter the message to send: ")

sent_mac = generate_mac(message_to_send, secret_key)

print("Generated MAC for the sent message:", sent_mac)

received_message = input("Enter the received message: ")
received_mac = generate_mac(received_message, secret_key)
print("Received MAC for the sent message:", received_mac)

is_valid = hmac.compare_digest(received_mac, sent_mac)

if is_valid:
    print("Message is authentic and has not been tampered with.")
else:
    print("Message has been tampered with or is not authentic.")


 #pract_4
!pip install pycryptodome
from Crypto.PublicKey import RSA
from Crypto.Signature import pkcs1_15
from Crypto.Hash import SHA256

# Generate RSA key pair
key = RSA.generate(2048)
private_key = key.export_key()
public_key = key.publickey().export_key()

# Simulated document content
original_document = b"This is the original document content."
original_document1 = b"This is the original document sdadfsda."
modified_document = b"This is the modified document content."

# Hash the document content
original_hash = SHA256.new(original_document)
modified_hash = SHA256.new(modified_document)

# Create a signature using the private key
signature = pkcs1_15.new(key).sign(original_hash)

# Verify the signature using the public key with the original content
print(original_hash)
try:
    pkcs1_15.new(key.publickey()).verify(SHA256.new(original_document1), signature)
    print("Signature is valid.")
except (ValueError, TypeError):
    print("Signature is invalid.")



 #pract_5
from random import randint

if __name__ == '__main__':
    P = 23
    G = 9

    print('The value of P is: %d' % P)
    print('The value of G is: %d' % G)

    a = 4
    print('Secret Number for Alice is: %d' % a)

    b = 6
    print('Secret Number for Bob is: %d' % b)

    y = pow(G, a, P)
    Ka = pow(y, b, P)
    Kb = pow(y, a, P)

    print('Secret key for Alice is: %d' % Ka)
    print('Secret key for Bob is: %d' % Kb)
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
