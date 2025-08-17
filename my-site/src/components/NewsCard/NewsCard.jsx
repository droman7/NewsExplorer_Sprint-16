import "./NewsCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function displayDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB");
}

function NewsCard({ article = {}, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = Boolean(article?.isSaved);

  const handleCardClick = () => onCardClick?.(article);
  const handleLikeClick = (e) => {
    e.stopPropagation();
    onCardLike?.({
      id: article._id || article.url,
      isLiked,
      article,
    });
  };

  return (
    <li className="card">
      <div className="card__media" onClick={handleCardClick}>
        {currentUser && (
          <button
            className={`card__like ${isLiked ? "card__like_active" : ""}`}
            type="button"
            onClick={handleLikeClick}
            aria-label={isLiked ? "Unsave article" : "Save article"}
            title={isLiked ? "Remove from saved" : "Save article"}
          />
        )}
        <img
          className="card__image"
          src={article?.urlToImage || ""}
          alt={article?.title || "News image"}
        />
      </div>

      <div className="card__content" onClick={handleCardClick}>
        <time className="card__date">{displayDate(article?.publishedAt)}</time>
        <h2 className="card__name">{article?.title || "Untitled"}</h2>
        {article?.description && (
          <p className="card__desc">{article.description}</p>
        )}
        <span className="card__source">{article?.source?.name}</span>
      </div>
    </li>
  );
}

export default NewsCard;
