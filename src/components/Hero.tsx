import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">Digital Wall of Recognition</span>
        <h1>Showcase Everyone’s Achievements, Awards, and Success Stories</h1>
        <p>
          AwardTrack is a modern platform for displaying student, faculty, and
          organization achievements in one beautiful digital space.
        </p>

        <div className="hero-buttons">
          <Link to="/achievements" className="btn primary">
            View Achievements
          </Link>
          <Link to="/submit" className="btn secondary">
            Submit Achievement
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <h3>🏆 Hall of Fame</h3>
        <p>Celebrate excellence, leadership, innovation, and success.</p>
      </div>
    </section>
  );
}

export default Hero;