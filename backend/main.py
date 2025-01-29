from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS function

app = Flask(__name__)

# Enable CORS for all routes and origins (or you can limit it)
CORS(app)

# Calculator functions
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error! Division by zero."
    return x / y

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    num1 = data['num1']
    num2 = data['num2']
    operation = data['operation']

    if operation == 'add':
        result = add(num1, num2)
    elif operation == 'subtract':
        result = subtract(num1, num2)
    elif operation == 'multiply':
        result = multiply(num1, num2)
    elif operation == 'divide':
        result = divide(num1, num2)
    else:
        result = 'Invalid operation'

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
