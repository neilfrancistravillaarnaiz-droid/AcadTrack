import { useParams, Link } from "react-router-dom";
import { achievements } from "../data/achievements";

function AchievementDetails() {
  const { id } = useParams();
  const achievement = achievements.find((item) => item.id === Number(id));

  if (!achievement) {
    return (
      <section className="page section">
        <h1>Achievement not found</h1>
        <Link to="/achievements">Back</Link>
      </section>
    );
  }

  return (
    <section className="page details">
      <div className="details-card">
        <div className="badge big">{achievement.badge}</div>
        <h1>{achievement.title}</h1>
        <h3>{achievement.name}</h3>
        <p>{achievement.role}</p>
        <p>{achievement.description}</p>

        <div className="info-row">
          <span>{achievement.category}</span>
          <span>{achievement.year}</span>
        </div>

        <Link to="/achievements" className="btn primary">
          Back to Achievements
        </Link>
      </div>
    </section>
  );
}

export default AchievementDetails;