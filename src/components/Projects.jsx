import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Projects() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, e) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      projects: updatedProjects,
    });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          techStack: "",
          github: "",
          live: "",
          description: "",
        },
      ],
    });
  };

  const removeProject = (index) => {
    const updatedProjects = resumeData.projects.filter(
      (_, i) => i !== index
    );

    setResumeData({
      ...resumeData,
      projects: updatedProjects,
    });
  };

  return (
    <div className="form-section">

      <h3>🚀 Projects</h3>

      <p className="section-subtitle">
        Showcase your best projects with GitHub and Live Demo links.
      </p>

      {resumeData.projects.map((project, index) => (

        <div className="project-card" key={index}>

          <div className="input-grid">

            <input
              type="text"
              name="title"
              placeholder="Project Name"
              value={project.title}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="text"
              name="techStack"
              placeholder="React, Node.js, MongoDB"
              value={project.techStack}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="url"
              name="github"
              placeholder="GitHub Repository"
              value={project.github}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="url"
              name="live"
              placeholder="Live Demo URL"
              value={project.live}
              onChange={(e) => handleChange(index, e)}
            />

          </div>

          <textarea
            rows="5"
            name="description"
            placeholder="Describe your project, features, technologies and your contribution..."
            value={project.description}
            onChange={(e) => handleChange(index, e)}
          />

          {resumeData.projects.length > 1 && (
            <button
              className="delete-btn"
              onClick={() => removeProject(index)}
            >
              Remove Project
            </button>
          )}

        </div>

      ))}

      <button
        className="add-btn"
        onClick={addProject}
      >
        + Add Project
      </button>

    </div>
  );
}

export default Projects;