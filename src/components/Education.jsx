import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Education() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, e) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          college: "",
          degree: "",
          branch: "",
          startYear: "",
          endYear: "",
          cgpa: "",
        },
      ],
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = resumeData.education.filter(
      (_, i) => i !== index
    );

    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  return (
    <div className="form-section">

      <h3>🎓 Education</h3>

      <p className="section-subtitle">
        Add your educational qualifications.
      </p>

      {resumeData.education.map((edu, index) => (

        <div className="education-card" key={index}>

          <div className="input-grid">

            <input
              type="text"
              name="college"
              placeholder="College / University"
              value={edu.college}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="text"
              name="branch"
              placeholder="Branch / Specialization"
              value={edu.branch}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="text"
              name="cgpa"
              placeholder="CGPA"
              value={edu.cgpa}
              onChange={(e) => handleChange(index, e)}
            />

           <input
  type="month"
  name="startYear"
  value={edu.startYear}
  onChange={(e) => handleChange(index, e)}
/>

<input
  type="month"
  name="endYear"
  value={edu.endYear}
  onChange={(e) => handleChange(index, e)}
/>

        

          </div>

          {resumeData.education.length > 1 && (
            <button
              className="delete-btn"
              onClick={() => removeEducation(index)}
            >
              Remove Education
            </button>
          )}

        </div>

      ))}

      <button
        className="add-btn"
        onClick={addEducation}
      >
        + Add Education
      </button>

    </div>
  );
}

export default Education;