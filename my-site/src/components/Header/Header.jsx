import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <Navigation {...props} />
      </div>
    </header>
  );
}
