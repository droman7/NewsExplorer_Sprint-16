import "./About.css";

export default function About() {
  return (
    <section className="about">
      <img src="/author.jpg" alt="Author" className="about__image" />
      <div className="about__text_container">
        <h2 className="about__text_title">About the author</h2>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}
