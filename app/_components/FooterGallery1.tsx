import GalleryContent1 from "./GalleryContent1";

export default function FooterGallery1() {
  return (
    <div className="flex flex-col">
      <h1 className="uppercase tracking-wider text-2xl md:text-lg font-bold text-red-500 mb-8 md:mb-6 text-center">
        Latest News
      </h1>

      <GalleryContent1
        imagePath="/gallery-image-1.jpg"
        heading="A place of Silence"
        subHeading="10 June 2024"
      />
      <GalleryContent1
        imagePath="/gallery-image-2.jpg"
        heading="A place of Silence"
        subHeading="10 June 2024"
      />
      <GalleryContent1
        imagePath="/gallery-image-3.jpg"
        heading="A place of Silence"
        subHeading="10 June 2024"
      />
      <GalleryContent1
        imagePath="/gallery-image-4.jpg"
        heading="A place of Silence"
        subHeading="10 June 2024"
      />
    </div>
  );
}
