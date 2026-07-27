import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function ProfessionalSummary() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const MAX_LENGTH = 500;

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      summary: e.target.value,
    });
  };

  return (
    <div className="form-section">
      <div className="section-header">
        <h3>📝 Professional Summary</h3>
        <span>{resumeData.summary.length}/{MAX_LENGTH}</span>
      </div>

      <textarea
        className="summary-box"
        rows="7"
        maxLength={MAX_LENGTH}
        placeholder="Example:

Software Developer with strong knowledge of Java, React, Node.js and MongoDB. Passionate about building scalable web applications and solving real-world problems using Data Structures and Algorithms."
        value={resumeData.summary}
        onChange={handleChange}
      />

      <p className="hint">
        Keep it between 3–5 lines. Highlight your skills, experience and career goals.
      </p>
    </div>
  );
}

export default ProfessionalSummary;