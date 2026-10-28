import { useRef, useState } from "react";
import { projects, profile } from "../data/portfolio";
import { icons } from "./Icons";

const previews = {
  de9de9: (
    <div className="preview-home">
      <div className="mini-phone home-phone">
        <div className="mini-camera" />
        <span className="mini-brand">
          de9de9<span>●</span>
        </span>
        <small>Good morning, Haitham</small>
        <strong>
          A little help.
          <br />A happier home.
        </strong>
        <span className="mini-search">⌕ &nbsp; Find your next service</span>
        <div className="mini-services">
          <span>{icons.home}Cleaning</span>
          <span>{icons.tool}Repairs</span>
          <span>
            ✧<small>Painting</small>
          </span>
        </div>
        <div className="mini-home-banner">
          <small>MAKE ROOM FOR BETTER DAYS</small>
          <b>
            Your home.
            <br />
            Our care.
          </b>
          <span>Explore services →</span>
        </div>
        <div className="mini-nav">
          ⌂ <span>♡</span> ☷ <span>◯</span>
        </div>
      </div>
      <span className="preview-stamp">
        A LITTLE HELP.
        <br />A LOT OF POSSIBILITY.
      </span>
      <span className="preview-star" aria-hidden="true">
        ✳
      </span>
    </div>
  ),
  reporting: (
    <div className="preview-reporting">
      <div className="report-window">
        <div className="report-toolbar">
          <span>
            <i />
            <i />
            <i />
          </span>
          <small>AUTO REPORTING</small>
          <span>↗</span>
        </div>
        <div className="report-inner">
          <div className="report-hello">
            <small>FIELD OPERATIONS</small>
            <strong>Everything, in sync.</strong>
            <span>Here’s what’s happening today.</span>
          </div>
          <div className="report-stats">
            <div>
              <span>Work orders</span>
              <strong>
                24 <small>↗</small>
              </strong>
            </div>
            <div>
              <span>Completed</span>
              <strong>
                18 <small>✓</small>
              </strong>
            </div>
          </div>
          <div className="report-map">
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-road road-three" />
            <span className="map-river" />
            <span className="map-pin pin-one">●</span>
            <span className="map-pin pin-two">●</span>
            <span className="map-pin pin-three">●</span>
            <span className="map-caption">
              <span className="status-dot" /> Team activity · Live
            </span>
          </div>
          <div className="report-task">
            <span className="task-check">✓</span>
            <span>
              Site inspection report<small>Files synced successfully</small>
            </span>
            <span>↑</span>
          </div>
        </div>
      </div>
    </div>
  ),
  findeat: (
    <div className="preview-findeat">
      <span className="findeat-word">
        find your next
        <br />
        <i>favorite spot.</i>
      </span>
      <div className="mini-phone deal-phone">
        <div className="mini-camera" />
        <span className="mini-brand">
          find eats<span>✳</span>
        </span>
        <small>PICKS THAT FIT YOUR MOOD</small>
        <strong>
          Your mood.
          <br />
          Your next meal.
        </strong>
        <span className="deal-location">⌖ &nbsp; Near you &nbsp;⌄</span>
        <div className="deal-art">
          <span className="plate">
            <span className="food-leaf leaf-one" />
            <span className="food-leaf leaf-two" />
            <span className="food-circle" />
          </span>
          <span className="deal-badge">For you</span>
        </div>
        <div className="deal-copy">
          <b>Picked for you</b>
          <span>A relaxed spot for your next meal.</span>
          <small>See why it fits →</small>
        </div>
      </div>
      <span className="findeat-spark" aria-hidden="true">
        ✳
      </span>
    </div>
  ),
};

export default function Projects() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const visible = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  const openProject = (project) => {
    setSelected(project);
    dialog.current.showModal();
  };
  return (
    <section
      id="projects"
      className="projects section container"
      aria-labelledby="projects-heading"
    >
      <p className="eyebrow section-kicker">
        <span>01 / SELECTED WORK</span>
        <span>FROM IDEAS TO EVERYDAY EXPERIENCES</span>
      </p>
      <div className="section-heading">
        <h2 id="projects-heading">
          Built with purpose<span className="accent">.</span>
        </h2>
        <p>
          Different challenges. The same attention to detail.
          <br />A few things I’ve helped bring to life.
        </p>
      </div>
      <div className="project-filter-row">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {["All work", "Flutter", "Native Android"].map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "All work" && <span>{projects.length}</span>}
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {visible.length} projects
        </span>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article
            className={`project-card ${project.featured ? "featured-project" : "small-project"}`}
            key={project.id}
          >
            {project.featured && (
              <button
                className={`project-preview ${project.id}-preview`}
                type="button"
                aria-label={`View ${project.title} project details`}
                onClick={() => openProject(project)}
              >
                {previews[project.id]}
                <span className="preview-open">{icons.diagonal}</span>
                <span className="concept-label">INTERFACE CONCEPT</span>
              </button>
            )}
            <div className="project-info">
              <div className="project-overline">
                <span>{project.type}</span>
                {!project.featured && icons.code}
              </div>
              <button
                className="project-title"
                type="button"
                onClick={() => openProject(project)}
              >
                <h3>{project.title}</h3>
                {icons.diagonal}
              </button>
              <p>{project.desc}</p>
              <div className="project-tags">
                {(project.tech ?? project.tags ?? []).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {project.links?.length > 0 && (
                <div
                  className="project-links"
                  aria-label={`${project.title} links`}
                >
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label} {icons.diagonal}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="work-footnote">
        <span>Thoughtful interfaces. Reliable foundations.</span>
        <a
          className="text-link"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          More on GitHub {icons.diagonal}
        </a>
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current.close();
        }}
      >
        {selected && (
          <div className="dialog-content">
            <button
              type="button"
              className="dialog-close"
              aria-label="Close project details"
              onClick={() => dialog.current.close()}
            >
              {icons.close}
            </button>
            <p className="eyebrow">{selected.type}</p>
            <h2 id="dialog-title">
              {selected.title}
              <span className="accent">.</span>
            </h2>
            <p className="dialog-subtitle">{selected.label}</p>
            <p>{selected.desc}</p>
            {selected.highlights?.length > 0 && (
              <>
                <h3>App highlights</h3>
                <ul>
                  {selected.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}
            <h3>{selected.detailsHeading ?? "What I worked on"}</h3>
            <ul>
              {selected.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="project-tags">
              {(selected.tech ?? selected.tags ?? []).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {selected.links?.length > 0 && (
              <div
                className="project-links"
                aria-label={`${selected.title} links`}
              >
                {selected.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} {icons.diagonal}
                  </a>
                ))}
              </div>
            )}
            <a
              className="button button-primary"
              href="#contact"
              onClick={() => dialog.current.close()}
            >
              Let’s talk about your project {icons.arrow}
            </a>
          </div>
        )}
      </dialog>
    </section>
  );
}
