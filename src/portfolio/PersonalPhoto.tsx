import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Expand, X } from "lucide-react";
import setup from "../assets/photos/setup.webp";
import hardware from "../assets/photos/hardware.webp";
import bike from "../assets/photos/bike.webp";
import gym from "../assets/photos/gym.webp";
import server from "../assets/photos/server.webp";
import type { Language, Localized } from "./content";

const photos = {
  setup: {
    src: setup,
    width: 1600,
    height: 1200,
    alt: {
      pt: "Minha mesa com dois monitores, teclado e microfone.",
      en: "My desk with two monitors, keyboard and microphone.",
    },
    caption: { pt: "Meu trono", en: "My throne" },
  },
  hardware: {
    src: hardware,
    width: 1086,
    height: 1448,
    alt: {
      pt: "Interior do meu PC com processador AMD e placa de vídeo Radeon.",
      en: "Inside my PC, with an AMD processor and Radeon graphics card.",
    },
    caption: { pt: "Por dentro da máquina.", en: "Inside the machine." },
  },
  bike: {
    src: bike,
    width: 1200,
    height: 1600,
    alt: {
      pt: "Minha bicicleta à beira do lago ao pôr do sol.",
      en: "My bicycle by the lake at sunset.",
    },
    caption: {
      pt: "Cardio em dia é cabeça no lugar",
      en: "Cardio on track, mind in balance",
    },
  },
  gym: {
    src: gym,
    width: 1086,
    height: 1448,
    alt: {
      pt: "Anilhas em um aparelho de academia.",
      en: "Weight plates on a gym machine.",
    },
    caption: {
      pt: "Ai meus jueio. Mas se for pra treinar fofo, melhor sentar pra codar",
      en: "Oh, my knees. But if I’m going to take it easy, I might as well sit down and code",
    },
  },
  server: {
    src: server,
    width: 1600,
    height: 1200,
    alt: {
      pt: "Servidor aberto sobre a bancada, com seus componentes à mostra.",
      en: "An open server on a workbench, with its components exposed.",
    },
    caption: {
      pt: "carro velho e servidor é aquelas, enquanto andar (ou der ping), tá novo",
      en: "Old cars and servers: as long as it runs (or answers a ping), it’s good as new",
    },
  },
} satisfies Record<
  string,
  {
    src: string;
    width: number;
    height: number;
    alt: Localized;
    caption: Localized;
  }
>;

export function PersonalPhoto({
  photo,
  language,
  className = "",
  interactive = true,
  onPhotoClick,
}: {
  photo: keyof typeof photos;
  language: Language;
  className?: string;
  interactive?: boolean;
  onPhotoClick?: () => boolean | void;
}) {
  const image = photos[photo];
  const [expanded, setExpanded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  useEffect(() => {
    if (!expanded) return;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [expanded]);
  return (
    <>
      <figure className={`personal-photo photo-${photo} ${className}`}>
        <button
          ref={triggerRef}
          className="photo-expand"
          type="button"
          disabled={!interactive}
          onClick={() => {
            if (!onPhotoClick?.()) setExpanded(true);
          }}
          aria-label={`${t("Ampliar foto", "Expand photo")}: ${image.alt[language]}`}
          aria-haspopup="dialog"
        >
          <img
            src={image.src}
            alt={image.alt[language]}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
          <span className="photo-expand-hint">
            <Expand size={15} aria-hidden="true" />
            {t("Ampliar", "Expand")}
          </span>
        </button>
        <figcaption>{image.caption[language]}</figcaption>
      </figure>
      {expanded &&
        createPortal(
          <dialog
            ref={dialogRef}
            className="photo-dialog"
            aria-label={image.alt[language]}
            onCancel={() => setExpanded(false)}
            onClose={() => setExpanded(false)}
            onClick={(event) => {
              if (event.target === event.currentTarget) setExpanded(false);
            }}
          >
            <div className="photo-dialog-content">
              <button
                className="photo-dialog-close"
                type="button"
                autoFocus
                onClick={() => setExpanded(false)}
                aria-label={t("Fechar foto", "Close photo")}
              >
                <X size={22} />
              </button>
              <button
                className="expanded-photo-button"
                type="button"
                aria-label={image.alt[language]}
                onClick={() => {
                  if (onPhotoClick?.()) setExpanded(false);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt[language]}
                  width={image.width}
                  height={image.height}
                />
              </button>
              <p>{image.caption[language]}</p>
            </div>
          </dialog>,
          document.body,
        )}
    </>
  );
}
