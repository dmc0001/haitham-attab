import { experiences } from "../data/portfolio";
import { icons } from "./Icons";

export default function Exp() {
  return (
    <section
      id="experience"
      className="experience section container"
      aria-labelledby="experience-heading"
    >
      <p className="eyebrow section-kicker">
        <span>03 / THE JOURNEY</span>
        <span>ALWAYS BUILDING, ALWAYS LEARNING</span>
      </p>
      <div className="section-heading">
        <h2 id="experience-heading">
          Experience that
          <br />
          makes a difference<span className="accent">.</span>
        </h2>
        <p>
          Good products come from real collaboration.
          <br />
          Here’s where I’ve been putting that into practice.
        </p>
      </div>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <details
            className="experience-item"
            key={experience.company}
            open={index === 0}
          >
            <summary>
              <span className="experience-date">
                {experience.date}
                {index === 0 && (
                  <span className="current-label">
                    <span className="status-dot" /> Current role
                  </span>
                )}
              </span>
              <span className="experience-role">
                <strong>{experience.title}</strong>
                <span>{experience.company}</span>
              </span>
              <span className="experience-type">{experience.type}</span>
              <span className="expand-icon">{icons.chevron}</span>
            </summary>
            <div className="experience-details">
              <p>{experience.summary}</p>
              <ul>
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
      <div className="education">
        <div>
          <p className="eyebrow">THE FOUNDATION</p>
          <h3>Learning never stops.</h3>
          <p>Université Yahia Fares de Médéa</p>
        </div>
        <div className="education-degrees">
          <div>
            <span>2023 — 2025</span>
            <h4>Master’s in Systems Engineering</h4>
            <p>
              Distributed systems, cloud computing, networking, security, and
              machine learning. Thesis on reinforcement learning for predicting
              DoS and DDoS attacks.
            </p>
          </div>
          <div>
            <span>2020 — 2023</span>
            <h4>BSc in Information Systems</h4>
            <p>
              Computer science, algorithms, databases, and the foundations of
              thoughtful software design. Launched a startup app connecting
              parents with nannies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
