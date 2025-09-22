import React, { useEffect, useRef } from "react";

type Props = {
  src: string;
  className?: string;
  ariaLabel?: string;
  poster?: string;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "auto" | "metadata" | "none";
};

export default function AutoPlayVideo({
  src,
  className,
  ariaLabel,
  poster,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "auto",
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Ensure properties applied before attempting play (important for iOS)
    el.muted = muted;
    el.loop = loop;
    // Attempt to start playback immediately
    const tryPlay = () => {
      void el.play().catch(() => {
        // Best-effort: some browsers block autoplay; keep muted and wait for interaction
      });
    };

    const onCanPlay = () => tryPlay();
    el.addEventListener("canplay", onCanPlay, { once: true });

    // Also try on mount
    tryPlay();

    // Fallback: resume play on first user interaction
    const onUserGesture = () => {
      tryPlay();
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("click", onUserGesture);
    };
    window.addEventListener("touchstart", onUserGesture, { passive: true });
    window.addEventListener("click", onUserGesture);

    return () => {
      el.removeEventListener("canplay", onCanPlay);
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("click", onUserGesture);
    };
  }, [loop, muted]);

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      muted={muted}
      loop={loop}
      autoPlay
      playsInline={playsInline}
      preload={preload}
      poster={poster}
      aria-label={ariaLabel}
    />
  );
}
