import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function SaveButton() {

  const { resumeData } = useContext(ResumeContext);

  const saveResume = () => {

    localStorage.setItem(
      "resumeDraft",
      JSON.stringify(resumeData)
    );

    alert("✅ Resume Draft Saved Successfully!");

  };

  return (

    <button
      className="header-btn save-btn"
      onClick={saveResume}
    >
      <span className="btn-icon">
        💾
      </span>

      Save Draft
    </button>

  );

}

export default SaveButton;