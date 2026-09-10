import "./Result.css";

const Result = ({ result }) => {
  if (!result) return null;

  const { prediction } = result;
  const isDiabetic = prediction === 1;

  return (
    <div className={`result-card ${isDiabetic ? "high-risk" : "low-risk"}`}>
      <h3>Predicted Diabetes Risk</h3>

      <div className="prediction-result">
        <div className={`prediction-badge ${isDiabetic ? "high" : "low"}`}>
          {isDiabetic ? "HIGH RISK" : "LOW RISK"}
        </div>
      </div>

      {isDiabetic ? (
        <>
          <p>⚠ You may have a <b>higher risk</b> of diabetes.</p>
          <ul>
            <li>Consult a healthcare provider</li>
            <li>Control sugar intake</li>
            <li>Follow a regular exercise routine</li>
          </ul>
        </>
      ) : (
        <>
          <p>✅ You appear to be at a <b>lower risk</b> of diabetes.</p>
          <ul>
            <li>Maintain a balanced diet</li>
            <li>Stay physically active</li>
            <li>Schedule regular checkups</li>
          </ul>
        </>
      )}

      <p className="note">*This is an AI prediction, not a medical diagnosis.</p>
    </div>
  );
};

export default Result;
