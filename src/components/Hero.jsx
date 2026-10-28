import { profile } from "../data/portfolio";
import { icons } from "./Icons";
import Avatar from "../assets/avatar-optimized.jpg";
import FlutterLogo from "../assets/technologies/flutter.svg";
import KotlinLogo from "../assets/technologies/kotlin.svg";
import ReactLogo from "../assets/technologies/react.svg";
import FirebaseLogo from "../assets/technologies/firebase.svg";
import GoLogo from "../assets/technologies/go.svg";

const toolkit = [
  { name: "Flutter", logo: FlutterLogo },
  { name: "Kotlin", logo: KotlinLogo },
  { name: "React Native", logo: ReactLogo },
  { name: "Firebase", logo: FirebaseLogo },
  { name: "Go", logo: GoLogo, wide: true },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero container"
      aria-labelledby="hero-heading"
    >
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> {profile.role.toUpperCase()} · KOTLIN
          & FLUTTER
        </p>
        <h1 id="hero-heading">
          Small screens.
          <br />
          Big{" "}
          <span className="hero-highlight">
            possibilities.
            <svg viewBox="0 0 510 18" fill="none" aria-hidden="true">
              <path d="M3 13C130 0 322 0 505 10" />
            </svg>
          </span>
        </h1>
        <p className="hero-intro">
          Hey, I’m Haitham{" "}
          <span className="wave" aria-hidden="true">
            ↗
          </span>
        </p>
        <p className="hero-description">
          I build native Android apps with Kotlin and cross-platform experiences
          with Flutter. From clean architecture to real-time features, I turn
          complex problems into apps that feel right.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work {icons.diagonal}
          </a>
          <a className="text-link" href="#contact">
            Let’s talk {icons.arrow}
          </a>
        </div>
        <div className="hero-meta">
          <span>{icons.location} Based in Algeria</span>
          <span className="meta-divider" />
          <a href={profile.github} target="_blank" rel="noreferrer">
            {icons.github} GitHub {icons.diagonal}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {icons.linkedin} LinkedIn {icons.diagonal}
          </a>
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label="Illustrative mobile app interface"
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <span className="visual-star star-one" aria-hidden="true">
          ✳
        </span>
        <span className="visual-star star-two" aria-hidden="true">
          +
        </span>
        <div className="floating-label code-label">
          {icons.code}
          <span>
            Thoughtful code.
            <br />
            <strong>Seamless experiences.</strong>
          </span>
        </div>
        <div className="hero-phone">
          <div className="phone-camera" />
          <div className="phone-status">
            <span>9:41</span>
            <span>
              ▮▮▮ <span className="battery" />
            </span>
          </div>
          <div className="app-top">
            <span className="app-logo">
              de9de9<span>●</span>
            </span>
            <span className="app-avatar">H</span>
          </div>
          <div className="app-greeting">A little help goes a long way.</div>
          <div className="app-heading">
            A happy home,
            <br />
            one tap away.
          </div>
          <div className="app-search">
            <span>⌕</span> What can we help with?
          </div>
          <div className="service-grid">
            <div>
              {icons.home}
              <span>Cleaning</span>
            </div>
            <div>
              {icons.tool}
              <span>Repairs</span>
            </div>
            <div>
              <span className="service-sparkle">✧</span>
              <span>Painting</span>
            </div>
          </div>
          <div className="app-feature">
            <span className="app-feature-label">YOUR HOME, TAKEN CARE OF</span>
            <strong>
              A fresh start
              <br />
              for your space.
            </strong>
            <span className="app-book">Find a professional {icons.arrow}</span>
            <span className="app-plant" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="app-bottom">
            <span>
              {icons.home}
              <small>Home</small>
            </span>
            <span>
              {icons.tool}
              <small>Services</small>
            </span>
            <span>
              {icons.mail}
              <small>Messages</small>
            </span>
          </div>
        </div>
        <div className="floating-label profile-label">
          <img src={Avatar} alt="Haitham Attab" width="42" height="42" />
          <span>
            Built with care.
            <br />
            <strong>By a human, for humans.</strong>
          </span>
          <span className="mini-check">{icons.check}</span>
        </div>
        <span className="visual-caption">
          IDEA → CODE → SOMETHING PEOPLE LOVE
        </span>
      </div>
      <div className="hero-strip">
        <span className="strip-heading">A FEW THINGS IN MY TOOLKIT</span>
        {toolkit.map((technology) => (
          <div key={technology.name}>
            <img
              className={`tech-icon${technology.wide ? " tech-icon-wide" : ""}`}
              src={technology.logo}
              alt=""
              width={technology.wide ? 40 : 26}
              height="26"
            />
            {technology.name}
          </div>
        ))}
      </div>
    </section>
  );
}
