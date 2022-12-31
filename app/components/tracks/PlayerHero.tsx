import type { Track } from "@prisma/client";
import PlayPauseBtn from "./PlayPauseBtn";
import useTrackViewModel from "./useTrackViewModel";

export default function PlayerHero(track: Track) {
  const { isPlaying, play, pause } = useTrackViewModel(track);
  return (
    <section className="flex flex-col gap-2">
      <div className="flex ml-2 gap-2 align-center">
        <PlayPauseBtn isPlaying={isPlaying} onPlay={play} onPause={pause} />
      </div>
      <p>WaveForm</p>
    </section>
  );
}
