import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("awardtrack_admin");
    navigate("/login");
  };

  return (
    <section className="admin-page">
      <aside className="admin-sidebar">
        <h2>AwardTrack</h2>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/achievements">Manage Achievements</Link>
        <Link to="/admin/users">Manage Users</Link>
        <button onClick={logout}>Logout</button>
      </aside>

      <main className="admin-content">
        <h1>Admin Dashboard</h1>

        <div className="admin-grid">
          <div className="stat-card">
            <h3>Total Achievements</h3>
            <p>120</p>
          </div>
          <div className="stat-card">
            <h3>Pending Submissions</h3>
            <p>15</p>
          </div>
          <div className="stat-card">
            <h3>Total Profiles</h3>
            <p>80</p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default AdminDashboard;