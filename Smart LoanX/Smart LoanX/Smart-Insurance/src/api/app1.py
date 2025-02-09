# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib
# import numpy as np

# app = Flask(__name__)
# CORS(app)  # Enable CORS for frontend interaction

# # Load the trained model, scaler, and label encoder
# model = joblib.load("loan_status_predictor.pkl")  # Loan Approval Model
# scaler = joblib.load("scaler.pkl")  # StandardScaler/MinMaxScaler
# label_encoder = joblib.load("label_encoders.pkl")  # LabelEncoder for categorical variables

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.json  # Receive JSON data from frontend
#         raw_features = data["features"]  # Extract features

#         # Convert categorical values using label encoder (if any categorical inputs)
#         encoded_features = [label_encoder.transform([val])[0] if isinstance(val, str) else val for val in raw_features]

#         # Reshape and apply scaling
#         features_array = np.array(encoded_features).reshape(1, -1)  # Convert to NumPy array
#         scaled_features = scaler.transform(features_array)  # Apply scaling

#         # Make prediction
#         prediction = model.predict(scaled_features)  # Get model output
#         result = "Approved" if prediction[0] == 1 else "Rejected"

#         return jsonify({"prediction": result})

#     except Exception as e:
#         return jsonify({"error": str(e)})

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)


from flask import Flask, request, jsonify
import pickle
import numpy as np
import pandas as pd
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model, scaler, and label encoders
with open('loan_status_predictor.pkl', 'rb') as file:
    model = pickle.load(file)

with open('scaler.pkl', 'rb') as file:
    scaler = pickle.load(file)

with open('label_encoders.pkl', 'rb') as file:
    label_encoders = pickle.load(file)

# Expected input fields
required_fields = [
    "Gender", "Married", "Dependents", "Education", "Self_Employed",
    "ApplicantIncome", "CoapplicantIncome", "LoanAmount", "Loan_Amount_Term",
    "Property_Area", "Credit_History", "Cibil_Score"
]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.json

        # Check for missing fields
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

        # Convert input to DataFrame
        input_df = pd.DataFrame([data])

        # Encode categorical variables
        for col in ["Gender", "Married", "Education", "Self_Employed", "Property_Area", "Credit_History"]:
            if col in label_encoders:
                input_df[col] = label_encoders[col].transform(input_df[col])

        # Convert all values to numeric
        input_df = input_df.apply(pd.to_numeric)

        # Scale numerical features
        input_scaled = scaler.transform(input_df)

        # Predict
        prediction = model.predict(input_scaled)

        # Return result
        result = "Approved" if prediction[0] == 1 else "Rejected"
        return jsonify({'loan_status': result})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
