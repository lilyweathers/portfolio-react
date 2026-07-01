const Hero = () => {
    return (
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
    );
};

export default Hero;