import { Link } from "react-router-dom";
import "./CvSection.css"

function CvSection(props) {
  const { title, title_link, degree, degree_link, employer, institution, institution_link, dates, location, description } = props;

  return (
    <div className="cv-section-wrapper">
      <table className="cv-section-table">
        <tr>
          <td className="cv-table-heading">
            {title_link ? <Link to={title_link}>{title}</Link> : title} | {dates}
          </td>
        </tr>
          {degree && <tr><td>{degree_link ? <Link to={degree_link}>{degree}</Link> : degree}</td></tr>}
        <tr>
          <td>{employer ? employer : institution_link ? <Link to={institution_link}>{institution}</Link> : institution}, {location}</td>
        </tr>
        <tr>
        {description[0]!=="" ? <ul>
        {description.map((onePoint)=>{
            return (
                <>
                    <li>{onePoint}</li>
                </>
            )
        })}

        </ul> : <></>}
        </tr>
      </table>
    </div>
  );
}

export default CvSection;
