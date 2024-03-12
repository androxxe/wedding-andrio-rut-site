import { useState } from "react";
import { Gallery as ReactGridGallery } from "react-grid-gallery";
import { CodingPreview } from "../organism";
import { MdxGallery, MdxCodeGalleryImages } from "@/components/tech/mdx";
import { GALLERY_IMAGES } from "@/constants";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Gallery = () => {
  const [index, setIndex] = useState<number | undefined>(undefined);

  return (
    <div className="mb-6">
      <MdxGallery />
      <CodingPreview Mdx={MdxGalleryImages}>
        <ReactGridGallery
          images={GALLERY_IMAGES}
          onClick={(index) => setIndex(index)}
          enableImageSelection={false}
          rowHeight={400}
        />
      </CodingPreview>
      <Lightbox slides={GALLERY_IMAGES} open={index !== undefined} index={index} close={() => setIndex(undefined)} />
    </div>
  );
};
