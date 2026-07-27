import SaveButton from "./SaveButton";
import DownloadButton from "./DownloadButton";
import "../styles/header.css";


function Header() {


  return (

    <header className="header">


      <div className="header-left">


        <div className="logo-box">
          📄
        </div>



        <div className="header-title">

          <h1>
            Resume Builder
          </h1>


          <p>
            Create ATS-Friendly Resume in Minutes
          </p>

        </div>


      </div>




      <div className="header-right">


        <SaveButton />


        <DownloadButton />


      </div>


    </header>

  );

}


export default Header;