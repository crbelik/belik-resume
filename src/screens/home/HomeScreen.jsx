import Header from "../../components/header/header";
import Experience from "../../components/experience/Experience";
import Education from "../../components/education/Education";
import Skill from "../../components/skill/Skill";
import Cursor from "../../components/cursor/Cursor";
import CertificateAward from "../../components/CertificateAward/CertificateAward";

const HomeScreen = () => {
  return (
    <div className="page-container">
      <Header />
      <Experience />
      <Education />
      <Skill />
      <CertificateAward />
      <Cursor />
    </div>
  );
};

export default HomeScreen;
