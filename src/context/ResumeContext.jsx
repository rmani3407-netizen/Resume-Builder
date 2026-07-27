import { createContext, useEffect, useState } from "react";

export const ResumeContext = createContext();

const defaultResumeData = {
  // ===========================
  // Personal Information
  // ===========================

  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
  location: "",

  linkedin: "",
  github: "",
  leetcode: "",
  portfolio: "",

  summary: "",

  // ===========================
  // Experience
  // ===========================

  experience: [
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

  // ===========================
  // Skills
  // ===========================

  skills: {
    languages: "",
    frontend: "",
    backend: "",
    database: "",
    tools: "",
    coreConcepts: "",
  },

  // ===========================
  // Projects
  // ===========================

  projects: [
    {
      title: "",
      techStack: "",
      github: "",
      live: "",
      description: "",
    },
  ],

  // ===========================
  // Education
  // ===========================

  education: [
    {
      college: "",
      degree: "",
      branch: "",
      cgpa: "",
      startYear: "",
      endYear: "",
    },
  ],

  // ===========================
  // Certificates
  // ===========================

  certificates: [
    {
      name: "",
      organization: "",
      year: "",
      credential: "",
    },
  ],

  // ===========================
  // Achievements
  // ===========================

  achievements: [
    {
      title: "",
    },
  ],

  // ===========================
  // Languages
  // ===========================

  languages: [
    {
      name: "",
      proficiency: "",
    },
  ],
};

function ResumeProvider({ children }) {

  const [resumeData, setResumeData] = useState(() => {

    const saved = localStorage.getItem("resumeDraft");

    return saved ? JSON.parse(saved) : defaultResumeData;

  });

  useEffect(() => {

    localStorage.setItem(
      "resumeDraft",
      JSON.stringify(resumeData)
    );

  }, [resumeData]);

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export default ResumeProvider;