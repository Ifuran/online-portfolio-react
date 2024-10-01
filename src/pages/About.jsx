const About = () => {
  return (
    <>
      <div className="container text-center my-5">
        <header>
          <h1 className="display-4">About Me</h1>
        </header>

        <section className="my-4">
          <p className="lead">
            I am a passionate web developer with experience in building dynamic
            and responsive web applications. My journey in web development
            started with a fascination for how things work under the hood.
          </p>
          <p>
            I have a strong foundation in both frontend and backend
            technologies, including:
          </p>
          <ul className="list-unstyled">
            <li>React, VueJS, HTML5, CSS3, JavaScript</li>
            <li>Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>RESTful APIs and GraphQL</li>
          </ul>
          <p>
            I enjoy collaborating with teams to bring innovative ideas to life
            and solve real-world problems through technology. When I am not
            coding, I love exploring new technologies and improving my skills.
          </p>
        </section>

        <section className="my-4">
          <h2>Let's Connect</h2>
          <p>
            Feel free to reach out if you'd like to collaborate on a project or
            just want to chat!
          </p>
          <a href="#" className="btn btn-primary">
            Contact Me
          </a>
        </section>
      </div>
    </>
  );
};

export default About;
