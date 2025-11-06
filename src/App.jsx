import { useState } from "react";
import "./App.css";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import { tvShows as initialShows } from "./shows/data";

export default function App() {
  const [shows] = useState(initialShows);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
      </header>

      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
