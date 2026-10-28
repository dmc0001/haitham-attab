import Avatar from "../assets/avatar-optimized.jpg";
import Resume from "../assets/resume-haitham.pdf";
import { profile, skillGroups } from "../data/portfolio";
import { icons } from "./Icons";

export default function About() {
  return (
    <section
      id="about"
      className="about section"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <p className="eyebrow section-kicker">
          <span>02 / ABOUT ME</span>
          <span>A LITTLE CONTEXT</span>
        </p>
        <div className="about-grid">
          <div className="portrait-wrap">
            <img
              src={Avatar}
              alt="Haitham Attab, Android engineer based in Médéa, Algeria"
              loading="lazy"
              width="1224"
              height="1632"
            />
            <div className="portrait-note">
              <span className="status-dot" /> Curious by nature.
              <br />
              <strong>Builder by choice.</strong>
            </div>
            <span className="portrait-star" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="about-copy">
            <h2 id="about-heading">
              Behind the code,
              <br />a curious mind<span className="accent">.</span>
            </h2>
            <p>
              I’m Haitham, an Android engineer based in {profile.location}. I
              enjoy the space where thoughtful design meets dependable
              engineering.
            </p>
            <p>
              My work spans native Android with Kotlin and cross-platform apps
              with Flutter, from enterprise reporting to home services. I work
              with REST APIs, real-time messaging, push notifications, and clean
              architecture to build apps that people enjoy using.
            </p>
            <p>
              Beyond mobile, I work with Go and TypeScript and explore how
              intelligent systems can solve real-world problems.
            </p>
            <a
              className="text-link"
              href={Resume}
              download="Haitham-Attab-Resume.pdf"
            >
              A closer look at my résumé {icons.download}
            </a>
            <div className="about-facts">
              <div>
                <span>BASED IN</span>
                <strong>{profile.location}</strong>
              </div>
              <div>
                <span>LANGUAGES</span>
                <strong>Arabic & English</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-heading">
          <h3>The right tools for the right problem.</h3>
          <span>MY EVERYDAY TOOLKIT</span>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <span className="skill-number">0{index + 1}</span>
              <h4>{group.title}</h4>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
