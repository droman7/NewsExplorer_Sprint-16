import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../vendor/fonts.css";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Profile from "../pages/SavedNews/SavedNews";
import Results from "../components/Results/Results";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { getNews } from "../utils/NewsApi";

function App() {
  const [currentUser] = useState(null);

  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(keyword) {
    setHasSearched(true);
    setIsLoading(true);
    setError(null);
    setArticles([]);
    setVisible(0);
    try {
      const data = await getNews(keyword);
      const list = Array.isArray(data.articles) ? data.articles : [];
      setArticles(list);
      setVisible(Math.min(3, list.length));
    } catch (e) {
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  }
  function handleShowMore() {
    setVisible((v) => Math.min(v + 3, articles.length));
  }

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app-background">
          <Header onSignInClick={() => {}} />
          <Routes>
            <Route path="/" element={<Main onSearch={handleSearch} />} />
            <Route path="/saved-news" element={<Profile />} />
          </Routes>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <Results
                hasSearched={hasSearched}
                isLoading={isLoading}
                error={error}
                articles={articles}
                visible={visible}
                onShowMore={handleShowMore}
              />
            }
          />
        </Routes>

        <About />
        <Footer />
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
