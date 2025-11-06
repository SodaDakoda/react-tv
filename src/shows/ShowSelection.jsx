import "./shows.css";

export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          key={show.name}
          className="show"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
