import Header from "../components/Header";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import DownloadButton from "../components/DownloadButton";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <>
      <Header />

      <main className="dashboard">
        <ResumeForm />

        <section className="preview-section">
          <div className="preview-toolbar">
            
          </div>

          <ResumePreview />
        </section>
      </main>
    </>
  );
}

export default Dashboard;