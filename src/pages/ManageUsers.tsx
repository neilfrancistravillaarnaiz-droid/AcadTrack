import { achievements } from "../data/achievements";

function ManageUsers() {
  return (
    <section className="admin-content full">
      <h1>Manage Users</h1>

      <div className="grid">
        {achievements.map((user) => (
          <div className="profile-card" key={user.id}>
            <div className="avatar">{user.name.charAt(0)}</div>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ManageUsers;