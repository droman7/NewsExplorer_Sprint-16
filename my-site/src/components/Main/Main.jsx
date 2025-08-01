import "./Main.css";

export default function Main() {
  const onSubmit = (e) => e.preventDefault();

  return (
    <section className="hero__content">
      <div className="container">
        <h1 className="hero__title">What's going on in the world?</h1>
        <p className="hero__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <form className="search" onSubmit={onSubmit}>
          <input
            className="search__input"
            placeholder="Enter topic"
            aria-label="Enter topic"
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
