import { Link } from "react-router-dom";
import type { Achievement } from "../data/achievements";

type Props = {
  achievement: Achievement;
};

function AchievementCard({ achievement }: Props) {
  return (
    <div className="achievement-card">
      <div className="badge">{achievement.badge}</div>
      <h3>{achievement.title}</h3>
      <p className="person">{achievement.name}</p>
      <p>{achievement.description}</p>

      <div className="card-footer">
        <span>{achievement.category}</span>
        <span>{achievement.year}</span>
      </div>

      <Link to={`/achievements/${achievement.id}`} className="view-link">
        View Details
      </Link>
    </div>
  );
}

export default AchievementCard;