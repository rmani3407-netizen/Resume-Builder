import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-section">
      <h3>👤 Personal Information</h3>

      <div className="input-grid">

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={resumeData.fullName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title (Software Developer)"
          value={resumeData.jobTitle}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={resumeData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={resumeData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={resumeData.location}
          onChange={handleChange}
        />

        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={resumeData.linkedin}
          onChange={handleChange}
        />

        <input
          type="url"
          name="github"
          placeholder="GitHub URL"
          value={resumeData.github}
          onChange={handleChange}
        />

        <input
          type="url"
          name="leetcode"
          placeholder="LeetCode URL"
          value={resumeData.leetcode}
          onChange={handleChange}
        />

        <input
          type="url"
          name="portfolio"
          placeholder="Portfolio Website"
          value={resumeData.portfolio}
          onChange={handleChange}
        />

      </div>
    </div>
  );
}

export default PersonalInfo;