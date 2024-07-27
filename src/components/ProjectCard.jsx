import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard(props) {
    const {title, link_name, dates, short_description, technologies} = props

  return (
    <Link to={`/projects/${link_name}`}>
    <div className="project-card-wrapper">

    <div className="project-card-image-wrapper"></div>
    <div className="project-card-info-wrapper">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-dates">{dates}</p>
        <p className="project-card-description">{short_description}</p>
        <div className="project-card-technologies-wrapper">
        
            {technologies.map((oneTech)=>{
                return (
                    <>
                    <p className="technology-bubble">
                        {oneTech+" "}

                    </p>
                    </>
                )
            })}

        </div>

    </div>

    
    </div>
    </Link>
  )
}

export default ProjectCard