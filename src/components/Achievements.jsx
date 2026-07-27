import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Achievements() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, e) => {
    const updatedAchievements = [...resumeData.achievements];

    updatedAchievements[index].title = e.target.value;

    setResumeData({
      ...resumeData,
      achievements: updatedAchievements,
    });
  };

  const addAchievement = () => {
    setResumeData({
      ...resumeData,
      achievements: [
        ...resumeData.achievements,
        {
          title: "",
        },
      ],
    });
  };

  const removeAchievement = (index) => {
    const updatedAchievements = resumeData.achievements.filter(
      (_, i) => i !== index
    );

    setResumeData({
      ...resumeData,
      achievements: updatedAchievements,
    });
  };

  return (
    <div className="form-section">

      <h3>🏆 Achievements</h3>

      <p className="section-subtitle">
        Add awards, hackathons, coding achievements, scholarships or notable accomplishments.
      </p>

      {resumeData.achievements.map((achievement, index) => (

        <div className="achievement-card" key={index}>

          <input
            type="text"
            placeholder="Example: Solved 500+ DSA problems on LeetCode"
            value={achievement.title}
            onChange={(e) => handleChange(index, e)}
          />

          {resumeData.achievements.length > 1 && (
            <button
              className="delete-btn"
              onClick={() => removeAchievement(index)}
            >
              Remove Achievement
            </button>
          )}

        </div>

      ))}

      <button
        className="add-btn"
        onClick={addAchievement}
      >
        + Add Achievement
      </button>

    </div>
  );
}

export default Achievements;