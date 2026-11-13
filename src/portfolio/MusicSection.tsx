import { messages } from "./messages/musicSection";
import { ArrowUpRight, Music2 } from "lucide-react";
import type { Language } from "./content";

const playlistId = "78tWiw6HY9ppzYlCDYwooz";
const playlistUrl = `https://open.spotify.com/playlist/${playlistId}`;

export function MusicSection({ language }: { language: Language }) {
  return (
    <section
      className="section music-section"
      id="music"
      aria-labelledby="music-title"
    >
      <span className="eyebrow">{messages.musicTellsStoriesToo[language]}</span>
      <h2 id="music-title">{messages.mySoundtrack[language]}</h2>
      <div className="music-layout">
        <div className="music-copy">
          <Music2 size={30} aria-hidden="true" />
          <h3>{messages.aLittleOfMeInMusic[language]}</h3>
          <p>{messages.aSelectionToGetToKnow[language]}</p>
          <a
            className="text-link"
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {messages.openPlaylistOnSpotify[language]}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <iframe
          className="spotify-player"
          title={messages.mySoundtrackOnSpotify[language]}
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          width="100%"
          height="352"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
