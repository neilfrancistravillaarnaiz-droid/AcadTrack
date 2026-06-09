function SubmitAchievement() {
  return (
    <section className="page form-page">
      <form className="form-card">
        <h1>Submit Achievement</h1>

        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Course / Department / Role" />
        <input type="text" placeholder="Achievement Title" />
        <select>
          <option>Academic</option>
          <option>Leadership</option>
          <option>Sports</option>
          <option>Technology</option>
          <option>Competition</option>
        </select>
        <textarea placeholder="Achievement Description"></textarea>

        <button type="button">Submit for Review</button>
      </form>
    </section>
  );
}

export default SubmitAchievement;