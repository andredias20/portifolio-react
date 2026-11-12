import { ArrowUpRight, Music2, Radio } from "lucide-react";
import type { Language } from "./content";

const playlistId = "78tWiw6HY9ppzYlCDYwooz";
const playlistUrl = `https://open.spotify.com/playlist/${playlistId}`;

export function MusicSection({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <section
      className="section music-section"
      id="music"
      aria-labelledby="music-title"
    >
      <span className="eyebrow">
        {t("MÚSICA TAMBÉM CONTA HISTÓRIAS", "MUSIC TELLS STORIES TOO")}
      </span>
      <h2 id="music-title">{t("Minha trilha sonora.", "My soundtrack.")}</h2>
      <div className="music-layout">
        <div className="music-copy">
          <Music2 size={30} aria-hidden="true" />
          <h3>
            {t("Um pouco de mim em músicas.", "A little of me, in music.")}
          </h3>
          <p>
            {t(
              "Uma seleção para conhecer outro lado meu. Dá o play e fica um pouco.",
              "A selection to get to know another side of me. Press play and stay a while.",
            )}
          </p>
          <a
            className="text-link"
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Abrir playlist no Spotify", "Open playlist on Spotify")}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <div className="listening-demo">
            <span className="eyebrow">
              <Radio size={14} aria-hidden="true" />{" "}
              {t("OUVINDO AGORA · DEMONSTRAÇÃO", "NOW PLAYING · DEMO")}
            </span>
            <p>
              {t(
                "Aqui vai aparecer a música atual ou a última que ouvi.",
                "My current or most recently played track will appear here.",
              )}
            </p>
            <small>
              {t(
                "A conexão com minha conta ainda não está ativa. A playlist ao lado é real.",
                "My account connection is not active yet. The playlist beside this is real.",
              )}
            </small>
          </div>
        </div>
        <iframe
          className="spotify-player"
          title={t(
            "Minha trilha sonora no Spotify",
            "My soundtrack on Spotify",
          )}
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
