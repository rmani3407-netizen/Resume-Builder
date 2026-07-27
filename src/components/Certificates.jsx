import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Certificates() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, e) => {
    const updatedCertificates = [...resumeData.certificates];

    updatedCertificates[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      certificates: updatedCertificates,
    });
  };

  const addCertificate = () => {
    setResumeData({
      ...resumeData,
      certificates: [
        ...resumeData.certificates,
        {
          name: "",
          organization: "",
          year: "",
          credential: "",
        },
      ],
    });
  };

  const removeCertificate = (index) => {
    const updatedCertificates = resumeData.certificates.filter(
      (_, i) => i !== index
    );

    setResumeData({
      ...resumeData,
      certificates: updatedCertificates,
    });
  };

  return (
    <div className="form-section">

      <h3>📜 Certifications</h3>

      <p className="section-subtitle">
        Add your professional certifications.
      </p>

      {resumeData.certificates.map((certificate, index) => (

        <div className="certificate-card" key={index}>

          <div className="input-grid">

            <input
              type="text"
              name="name"
              placeholder="Certificate Name"
              value={certificate.name}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="text"
              name="organization"
              placeholder="Issuing Organization"
              value={certificate.organization}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="text"
              name="year"
              placeholder="Year"
              value={certificate.year}
              onChange={(e) => handleChange(index, e)}
            />

            <input
              type="url"
              name="credential"
              placeholder="Credential URL"
              value={certificate.credential}
              onChange={(e) => handleChange(index, e)}
            />

          </div>

          {resumeData.certificates.length > 1 && (
            <button
              className="delete-btn"
              onClick={() => removeCertificate(index)}
            >
              Remove Certificate
            </button>
          )}

        </div>

      ))}

      <button
        className="add-btn"
        onClick={addCertificate}
      >
        + Add Certificate
      </button>

    </div>
  );
}

export default Certificates;