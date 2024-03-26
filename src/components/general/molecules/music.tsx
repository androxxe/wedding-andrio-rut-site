import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { MdMusicOff, MdMusicNote } from "react-icons/md";

export interface MusicHandle {
  startPlaying: () => void;
}

// eslint-disable-next-line react/display-name
export const Music = forwardRef<MusicHandle>((_, ref) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleIsPlaying = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
    } else {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (error) {
        setIsPlaying(false);
        console.log("[Error] handleIsPlaying", error);
      }
    }
  };

  const startPlaying = async () => {
    try {
      await audioRef.current?.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("[Error] startPlaying", error);
      setIsPlaying(false);
    }
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        startPlaying
      };
    },
    []
  );

  return (
    <div>
      <button
        onClick={handleIsPlaying}
        className="absolute right-3 bottom-4 z-50 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer"
      >
        <div className="w-8 h-8 bg-maroon-400 rounded-full flex items-center justify-center">
          {isPlaying ? (
            <MdMusicNote className="text-white" size={24} />
          ) : (
            <MdMusicOff className="text-white" size={24} />
          )}
        </div>
      </button>
      <audio ref={audioRef} src="/audio/goodness_of_god.mp3" autoPlay loop={true} />
    </div>
  );
});
