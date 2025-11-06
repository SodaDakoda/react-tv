import { useState, useEffect } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    setSelectedEpisode(null);
  }, [show]);

  if (!show) {
    return (
      <section className="show-details">
        <p>Please select a show to view its episodes.</p>
      </section>
    );
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={`${show.name} (${show.genre})`}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
