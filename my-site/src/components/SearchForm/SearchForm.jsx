import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="search">
      <div className="search__overlay">
        <h1 className="search__title">What’s going on in the world?</h1>
        <p className="search__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form">
          <input
            type="text"
            placeholder="Enter topic"
            className="search__input"
            required
          />
          <button type="submit" className="search__button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
