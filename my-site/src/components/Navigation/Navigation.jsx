import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({
  isLoggedIn,
  onSignInClick,
  onSignOutClick,
  userName,
}) {
  const location = useLocation();

  return (
    <nav className="nav__container">
      <Link to="/" className="nav__logo">
        NewsExplorer
      </Link>
      <div className="nav__menu">
        <Link
          to="/"
          className={`nav__link ${
            location.pathname === "/" ? "nav__link_active" : ""
          }`}
        >
          Home
        </Link>

        {!isLoggedIn ? (
          <button className="nav__button" onClick={onSignInClick} type="button">
            Sign in
          </button>
        ) : (
          <>
            <Link
              to="/saved-news"
              className={`nav__link ${
                location.pathname === "/saved-news" ? "nav__link_active" : ""
              }`}
            >
              Saved articles
            </Link>
            <button
              className="nav__button"
              onClick={onSignOutClick}
              type="button"
              aria-label="Sign out"
            >
              {userName} ⎋
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
