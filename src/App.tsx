import { useEffect, useState } from "react";
import "./App.css";
import {
  achievements,
  aboutContent,
  education,
  experiences,
  heroDetails,
  profile,
  projects,
  roleAlignment,
  roleAlignmentIntro,
  skills,
} from "./data/content";

type IconName = "mail" | "linkedin" | "github" | "web";
type ProfileWithOptionalPhone = typeof profile & { phone?: string };

const SectionTitle = ({ label }: { label: string }) => (
  <div className="section-title">
    <span>{label}</span>
    <div className="section-divider" />
  </div>
);

const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" role="img" aria-hidden="true">
    <rect
      x="4"
      y="8"
      width="24"
      height="16"
      rx="4"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M6 10l10 8 10-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" role="img" aria-hidden="true">
    <rect
      x="4"
      y="4"
      width="24"
      height="24"
      rx="4"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M11 14v9M21 16.5a2.5 2.5 0 00-5 0V23m5-4.5V23M9.75 10.5h.01"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GithubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" role="img" aria-hidden="true">
    <path
      d="M16 4c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577v-2.02c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.382 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.45 11.45 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.839 1.235 1.911 1.235 3.221 0 4.61-2.806 5.625-5.479 5.921.43.371.814 1.103.814 2.222v3.293c0 .32.218.694.825.576C24.565 25.797 28 21.302 28 16c0-6.627-5.373-12-12-12z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
);

const WebIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" role="img" aria-hidden="true">
    <circle
      cx="16"
      cy="16"
      r="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4 16h24M16 4c3.5 3.6 5.25 7.8 5.25 12s-1.75 8.4-5.25 12c-3.5-3.6-5.25-7.8-5.25-12s1.75-8.4 5.25-12z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const renderIcon = (name: IconName) => {
  switch (name) {
    case "mail":
      return <MailIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    case "github":
      return <GithubIcon />;
    case "web":
      return <WebIcon />;
    default:
      return null;
  }
};

const ExternalLink = ({ href, label }: { href: string; label: string }) => (
  <a className="pill-link" href={href} target="_blank" rel="noreferrer">
    {label}
  </a>
);

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const profilePhone = (profile as ProfileWithOptionalPhone).phone;
  const hasPhone = Boolean(profilePhone);
  const phoneHref = profilePhone?.replace(/\s+/g, "");
  const educationDetails = education as typeof education & { note?: string };
  const connectLinks: { label: string; href: string; icon: IconName }[] = [
    { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
    { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
    { label: "GitHub", href: profile.github, icon: "github" },
    { label: "Tech Blog", href: "https://www.beautyandmind.uk/", icon: "web" },
  ];

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
            <p className="eyebrow">{heroDetails.eyebrow}</p>
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
            {profile.availability ? <span>{profile.availability}</span> : null}
          </div>
          <div className="hero__actions">
            {hasPhone ? (
              <ExternalLink href={`tel:${phoneHref}`} label="Call" />
            ) : null}
          </div>
        </div>
        <div className="hero__photo">
          <div className="photo-frame">
            <img src={heroDetails.photo.src} alt={heroDetails.photo.alt} />
          </div>
          <p className="photo-caption">{heroDetails.photo.caption}</p>
        </div>
      </header>

      <main>
        <section id="about">
          <SectionTitle label="About" />
          <div className="about-grid">
            <p>{aboutContent.intro}</p>
            <div className="about-card">
              <p className="label">Currently</p>
              <p>{aboutContent.current}</p>
              <p className="label">Focus Areas</p>
              <ul>
                {aboutContent.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience">
          <SectionTitle label="Work Logs" />
          <p className="experience-intro">
            I treat roles like long-form experiments—here are the lab notes that
            stuck around.
          </p>
          <div className="experience-timeline">
            {experiences.map((experience) => (
              <article key={experience.company} className="experience-card">
                <div className="experience-card__body">
                  <header>
                    <div>
                      <p className="experience-card__eyebrow">
                        {experience.company}
                      </p>
                      <h3>{experience.role}</h3>
                    </div>
                  </header>
                  {experience.summary ? (
                    <p className="experience-card__summary">
                      {experience.summary}
                    </p>
                  ) : null}
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
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
          <SectionTitle label="Practice & Lab Notes" />
          <p className="role-intro">{roleAlignmentIntro}</p>
          <ul className="role-list">
            {roleAlignment.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section--compact section--connect">
          <SectionTitle label="Connect" />
          <div className="connect-panel">
            <div className="connect-email-block">
              <p className="label">Email</p>
              <a className="connect-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div className="icon-links" role="list">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  className="icon-link"
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noreferrer noopener" : undefined
                  }
                  role="listitem"
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
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
