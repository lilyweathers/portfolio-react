const Home = () => {
    return (
        <main className="home">
            <section className="hero">
                <h1>Welcome to Lily's Portfolio</h1>
                <p>I enjoy building modern web applications with React, Node.js,
                    Java, Spring Boot and MongoDB. I'm currently studying Fullstack
                    Web Development at Nackademin and looking for opportunities to
                    continue growing as a developer.
                </p>

                <div className="hero-buttons">
                    <a href="/projects" className="btn">View Projects</a>
                    <a href="/contact" className="btn">Contact Me</a>
                </div>
            </section>
            <section className="about">
                <h2>About Me</h2>
                <p>
                    I'm a passionate web developer with a strong interest in creating
                    user-friendly and efficient web applications. I have experience
                    working with various technologies and frameworks, and I'm always
                    eager to learn and explore new tools and techniques.
                </p>
            </section>

            <section className="skills">
                <h2>Technologies</h2>

                <div className="skills-grid">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>MongoDB</span>
                    <span>MySQL</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Git</span>
                    <span>Docker</span>
                    <span>GitHub Actions</span>
                </div>
            </section>
            <section className="projects-preview">
                <h2>Projects</h2>
                <div className="projects-grid">
                    <article>
                        <div className="project-card">
                            <h3>Fullstack Webshop</h3>
                            <p>Built with React, Node.js, Express and MongoDB.</p>
                        </div>
                    </article>
                    <article>
                        <div className="project-card">
                            <h3>Java Spring Webshop</h3>
                            <p>REST API built with Spring Boot, MySQL and Docker.</p>
                        </div>
                    </article>
                    <article>
                        <div className="project-card">
                            <h3><a href="https://massageterapeuterna.com" target="_blank" rel="noopener noreferrer">MassageTerapeuterna</a></h3>
                            <p>Commercial WordPress website developed during my internship at
                                Just Value AB. Contributed to frontend development using HTML,
                                CSS, JavaScript, implementing client requests,
                                maintaining existing functionality and improving the user
                                experience.
                            </p>
                        </div>
                    </article>
                    <article>
                        <div className="project-card">
                            <h3>Portfolio Website</h3>
                            <p>A responsive React portfolio showcasing my projects and
                                technical skills.</p>
                        </div>
                    </article>
                </div>
            </section>
        </main>


    );
};
export default Home;