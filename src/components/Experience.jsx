import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Experience() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, e) => {
    const updated = [...resumeData.experience];

    if (e.target.type === "checkbox") {
      updated[index][e.target.name] = e.target.checked;
    } else {
      updated[index][e.target.name] = e.target.value;
    }

    setResumeData({
      ...resumeData,
      experience: updated,
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          company: "",
          role: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index) => {
    const updated = resumeData.experience.filter(
      (_, i) => i !== index
    );

    setResumeData({
      ...resumeData,
      experience: updated,
    });
  };

  return (
    <div className="form-section">

      <h3>💼 Experience</h3>

      {resumeData.experience.map((exp, index) => (
        <div className="experience-card" key={index}>

          <div className="input-grid">

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="text"
              name="role"
              placeholder="Job Role"
              value={exp.role}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={exp.location}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="date"
              name="startDate"
              value={exp.startDate}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="date"
              name="endDate"
              value={exp.endDate}
              disabled={exp.current}
              onChange={(e) => handleChange(index, e)}
            />

          </div>

          <label className="checkbox-row">
            <input
              type="checkbox"
              name="current"
              checked={exp.current}
              onChange={(e) => handleChange(index, e)}
            />

            I currently work here
          </label>

          <textarea
            rows="5"
            name="description"
            placeholder="Describe your responsibilities, achievements and technologies used..."
            value={exp.description}
            onChange={(e) => handleChange(index, e)}
          />

          {resumeData.experience.length > 1 && (
            <button
              className="delete-btn"
              onClick={() => removeExperience(index)}
            >
              Remove Experience
            </button>
          )}

        </div>
      ))}

      <button
        className="add-btn"
        onClick={addExperience}
      >
        + Add Experience
      </button>

    </div>
  );
}

export default Experience;