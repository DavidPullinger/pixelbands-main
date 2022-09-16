// external functions
import { useFilePicker } from "use-file-picker";
import { MutableRefObject, useEffect } from "react";
// external components
import { MusicNoteIcon, XIcon } from "@heroicons/react/outline";

export default function AudioField(props: {
  getAudio: MutableRefObject<() => string>;
}) {
  const [openFileSelector, { filesContent, clear }] = useFilePicker({
    readAs: "DataURL",
    accept: [".mp3", ".wav"],
    multiple: false,
  });

  useEffect(() => {
    props.getAudio.current = getAudio;
  });
  function getAudio() {
    return filesContent[0]?.content ?? null;
  }

  return (
    <div className="flex flex-col gap-4">
      <p>Song Audio</p>
      {filesContent[0] ? (
        <div className="grid grid-cols-[1fr,24px] gap-x-2 items-center">
          <audio
            id="launchpad-audio"
            className="w-full max-w-md mx-auto"
            src={filesContent[0].content}
            controls
          />
          <XIcon onClick={clear} className="w-6 text-accent" />
        </div>
      ) : (
        <div
          onClick={openFileSelector}
          className="w-full bg-white rounded h-[100px] flex items-center justify-center cursor-pointer"
        >
          <MusicNoteIcon className="w-10 text-accent" />
        </div>
      )}
    </div>
  );
}
