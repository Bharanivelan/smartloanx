# import pickle
# import numpy as np
# import pandas as pd
# from flask import Flask, request, jsonify
# from flask_cors import CORS

# # Load the trained model
# model_path = "loan_status_predictor.pkl"

# with open(model_path, "rb") as model_file:
#     model = pickle.load(model_file)

# # Check if the model has the 'predict' method
# if not hasattr(model, "predict"):
#     raise ValueError("Loaded model is not a valid ML model. Ensure the correct model file is used.")

# app = Flask(__name__)
# CORS(app, resources={"/predict": {"origins": "*"}})

# # Define expected feature names
# FEATURE_COLUMNS = [
#     "gender", "married", "dependents", "education", "selfEmployed",
#     "applicantIncome", "coApplicantIncome", "loanAmount", "loanTerm", "locationType"
# ]

# @app.route("/", methods=["GET"])
# def home():
#     return jsonify({"message": "Loan Prediction API is Running!"})

# @app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         # Receive JSON data
#         data = request.json
#         print("Received Data:", data)

#         # Process input data
#         input_data = {
#             "gender": 1 if data["gender"] == "Male" else 0,
#             "married": 1 if data["married"] == "Yes" else 0,
#             "dependents": int(data["dependents"]) if data["dependents"].isdigit() else 0,
#             "education": 1 if data["education"] == "Graduate" else 0,
#             "selfEmployed": 1 if data["selfEmployed"] == "Yes" else 0,
#             "applicantIncome": float(data["applicantIncome"]),
#             "coApplicantIncome": float(data["coApplicantIncome"]) if data["coApplicantIncome"] else 0.0,
#             "loanAmount": float(data["loanAmount"]),
#             "loanTerm": float(data["loanTerm"]),
#             "locationType": 1 if data["locationType"] == "Urban" else 0,
#         }

#         # Convert input to DataFrame
#         df_input = pd.DataFrame([input_data])

#         # Ensure model is valid before predicting
#         if not hasattr(model, "predict"):
#             raise ValueError("Model is not a valid machine learning model.")

#         # Make Prediction
#         prediction = model.predict(df_input)[0]
#         predicted_label = "Approved" if prediction == 1 else "Not Approved"

#         return jsonify({"prediction": predicted_label})

#     except Exception as e:
#         print("Error:", str(e))
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)


# import pickle
# import numpy as np
# import pandas as pd
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient
# from bson.objectid import ObjectId

# # Load the trained model
# model_path = "loan_status_predictor.pkl"
# with open(model_path, "rb") as model_file:
#     model = pickle.load(model_file)

# # Check if model is valid
# if not hasattr(model, "predict"):
#     raise ValueError("Loaded model is not a valid ML model.")

# # Initialize Flask app
# app = Flask(__name__)
# CORS(app, resources={"/*": {"origins": "*"}})  # Allow all routes
# # CORS(app, resources={"/predict": {"origins": "http://localhost:4200"}})


# # MongoDB Connection
# MONGO_URI = "mongodb+srv://login:password%2A1@loancluster.zlodq.mongodb.net/?retryWrites=true&w=majority&appName=loancluster"
# client = MongoClient(MONGO_URI)
# db = client["loanDB"]  # Database Name
# collection = db["loanApplications"]  # Collection Name

# @app.route("/", methods=["GET"])
# def home():
#     return jsonify({"message": "Loan Prediction API is Running!"})

# # API to Predict Loan Approval and Store in DB
# @app.route("/api/predict", methods=["POST"])
# def predict():
#     try:
#         data = request.json
#         print("Received Data:", data)

#         # Process input data
#         input_data = {
#             "gender": 1 if data["gender"] == "Male" else 0,
#             "married": 1 if data["married"] == "Yes" else 0,
#             "dependents": int(data["dependents"]) if data["dependents"].isdigit() else 0,
#             "education": 1 if data["education"] == "Graduate" else 0,
#             "selfEmployed": 1 if data["selfEmployed"] == "Yes" else 0,
#             "applicantIncome": float(data["applicantIncome"]),
#             "coApplicantIncome": float(data["coApplicantIncome"]) if data["coApplicantIncome"] else 0.0,
#             "loanAmount": float(data["loanAmount"]),
#             "loanTerm": float(data["loanTerm"]),
#             "locationType": 1 if data["locationType"] == "Urban" else 0,
#         }

#         # Convert input to DataFrame
#         df_input = pd.DataFrame([input_data])

#         # Predict loan approval status
#         prediction = model.predict(df_input)[0]
#         predicted_label = "Approved" if prediction == 1 else "Not Approved"

#         # Store data in MongoDB
#         data["prediction"] = predicted_label  # Add prediction result to data
#         data["status"] = "Pending"  # Default status
#         collection.insert_one(data)

#         return jsonify({"prediction": predicted_label, "message": "Data stored successfully!"})

#     except Exception as e:
#         print("Error:", str(e))
#         return jsonify({"error": str(e)}), 500

# # API to Fetch Loan Applications
# @app.route("/api/loans", methods=["GET"])
# def get_loans():
#     try:
#         loans = list(collection.find({}, {"_id": 1, "name": 1, "loanAmount": 1, "applicantIncome": 1, "prediction": 1, "status": 1}))
#         for loan in loans:
#             loan["_id"] = str(loan["_id"])  # Convert ObjectId to string for frontend compatibility

#         return jsonify({"loans": loans})

#     except Exception as e:
#         print("Error:", str(e))
#         return jsonify({"error": str(e)}), 500

# # API to Update Loan Status
# @app.route("/api/loans/update/<loan_id>", methods=["PUT"])
# def update_loan_status(loan_id):
#     try:
#         data = request.json
#         new_status = data.get("status")

#         if new_status not in ["Accepted", "Rejected", "Pending"]:
#             return jsonify({"error": "Invalid status"}), 400

#         # Update loan status in DB
#         result = collection.update_one({"_id": ObjectId(loan_id)}, {"$set": {"status": new_status}})
        
#         if result.modified_count == 0:
#             return jsonify({"message": "No matching loan found or status unchanged"}), 404

#         return jsonify({"message": "Loan status updated successfully!"})

#     except Exception as e:
#         print("Error:", str(e))
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)



import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId

# Load the trained model
model_path = "loan_status_predictor.pkl"
with open(model_path, "rb") as model_file:
    model = pickle.load(model_file)

# Check if model is valid
if not hasattr(model, "predict"):
    raise ValueError("Loaded model is not a valid ML model.")

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# MongoDB Connection
MONGO_URI = "mongodb+srv://login:password%2A1@loancluster.zlodq.mongodb.net/?retryWrites=true&w=majority&appName=loancluster"
client = MongoClient(MONGO_URI)
db = client["loanDB"]  # Database Name
collection = db["loanApplications"]  # Collection Name

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Loan Prediction API is Running!"})

# API to Predict Loan Approval and Store in DB
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        print("Received Data:", data)

        # Process input data
        input_data = {
            "gender": 1 if data["gender"] == "Male" else 0,
            "married": 1 if data["married"] == "Yes" else 0,
            "dependents": int(data["dependents"]) if data["dependents"].isdigit() else 0,
            "education": 1 if data["education"] == "Graduate" else 0,
            "selfEmployed": 1 if data["selfEmployed"] == "Yes" else 0,
            "applicantIncome": float(data["applicantIncome"]),
            "coApplicantIncome": float(data["coApplicantIncome"]) if data["coApplicantIncome"] else 0.0,
            "loanAmount": float(data["loanAmount"]),
            "loanTerm": float(data["loanTerm"]),
            "locationType": 1 if data["locationType"] == "Urban" else 0,
        }

        # Convert input to DataFrame
        df_input = pd.DataFrame([input_data])

        # Predict loan approval status
        prediction = model.predict(df_input)[0]
        predicted_label = "Approved" if prediction == 1 else "Not Approved"

        # Store data in MongoDB
        data["prediction"] = predicted_label  # Add prediction result to data
        data["status"] = "Pending"  # Default status
        collection.insert_one(data)

        return jsonify({"prediction": predicted_label, "message": "Data stored successfully!"})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

# API to Fetch Loan Applications
@app.route("/api/loans", methods=["GET"])
def get_loans():
    try:
        loans = list(collection.find({}, {"_id": 1, "name": 1, "loanAmount": 1, "applicantIncome": 1, "prediction": 1, "status": 1}))
        for loan in loans:
            loan["_id"] = str(loan["_id"])  # Convert ObjectId to string for frontend compatibility

        return jsonify({"loans": loans})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

# API to Update Loan Status
@app.route("/api/loans/update/<loan_id>", methods=["PUT"])
def update_loan_status(loan_id):
    try:
        data = request.json
        new_status = data.get("status")

        if new_status not in ["Accepted", "Rejected", "Pending"]:
            return jsonify({"error": "Invalid status"}), 400

        # Update loan status in DB
        result = collection.update_one({"_id": ObjectId(loan_id)}, {"$set": {"status": new_status}})
        
        if result.modified_count == 0:
            return jsonify({"message": "No matching loan found or status unchanged"}), 404

        return jsonify({"message": "Loan status updated successfully!"})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
