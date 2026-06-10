import { Link } from "react-router-dom";
import {
  FaFolder,
  FaTrophy,
  FaCalendarAlt,
  FaTag
} from "react-icons/fa";

import type { Achievement } from "../data/achievements";

type Props = {
  achievement: Achievement;
};

function AchievementCard({ achievement }: Props) {
  return (
    <div className="repo-card">
      <div className="repo-title">
        <FaFolder />
        <Link to={`/achievements/${achievement.id}`}>
          {achievement.title}
        </Link>
      </div>

      <p className="repo-desc">
        {achievement.description}
      </p>

      <div className="repo-owner">
        <FaTrophy />
        <span>{achievement.name}</span>
      </div>

      <div className="repo-footer">
        <span>
          <FaTag /> {achievement.category}
        </span>

        <span>
          <FaCalendarAlt /> {achievement.year}
        </span>
      </div>
    </div>
  );
}

export default AchievementCard;