import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import "../styles/resume.css";

function ResumePreview() {
  const { resumeData } = useContext(ResumeContext);

  return (
    <div
      className="preview-panel"
      id="resume-preview"
    >
      {/* ================= Resume Header ================= */}

      <div className="resume-header">
        <h1>{resumeData.fullName || "YOUR NAME"}</h1>

     <p className="contact">
  {resumeData.email}

  {resumeData.email && resumeData.phone ? " | " : ""}

  {resumeData.phone}

  {(resumeData.email || resumeData.phone) && resumeData.location
    ? " | "
    : ""}

  {resumeData.location}
</p>

        <div className="header-links">
          {resumeData.linkedin && (
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn
            </a>
          )}

          {resumeData.github && (
            <a
              href={resumeData.github}
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>
          )}

          {resumeData.portfolio && (
            <a
              href={resumeData.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              🌐 Portfolio
            </a>
          )}

          {resumeData.leetcode && (
            <a
              href={resumeData.leetcode}
              target="_blank"
              rel="noreferrer"
            >
              🟡 LeetCode
            </a>
          )}
        </div>
      </div>

      {/* ================= Professional Summary ================= */}

      <h2>Professional Summary</h2>

      <p>{resumeData.summary}</p>

      {/* ================= Education ================= */}

    {/* ================= Education ================= */}

<h2>Education</h2>

{resumeData.education.map((edu, index) => (
  <div key={index} className="preview-education">

    <h3>{edu.college || "College / University"}</h3>

    <p>
      <strong>{edu.degree}</strong>
      {edu.branch ? ` | ${edu.branch}` : ""}
    </p>

    {(edu.startYear || edu.endYear) && (
      <p>
        <strong>Duration:</strong> {edu.startYear || "Present"} - {edu.endYear || "Present"}
      </p>
    )}

    {edu.cgpa && (
      <p>
        <strong>CGPA:</strong> {edu.cgpa}
      </p>
    )}

  </div>
))}

      {/* ================= Technical Skills ================= */}

      <h2>Technical Skills</h2>

      <div className="preview-skills">
        {resumeData.skills.languages && (
          <p>
            <strong>Languages:</strong>{" "}
            {resumeData.skills.languages}
          </p>
        )}

        {resumeData.skills.frontend && (
          <p>
            <strong>Frontend:</strong>{" "}
            {resumeData.skills.frontend}
          </p>
        )}

        {resumeData.skills.backend && (
          <p>
            <strong>Backend:</strong>{" "}
            {resumeData.skills.backend}
          </p>
        )}

        {resumeData.skills.database && (
          <p>
            <strong>Database:</strong>{" "}
            {resumeData.skills.database}
          </p>
        )}

        {resumeData.skills.tools && (
          <p>
            <strong>Tools & Platforms:</strong>{" "}
            {resumeData.skills.tools}
          </p>
        )}

        {resumeData.skills.coreConcepts && (
          <p>
            <strong>Core Concepts:</strong>{" "}
            {resumeData.skills.coreConcepts}
          </p>
        )}
      </div>

      {/* ================= Projects ================= */}

      <h2>Projects</h2>

      {resumeData.projects.map((project, index) => (
        <div key={index} className="preview-project">
          <h3>{project.title || "Project Title"}</h3>

          {project.techStack && (
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
          )}

          {project.description && (
            <p>{project.description}</p>
          )}

          {project.github && (
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                {project.github}
              </a>
            </p>
          )}

          {project.live && (
            <p>
              <strong>Live Demo:</strong>{" "}
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                {project.live}
              </a>
            </p>
          )}
        </div>
      ))}

      {/* ================= Experience ================= */}

     {/* ================= Experience ================= */}
{/* ================= Experience ================= */}

<h2>Experience</h2>

{resumeData.experience.map((exp, index) => (
  <div key={index} className="preview-experience">

    <h3>{exp.company || "Company Name"}</h3>

    {exp.role && (
      <p>
        <strong>{exp.role}</strong>
      </p>
    )}

    {exp.location && (
      <p>
        📍 {exp.location}
      </p>
    )}

    {(exp.startDate || exp.endDate || exp.current) && (
      <p>
        <strong>Duration:</strong>{" "}
        {exp.startDate || "—"} - {exp.current ? "Present" : (exp.endDate || "—")}
      </p>
    )}

    {exp.description && (
      <p>{exp.description}</p>
    )}

  </div>
))}

      {/* ================= Certificates ================= */}
{/* ================= Certificates ================= */}

<h2>Certificates</h2>

{resumeData.certificates.map((certificate, index) => (
  <div key={index} className="preview-certificate">

    <h3>{certificate.name || "Certificate Name"}</h3>

    <p>
      {certificate.organization}
      {certificate.organization && certificate.year ? " • " : ""}
      {certificate.year}
    </p>

    {certificate.credential && (
      <p>
        <strong>Credential:</strong>{" "}
        <a
          href={certificate.credential}
          target="_blank"
          rel="noreferrer"
        >
          View Certificate
        </a>
      </p>
    )}

  </div>
))}

      {/* ================= Achievements ================= */}

      <h2>Achievements</h2>

      {resumeData.achievements.map((achievement, index) => (
        <div key={index} className="preview-achievement">
          {achievement.title && (
            <p>• {achievement.title}</p>
          )}
        </div>
      ))}

      {/* ================= Languages ================= */}

      <h2>Languages</h2>

      {resumeData.languages.map((language, index) => (
        <div key={index} className="preview-language">
          <p>
            <strong>{language.name}</strong>
            {language.proficiency &&
              ` - ${language.proficiency}`}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ResumePreview;