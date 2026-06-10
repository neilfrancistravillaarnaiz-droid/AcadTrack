import { Link } from "react-router-dom";
import {
  FaTrophy,
  FaCheckCircle,
  FaFolder,
  FaUniversity
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero github-layout">
      <div className="profile-panel">
        <div className="profile-avatar">A</div>

        <h2>AcadTrack</h2>

        <p>
          Professional Achievement Management System
        </p>

        <div className="profile-stats">
          <span>
            <FaTrophy /> Awards
          </span>

          <span>
            <FaCheckCircle /> Verified
          </span>

          <span>
            <FaUniversity /> Institution
          </span>
        </div>
      </div>

      <div className="repo-panel">
        <span className="eyebrow">
          Achievement Repository
        </span>

        <h1>
          Showcase professional achievements,
          awards, certificates, and recognitions.
        </h1>

        <p>
          AcadTrack works like a digital achievement repository where users
          can submit, organize, verify, and showcase accomplishments in a
          clean, professional format.
        </p>

        <div className="repo-meta">
          <span>
            <FaFolder /> Public Recognition
          </span>

          <span className="dot gold"></span>

          <span>
            Professional Portfolio
          </span>
        </div>

        <div className="hero-buttons">
          <Link
            to="/achievements"
            className="btn primary"
          >
            View Achievements
          </Link>

          <Link
            to="/submit"
            className="btn secondary"
          >
            Submit Record
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;