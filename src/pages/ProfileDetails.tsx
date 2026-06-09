import { useParams, Link } from "react-router-dom";
import { achievements } from "../data/achievements";

function ProfileDetails() {
  const { id } = useParams();
  const person = achievements.find((item) => item.id === Number(id));

  if (!person) {
    return (
      <section className="page section">
        <h1>Profile not found</h1>
      </section>
    );
  }

  return (
    <section className="page details">
      <div className="details-card">
        <div className="avatar large">{person.name.charAt(0)}</div>
        <h1>{person.name}</h1>
        <p>{person.role}</p>

        <h3>Achievement</h3>
        <p>{person.title}</p>
        <p>{person.description}</p>

        <Link to="/profiles" className="btn primary">
          Back to Profiles
        </Link>
      </div>
    </section>
  );
}

export default ProfileDetails;