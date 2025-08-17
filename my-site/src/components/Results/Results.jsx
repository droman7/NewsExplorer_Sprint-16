// components/Results/Results.jsx
import NewsCard from "../NewsCard/NewsCard";
import "./Results.css";

function displayDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB");
}

export default function Results({
  hasSearched,
  isLoading,
  error,
  articles,
  visible,
  onShowMore,
}) {
  if (!hasSearched) return null;

  if (isLoading) {
    return (
      <section className="results">
        <div className="preloader">
          <div className="preloader__spinner" />
          <p className="preloader__text">Searching for news…</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="results">
        <div className="error">
          <h3 className="error__title">Error</h3>
          <p className="error__text">{error}</p>
        </div>
      </section>
    );
  }

  if (!articles.length) {
    return (
      <section className="results">
        <div className="empty">
          <h3 className="empty__title">Nothing Found</h3>
          <p className="empty__text">Try searching for something else.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="results">
      <h2 className="results__title">Search results</h2>
      <ul className="cards">
        {articles.slice(0, visible).map((a, i) => (
          <NewsCard key={`${a.url}-${i}`} article={a} />
        ))}
      </ul>

      {visible < articles.length && (
        <button className="results__more" onClick={onShowMore}>
          Show more
        </button>
      )}
    </section>
  );
}
