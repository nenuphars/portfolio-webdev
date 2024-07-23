import CvSection from "../components/CvSection";
import data from "../data.json";

function ExperienceEducationPage() {
  const experience = data.experience;
  const education = data.education;

  return (
    <div id="ExperienceEducationPage" className="page-wrapper">
      <h2>My Education</h2>
      {education.map((oneEdu) => {
        return (
          <>
            <CvSection
              key={oneEdu.title}
              title={oneEdu.title}
              degree={oneEdu.info.degree}
              degree_link={oneEdu.info.degree_link}
              institution={oneEdu.info.institution}
              institution_link={oneEdu.info.institution_link}
              dates={oneEdu.info.time_span}
              location={oneEdu.info.location}
              description={oneEdu.info.description}
            />
          </>
        );
      })}
      <h2>My Career Path</h2>
      {experience.map((oneExp) => {
        console.log(oneExp);
        return (
          <>
            <CvSection
              key={oneExp.title}
              title={oneExp.title}
              title_link={oneExp.title_link}
              employer={oneExp.info.employer}
              dates={oneExp.info.time_span}
              location={oneExp.info.location}
              description={oneExp.info.description}
            />
          </>
        );
      })}
    </div>
  );
}

export default ExperienceEducationPage;
