from flask import Flask, request, jsonify

app = Flask(__name__)

@app.after_request
def add_cors(resp):
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return resp

@app.route('/predict')
def predict():
    # simple logistic model: p = sigmoid(intercept + coef*mins)
    try:
        mins = float(request.args.get('mins', 240))
    except Exception:
        return jsonify({'error': 'invalid mins'}), 400
    intercept = -1.2
    coef = -0.005
    import math
    def sigmoid(x):
        return 1.0/(1.0+math.exp(-x))
    p = sigmoid(intercept + coef * mins)
    return jsonify({'prob': p})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
