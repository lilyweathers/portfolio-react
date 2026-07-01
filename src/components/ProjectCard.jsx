const ProjectCard = ({ title, description }) => {
    return (
        <article>
            <div className="project-card">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>
        </article>
    );
}
export default ProjectCard;