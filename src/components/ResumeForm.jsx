import PersonalInfo from "./PersonalInfo";
import ProfessionalSummary from "./ProfessionalSummary";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Certificates from "./Certificates";
import Achievements from "./Achievements";
import Languages from "./Languages";

import "../styles/form.css";

function ResumeForm() {
  return (
    <aside className="form-panel">

     
      <div className="form-content">
        <PersonalInfo />
        <ProfessionalSummary />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Achievements />
        <Languages />
      </div>

    </aside>
  );
}

export default ResumeForm;