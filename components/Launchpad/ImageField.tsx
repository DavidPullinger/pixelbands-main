// external functions
import { useFilePicker } from "use-file-picker";
import { MutableRefObject, useEffect } from "react";
// external components
import { PhotographIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function ImageField(props: {
  getImage: MutableRefObject<() => string>;
}) {
  const [openFileSelector, { filesContent, clear }] = useFilePicker({
    readAs: "DataURL",
    accept: [".jpg", ".jpeg", ".png", ".tiff", ".gif"],
    multiple: false,
  });

  useEffect(() => {
    props.getImage.current = getImage;
  });
  function getImage() {
    return filesContent[0]?.content ?? null;
  }

  return (
    <div className="flex flex-col gap-6">
      <p>Song Image</p>
      {filesContent[0] ? (
        <div className="grid grid-cols-[1fr,24px] gap-x-2 items-center">
          <Image
            src={filesContent[0].content}
            height={200}
            width="100%"
            objectFit="contain"
            alt=""
            className="mr-auto"
          />
          <XIcon onClick={clear} className="w-6 text-accent" />
        </div>
      ) : (
        <div
          onClick={openFileSelector}
          className="w-full bg-white rounded h-[200px] flex items-center justify-center cursor-pointer"
        >
          <PhotographIcon className="w-10 text-accent" />
        </div>
      )}
    </div>
  );
}
