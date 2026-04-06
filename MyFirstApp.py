from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    num1 = float(data.get('n1', 0))
    num2 = float(data.get('n2', 0))
    result = num1 + num2
    return jsonify({'sum': result})

if __name__ == '__main__':
    app.run(debug=True)