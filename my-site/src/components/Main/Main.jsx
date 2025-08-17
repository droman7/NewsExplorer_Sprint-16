// Main.jsx (hero only)
import { useState } from "react";
import "./Main.css";
import "../../vendor/fonts.css";

export default function Main({ onSearch }) {
  const [value, setValue] = useState("");
  const [fieldError, setFieldError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const kw = value.trim();
    if (!kw) {
      setFieldError("Please enter a keyword");
      return;
    }
    setFieldError("");
    onSearch(kw);
  }

  return (
    <section className="hero__content">
      <div className="container">
        <h1 className="hero__title">What's going on in the world?</h1>
        <p className="hero__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <form className="search" onSubmit={handleSubmit} noValidate>
          <input
            className="search__input"
            placeholder="Enter topic"
            aria-label="Enter topic"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
        {fieldError && <div className="search__error">{fieldError}</div>}
      </div>
    </section>
  );
}
