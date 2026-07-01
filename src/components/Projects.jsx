import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
    return (
        <section className="projects-preview">
            <h2>Projects</h2>
            <div className="projects-grid">
                <ProjectCard
                    title="Fullstack Webshop"
                    description="Built with React, Node.js, Express and MongoDB.">

                </ProjectCard>
                <ProjectCard
                    title="Java Spring Webshop"
                    description="REST API built with Spring Boot, MySQL and Docker.">
                </ProjectCard>
                <ProjectCard
                    title='<a href="https://massageterapeuterna.com" target="_blank" rel="noopener noreferrer">MassageTerapeuterna</a>'
                    description="Commercial WordPress website developed during my internship at
                            Just Value AB. Contributed to frontend development using HTML,
                            CSS, JavaScript, implementing client requests,
                            maintaining existing functionality and improving the user
                            experience.">
                
                </ProjectCard>
                <ProjectCard
                    title='Portfolio Website'
                    description="A responsive React portfolio showcasing my projects and
                            technical skills.">
                </ProjectCard>
            </div>
        </section >
    );
}
export default Projects;