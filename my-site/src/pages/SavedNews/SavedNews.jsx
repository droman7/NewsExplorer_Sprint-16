import "./SavedNews.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function SavedNews() {
  return (
    <>
      <Navigation isLoggedIn={true} userName="David" />
      <section className="saved-news">
        <h1 className="saved-news__title">Saved articles</h1>
        <p className="saved-news__count">You have 3 saved articles</p>
        {/* You can map NewsCard components here */}
        <div className="saved-news__cards">
          <div className="saved-news__card">[NewsCard placeholder]</div>
          <div className="saved-news__card">[NewsCard placeholder]</div>
          <div className="saved-news__card">[NewsCard placeholder]</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
