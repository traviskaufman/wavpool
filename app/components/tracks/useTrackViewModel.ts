import { atom, useAtom } from "jotai";
import { useCallback } from "react";

export interface TrackViewModel {
  isPlaying: boolean;
  play(): void;
  pause(): void;
}

const isPlayingAtom = atom(false);
export default function useTrackViewModel(track: Track): TrackViewModel {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const play = useCallback(() => setIsPlaying(true), [setIsPlaying]);
  const pause = useCallback(() => setIsPlaying(false), [setIsPlaying]);

  return {
    isPlaying,
    play,
    pause,
  };
}
