import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Languages() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, e) => {
    const updatedLanguages = [...resumeData.languages];

    updatedLanguages[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      languages: updatedLanguages,
    });
  };

  const addLanguage = () => {
    setResumeData({
      ...resumeData,
      languages: [
        ...resumeData.languages,
        {
          name: "",
          proficiency: "",
        },
      ],
    });
  };

  const removeLanguage = (index) => {
    const updatedLanguages = resumeData.languages.filter(
      (_, i) => i !== index
    );

    setResumeData({
      ...resumeData,
      languages: updatedLanguages,
    });
  };

  return (
    <div className="form-section">

      <h3>🌍 Languages</h3>

      <p className="section-subtitle">
        Add languages you can communicate in.
      </p>

      {resumeData.languages.map((language, index) => (

        <div className="language-card" key={index}>

          <div className="input-grid">

            <input
              type="text"
              name="name"
              placeholder="Language"
              value={language.name}
              onChange={(e) => handleChange(index, e)}
            />

            <select
              name="proficiency"
              value={language.proficiency}
              onChange={(e) => handleChange(index, e)}
            >
              <option value="">Select Proficiency</option>
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Professional">Professional</option>
              <option value="Native">Native</option>
            </select>

          </div>

          {resumeData.languages.length > 1 && (
            <button
              className="delete-btn"
              onClick={() => removeLanguage(index)}
            >
              Remove Language
            </button>
          )}

        </div>

      ))}

      <button
        className="add-btn"
        onClick={addLanguage}
      >
        + Add Language
      </button>

    </div>
  );
}

export default Languages;