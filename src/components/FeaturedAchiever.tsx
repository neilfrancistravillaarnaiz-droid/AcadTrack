import {
  FaStar,
  FaCheckCircle,
  FaTrophy
} from "react-icons/fa";

function FeaturedAchiever() {
  return (
    <section className="featured github-box">
      <div>
        <span className="eyebrow">
          Featured Professional
        </span>

        <h2>
          <FaStar /> Neil Francis Arnaiz
        </h2>

        <p>
          Recognized for leadership, system development,
          and professional contribution in web-based
          academic solutions.
        </p>
      </div>

      <div className="featured-award">
        <h3>
          <FaTrophy /> Best Web System Developer
        </h3>

        <p>
          <FaCheckCircle /> Verified Achievement
        </p>
      </div>
    </section>
  );
}

export default FeaturedAchiever;