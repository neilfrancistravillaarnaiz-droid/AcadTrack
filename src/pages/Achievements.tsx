import AchievementCard from "../components/AchievementCard";
import { achievements } from "../data/achievements";

function Achievements() {
  return (
    <section className="page section">
      <div className="section-header">
        <span className="eyebrow">Achievement Wall</span>
        <h1>All Achievements</h1>
      </div>

      <div className="grid">
        {achievements.map((item) => (
          <AchievementCard key={item.id} achievement={item} />
        ))}
      </div>
    </section>
  );
}

export default Achievements;