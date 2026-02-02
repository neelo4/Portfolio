import { useEffect, useState } from "react";
import "./App.css";
import {
  achievements,
  education,
  experiences,
  profile,
  projects,
  roleAlignment,
  skills,
} from "./data/content";

const SectionTitle = ({ label }: { label: string }) => (
  <div className="section-title">
    <span>{label}</span>
    <div className="section-divider" />
  </div>
);

const ExternalLink = ({ href, label }: { href: string; label: string }) => (
  <a className="pill-link" href={href} target="_blank" rel="noreferrer">
    {label}
  </a>
);

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const phoneHref = profile.phone.replace(/\s+/g, "");
  const educationDetails = education as typeof education & { note?: string };

  useEffect(() => {
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme((mode) => (mode === "light" ? "dark" : "light"));

  return (
    <div className="page">
      <header className="hero" id="home">
        <div className="hero__content">
          <div className="hero__top-row">
            <p className="eyebrow">Portfolio · 2026</p>
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Activate ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? "☾ Dark mode" : "☀︎ Light mode"}
            </button>
          </div>
          <h1>{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__summary">{profile.summary}</p>
          <ul className="hero__highlights">
            {profile.heroHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero__meta">
            <span>{profile.location}</span>
            <span>{profile.availability}</span>
          </div>
          <div className="hero__actions">
            <ExternalLink href={`mailto:${profile.email}`} label="Email" />
            <ExternalLink href={`tel:${phoneHref}`} label="Call" />
            <ExternalLink href={profile.linkedin} label="LinkedIn" />
            <ExternalLink href={profile.github} label="GitHub" />
          </div>
        </div>
        <div className="hero__photo">
          <div className="photo-frame">
            <img src="/images/neelofar.jpg" alt="Neelofar Khan" />
          </div>
          <p className="photo-caption">London, United Kingdom</p>
        </div>
      </header>

      <main>
        <section id="about">
          <SectionTitle label="About" />
          <div className="about-grid">
            <p>
              From banking-grade infrastructure portals to AI-assisted DevOps
              copilots, I translate complex financial workflows into responsive,
              accessible experiences. My toolkit spans component-driven
              architecture, GraphQL/Apollo, realtime data streams (WebSockets,
              SSE, RxJS), and disciplined testing practices. I thrive on close
              collaboration with product, UX, and platform teams to ship
              resilient releases through automated CI/CD.
            </p>
            <div className="about-card">
              <p className="label">Currently</p>
              <p>
                Investing my post–8 January 2026 time in a self-funded fintech
                component library, contributing to open-source React tools, and
                mentoring communities of practice.
              </p>
              <p className="label">Focus Areas</p>
              <ul>
                <li>Design tokens, accessibility, and npm-ready UI kits</li>
                <li>Open-source contributions around Storybook, docs automation</li>
                <li>Advanced data visualisation & AI-assisted product surfaces</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience">
          <SectionTitle label="Experience" />
          <div className="experience-list">
            {experiences.map((experience) => (
              <article key={experience.company} className="experience-card">
                <header>
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="company">{experience.company}</p>
                  </div>
                  <div className="period">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                </header>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <SectionTitle label="Selected Projects" />
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <ExternalLink href={project.link} label="Visit" />
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionTitle label="Expertise" />
          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.title}>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education">
          <SectionTitle label="Education" />
          <div className="education-card">
            <div>
              <h3>{educationDetails.degree}</h3>
              <p>{educationDetails.school}</p>
            </div>
            {educationDetails.note ? <p>{educationDetails.note}</p> : null}
          </div>
        </section>

        <section id="achievements">
          <SectionTitle label="Achievements & Certifications" />
          <ul className="achievements">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section id="role-fit">
          <SectionTitle label="Why I’m A Match" />

          <ul className="role-list">
            {roleAlignment.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <SectionTitle label="Connect" />
          <div className="contact-card">
            <div>
              <p className="label">Email</p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div>
              <p className="label">Phone</p>
              <a href={`tel:${phoneHref}`}>{profile.phone}</a>
            </div>
            <div>
              <p className="label">Links</p>
              <div className="contact-links">
                <ExternalLink href={profile.linkedin} label="LinkedIn" />
                <ExternalLink href={profile.github} label="GitHub" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with React +
          Vite.
        </p>
      </footer>
    </div>
  );
}

export default App;
