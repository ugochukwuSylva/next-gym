import Image from "next/image";

type Props = {
  imageUrl: string;
  altText: string;
};

function PagesBackgroundContainer({ imageUrl, altText }: Props) {
  return (
    <div className="h-72 w-full  relative bg-black/50">
      <Image
        src={imageUrl}
        alt={altText}
        fill
        quality={100}
        className="object-cover w-full h-full -z-10"
      />
    </div>
  );
}

export default PagesBackgroundContainer;
