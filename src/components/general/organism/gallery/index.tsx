"use client";

import { bonheurRoyale } from "@/app/general/layout";
import { GALLERY_IMAGES } from "@/constants";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Gallery as ReactGridGallery } from "react-grid-gallery";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";

export const Gallery = () => {
  const { t } = useTranslation(["general"]);

  const [index, setIndex] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number>(400);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setHeight(cardRef.current?.clientHeight as number);
    };

    handleResize();
  }, []);

  return (
    <div className="w-full h-full flex flex-col p-3 lg:p-12 bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem]">
      <h2 className={cn(bonheurRoyale.className, "text-5xl text-center text-white mb-8")}>
        {t("general:gallery.galleryOfLove")}
      </h2>
      <div className="w-full flex-1 flex relative bg-gold-200 p-1 rounded-md">
        <div ref={cardRef} className="h-full w-full">
          <ReactGridGallery
            images={GALLERY_IMAGES}
            onClick={(index) => setIndex(index)}
            enableImageSelection={false}
            rowHeight={height / 2}
          />
        </div>
      </div>
      <Lightbox slides={GALLERY_IMAGES} open={index !== undefined} index={index} close={() => setIndex(undefined)} />
    </div>
  );
};
