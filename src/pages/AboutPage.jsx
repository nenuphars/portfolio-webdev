import AboutMeSection from "../components/AboutMeSection";
import data from "../data.json";

function About() {
  const about = data.about;
  return (
    <div id="AboutPage" className="page-wrapper">
      {about.map((oneTopic) => {
        return (
          <AboutMeSection
            key={oneTopic.title}
            title={oneTopic.title}
            content={oneTopic.paragraphs}
          />
        );
      })}
    </div>
  );
}

export default About;
