import { Link } from "react-router-dom";
import { achievements } from "../data/achievements";

function Profiles() {
  return (
    <section className="page section">
      <div className="section-header">
        <span className="eyebrow">People</span>
        <h1>Achievement Profiles</h1>
      </div>

      <div className="grid">
        {achievements.map((person) => (
          <div className="profile-card" key={person.id}>
            <div className="avatar">{person.name.charAt(0)}</div>
            <h3>{person.name}</h3>
            <p>{person.role}</p>
            <Link to={`/profiles/${person.id}`} className="view-link">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Profiles;