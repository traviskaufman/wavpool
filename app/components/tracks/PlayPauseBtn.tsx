export interface Props {
  isPlaying: boolean;
  onPlay(): void;
  onPause(): void;
}

export default function PlayPauseBtn({ isPlaying, onPlay, onPause }: Props) {
  return (
    <button
      className="h-32 w-32 flex align-center justify-center"
      aria-label={isPlaying ? "Pause" : "Play"}
      onClick={isPlaying ? onPause : onPlay}
    ></button>
  );
}
