import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { icons } from "./Icons";
import Resume from "../assets/resume-haitham.pdf";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied!");
    } catch {
      setCopyStatus("Couldn’t copy. Use the email link to get in touch.");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopyStatus(""), 5000);
  };
  return (
    <section
      id="contact"
      className="contact section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <p className="eyebrow section-kicker">
          <span>04 / SAY HELLO</span>
          <span>GOOD THINGS START WITH A CONVERSATION</span>
        </p>
        <div className="contact-content">
          <div>
            <h2 id="contact-heading">
              Have something
              <br />
              in mind? <span>Let’s build it.</span>
            </h2>
            <p>
              A new idea, a mobile challenge, or a team that cares about the
              details.
              <br />
              I’d love to hear what you’re working on.
            </p>
            <a
              className="button button-primary"
              href={`mailto:${profile.email}`}
            >
              Let’s make it happen {icons.diagonal}
            </a>
          </div>
          <span className="contact-star" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="contact-bottom">
          <div className="email-wrap">
            <span className="eyebrow">DROP ME A LINE</span>
            <div>
              <a className="email-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button
                className="copy-button"
                aria-label="Copy email address"
                type="button"
                onClick={copyEmail}
              >
                {copyStatus === "Email copied!" ? icons.check : icons.copy}
              </button>
            </div>
            <p className="copy-status" role="status">
              {copyStatus}
            </p>
          </div>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub {icons.diagonal}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn {icons.diagonal}
            </a>
            <a href={Resume} download="Haitham-Attab-Resume.pdf">
              Résumé {icons.download}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
