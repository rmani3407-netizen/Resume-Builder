import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Skills() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      skills: {
        ...resumeData.skills,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="form-section">

      <h3>🛠 Technical Skills</h3>

      <p className="section-subtitle">
        Enter skills separated by commas.
      </p>

      <div className="input-grid">

        <div>
          <label>Programming Languages</label>
          <input
            type="text"
            name="languages"
            placeholder="Java, C++, Python"
            value={resumeData.skills.languages}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Frontend</label>
          <input
            type="text"
            name="frontend"
            placeholder="React, HTML, CSS, JavaScript"
            value={resumeData.skills.frontend}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Backend</label>
          <input
            type="text"
            name="backend"
            placeholder="Node.js, Express.js"
            value={resumeData.skills.backend}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Database</label>
          <input
            type="text"
            name="database"
            placeholder="MongoDB, MySQL"
            value={resumeData.skills.database}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tools & Platforms</label>
          <input
            type="text"
            name="tools"
            placeholder="Git, GitHub, VS Code, AWS"
            value={resumeData.skills.tools}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Core Concepts</label>
          <input
            type="text"
            name="coreConcepts"
            placeholder="DSA, OOP, DBMS, OS, CN"
            value={resumeData.skills.coreConcepts}
            onChange={handleChange}
          />
        </div>

      </div>

    </div>
  );
}

export default Skills;