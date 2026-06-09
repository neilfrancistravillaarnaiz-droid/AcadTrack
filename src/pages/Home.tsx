import Hero from "../components/Hero";
import FeaturedAchiever from "../components/FeaturedAchiever";
import AchievementCard from "../components/AchievementCard";
import { achievements } from "../data/achievements";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedAchiever />

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Recent Awards</span>
          <h2>Latest Achievements</h2>
        </div>

        <div className="grid">
          {achievements.slice(0, 3).map((item) => (
            <AchievementCard key={item.id} achievement={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;