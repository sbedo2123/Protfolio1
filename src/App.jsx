import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa";

// ---------- CONFIG ----------

const NAME = "Abdelghany Sayed";
const BIO = "Passionate Web Developer building modern web apps.";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "Git",
  "Laravel",
  "PHP",
];

const PROJECTS = [
  {
    title: " Business Landing Page",
    description:
      "A responsive business landing page built with React and Bootstrap, featuring smooth scrolling and modern design.",
    tech: ["React", "HTML", "Javascript", "CSS", "Bootstrap"],

    github: "https://github.com/sbedo2123/Landing-Page",
    live: "https://sbedo2123.github.io/Landing-Page/",
  },
  {
    title: "Blog Management System",
    description:
      "A dynamic PHP web application with a fully-featured admin panel that allows the administrator to manage blog content efficiently.",
    screenshots: ["screenshotshome.png.png", "screenshotsdashboard.png.png"],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/sbedo2123/blog_project",
    live: "#",
  },
];

const CONTACT = {
  email: "sbedo2123@gmail.com",
  github: "https://github.com/sbedo2123",
  linkedin:
    "https://www.linkedin.com/in/abdelghany-sayed-56493a3a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

// ---------- END CONFIG ----------

export default function App() {
  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <span className="navbar-brand fw-bold">{NAME}</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold display-5">Hi, I’m {NAME}.</h1>
            <p className="lead text-muted">{BIO}</p>
            <div className="d-flex gap-3 mt-3">
              <a
                href={CONTACT.github}
                className="btn btn-outline-dark d-flex align-items-center gap-2"
              >
                GitHub <FaArrowRight />
              </a>
              <a href={CONTACT.linkedin} className="btn btn-outline-primary">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded">
              <h5>Contact</h5>
              <p className="mb-1">Email: {CONTACT.email}</p>
              <small className="text-muted">
                Available for remote & freelance work.
              </small>
            </div>
          </div>
        </div>
      </header>

      <section id="projects" className="container py-5">
        <h2 className="fw-bold mb-4">Projects</h2>
        <div className="row g-4">
          {PROJECTS.map((p, i) => (
            <div className="col-md-6" key={i}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text text-muted">{p.description}</p>
                  <p className="card-text text-muted">{p.description}</p>

                  {p.screenshots && p.screenshots.length > 0 && (
                    <div className="mb-3 d-flex flex-wrap">
                      {p.screenshots.map((src, idx) => (
                        <a
                          key={idx}
                          href={`/Protfolio1/${src}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="me-2 mb-2"
                        >
                          <img
                            src={`/Protfolio1/${src}`}
                            alt={`${p.title} screenshot ${idx + 1}`}
                            style={{
                              width: 140,
                              height: 90,
                              objectFit: "cover",
                            }}
                            className="rounded border"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="mb-3">
                    {(p.tech || p.technologies || []).map((t) => (
                      <span key={t} className="badge bg-secondary me-2">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={p.live} className="btn btn-sm btn-primary me-2">
                    Live
                  </a>
                  <a href={p.github} className="btn btn-sm btn-outline-dark">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="container py-5">
        <h2 className="fw-bold mb-3">Skills</h2>
        <div className="d-flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span key={s} className="badge bg-dark">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="container py-5">
        <h2 className="fw-bold mb-3">Contact</h2>
        <p>
          Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <div className="d-flex gap-3">
          <a href={CONTACT.github} className="btn btn-outline-dark">
            GitHub
          </a>
          <a href={CONTACT.linkedin} className="btn btn-outline-primary">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center py-4 bg-white border-top mt-5">
        <small className="text-muted">
          © {new Date().getFullYear()} {NAME} — React + Bootstrap Portfolio
        </small>
      </footer>
    </div>
  );
}
