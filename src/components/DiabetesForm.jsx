import { useState } from "react";
import { predictDiabetes } from "../api/api";
import "./Form.css";

const DiabetesForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    blood_pressure: "",
    skin_thickness: "",
    insulin: "",
    bmi: "",
    diabetes_pedigree: "",
    age: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSend = Object.fromEntries(
        Object.entries(formData).map(([key, val]) => [
          key,
          key === "age" || key === "pregnancies"
            ? parseInt(val)
            : parseFloat(val),
        ])
      );

      console.log("Sending data:", dataToSend);
      const res = await predictDiabetes(dataToSend);
      console.log("API response:", res);
      
      // Fix: res is already the data from api.js, not res.data
      setResult(res);
      setLoading(false);
    } catch (error) {
      console.error("API Error:", error);
      setLoading(false);
      alert("Error making prediction. Please check if the backend is running.");
    }
  };

  const handleReset = () => {
    setFormData({
      pregnancies: "",
      glucose: "",
      blood_pressure: "",
      skin_thickness: "",
      insulin: "",
      bmi: "",
      diabetes_pedigree: "",
      age: "",
    });
    setResult(null);
  };

  return (
    <div className="form-container">
      <h2>Health Details</h2>

      <form onSubmit={handleSubmit} className="form-grid">
        {[
          ["pregnancies", "Pregnancies"],
          ["glucose", "Glucose (mg/dL)"],
          ["blood_pressure", "Blood Pressure (mm Hg)"],
          ["skin_thickness", "Skin Thickness (mm)"],
          ["insulin", "Insulin (IU/mL)"],
          ["bmi", "BMI"],
          ["diabetes_pedigree", "Diabetes Pedigree"],
          ["age", "Age (Years)"],
        ].map(([key, label]) => (
          <div className="input-group" key={key}>
            <label>{label}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
              placeholder={`Enter ${label}`}
            />
          </div>
        ))}

        <div className="btn-group">
          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Calculating..." : "Predict Diabetes Risk"}
          </button>

          <button className="reset-btn" type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiabetesForm;