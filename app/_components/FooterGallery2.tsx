import GalleryContent2 from "./GalleryContent2";

export default function FooterGallery2() {
  return (
    <div>
      <h1 className="uppercase tracking-wider text-2xl md:text-lg font-bold text-red-500 mb-8 md:mb-6 text-center">
        Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 h-3/4 ">
        <GalleryContent2 imageUrl="/gallery-image-5.jpg" />
        <GalleryContent2 imageUrl="/gallery-image-6.jpg" />
        <GalleryContent2 imageUrl="/gallery-image-7.jpg" />
        <GalleryContent2 imageUrl="/gallery-image-8.jpg" />
      </div>
    </div>
  );
}
