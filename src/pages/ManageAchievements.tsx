import { achievements } from "../data/achievements";

function ManageAchievements() {
  return (
    <section className="admin-content full">
      <h1>Manage Achievements</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Achievement</th>
            <th>Category</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {achievements.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ManageAchievements;