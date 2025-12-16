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
    # Accept monthly return percentage (ret) and return probability of high volatility
    try:
        ret = float(request.args.get('ret', 2.0))
    except Exception:
        return jsonify({'error': 'invalid ret'}), 400
    import math
    def sigmoid(x):
        return 1.0/(1.0+math.exp(-x))
    # simple heuristic: larger absolute returns indicate higher volatility risk
    score = -1.0 + 0.25 * abs(ret)
    p = sigmoid(score)
    return jsonify({'prob': p})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
