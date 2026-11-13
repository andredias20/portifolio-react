import { useState } from "react";
import { PersonalPhoto } from "./PersonalPhoto";
import type { Language } from "./content";

const layers = [
  { photo: "setup", pt: "Mesa", en: "Desk" },
  { photo: "hardware", pt: "PC", en: "PC" },
  { photo: "server", pt: "Servidor", en: "Server" },
] as const;

export function WorkspacePhotos({
  language,
  onServerClick,
}: {
  language: Language;
  onServerClick?: () => boolean;
}) {
  const [activePhoto, setActivePhoto] = useState<string>("setup");
  return (
    <div className="workspace-photos">
      <div
        className="photo-controls"
        role="group"
        aria-label={language === "pt" ? "Foto em destaque" : "Featured photo"}
      >
        {layers.map((layer) => (
          <button
            key={layer.photo}
            type="button"
            aria-pressed={activePhoto === layer.photo}
            onClick={() => setActivePhoto(layer.photo)}
          >
            {layer[language]}
          </button>
        ))}
      </div>
      <div className="photo-layers">
        {layers.map((layer) => (
          <div
            key={layer.photo}
            className={`photo-layer layer-${layer.photo}${activePhoto === layer.photo ? " is-active" : ""}`}
            aria-hidden={activePhoto !== layer.photo}
            inert={activePhoto !== layer.photo}
          >
            <PersonalPhoto
              photo={layer.photo}
              language={language}
              interactive={activePhoto === layer.photo}
              onPhotoClick={
                layer.photo === "server" ? onServerClick : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
