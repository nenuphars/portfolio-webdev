

function AboutMeSection(props) {

    const {title, content} = props
  return (
    <div id="AboutMeSection">
        <h2 className="about-me-section-heading">{title}</h2>
        <div className="about-me-section-content-wrapper">
        {content.map((oneParagraph, index)=>{
            return (
                <p key={index} className="about-me-section-paragraph">{oneParagraph}</p>
            )
        })}

        </div>
    </div>
  )
}

export default AboutMeSection