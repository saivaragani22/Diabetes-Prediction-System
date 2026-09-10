# 🩺 Diabetes Prediction Web Application  

A **full-stack machine learning web application** that predicts the likelihood of diabetes based on patient health data. Built using **React.js** for the frontend and **FastAPI** for the backend, this project demonstrates how machine learning can be integrated into a modern web app with a clean, responsive interface.

---

## 🚀 Features  
- 🔍 **Accurate Predictions:** ML classification model achieving ~82% accuracy.  
- 🧠 **Integrated ML Pipeline:** Built with Scikit-learn, Pandas, and NumPy for preprocessing and prediction.  
- 🌐 **Full-Stack Architecture:** React (frontend) + FastAPI (backend) with RESTful APIs.  
- 📊 **Responsive UI:** Designed with Bootstrap and React Router for smooth navigation.  
- 🔒 **Secure API Calls:** Implements CORS and REST best practices.  
- ⚙️ **End-to-End SDLC Workflow:** Includes model training, API development, and deployment setup.  

---

## 🧩 Tech Stack  
**Frontend:** React.js, Bootstrap, React Router, Axios  
**Backend:** FastAPI, Python  
**Machine Learning:** Scikit-learn, Pandas, NumPy, Joblib  
**Tools:** Git, VS Code, Chrome DevTools  

---

## 🧠 Model Overview  
- **Algorithm Used:** Classification (Support Vector Classifier)  
- **Dataset:** Public diabetes dataset  
- **Accuracy:** ~82%  
- **Preprocessing:** Feature selection, normalization, and visualizations  

---

## ⚙️ Installation & Setup  

## 🧭 1. Clone the Repository

git clone https://github.com/saivaragani22/Diabetes-Prediction-System.git

cd Diabetes-Prediction-App
## ⚙️ 2. Backend Setup (FastAPI)

## Navigate to the backend folder:

cd backend
Install dependencies
pip install -r requirements.txt

Run the backend server
uvicorn main:app --reload


The FastAPI server will start at:
👉 http://127.0.0.1:8000

💻 3. Frontend Setup (React)

Navigate to the frontend folder:

cd ../frontend

Install dependencies
npm install

Start the frontend development server
npm run dev


The React app will start at:
👉 http://localhost:5173

🔗 4. Connect Frontend and Backend

Ensure the backend (FastAPI) is running on port 8000.

The frontend makes API requests to http://127.0.0.1:8000/predict (or whichever route you defined).

You can configure this inside your React src/api or Axios setup file.

📸 Output Preview

Enter patient details like Glucose, BMI, Age, Blood Pressure, etc.

The app predicts diabetes .


