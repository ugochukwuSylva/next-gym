import Head from "next/head";
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  // RedditShareButton,
  PinterestShareButton,
  // WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import ShareButton from "./ShareButton";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

type Props = {
  id: number;
  productName: string;
  productImage: string;
};

export default function ShareButtonContainer({
  id,
  productName,
  productImage,
}: Props) {
  const url = `http://localhost:3000/shopping/product/${id}`;
  return (
    <>
      {/* prettier-ignore */}
      <Head>
        <meta property="og:title" content="" />
        <meta property="og:description" content={`A preview of Gym essentials: ${productName}`} />
        <meta property="og:image" content={url} />
        <meta property="og:url" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content={productImage} />
        <meta name="twitter:card" content="summary_large_image" />
        {/*  */}
      </Head>
      <div className="flex items-center justify-between bg-stone-100  p-2">
        <ShareButton title="Share on X" color="bg-black">
          <TwitterShareButton
            url={url}
            title={`Gym essential products: ${productName}`}
          >
            <FaXTwitter
              size={20}
              className="group-hover:text-white text-stone-600"
            />
          </TwitterShareButton>
        </ShareButton>

        <ShareButton title="Share on Facebook" color="bg-blue-500">
          <FacebookShareButton
            url={url}
            hashtag="#Next-Gym"
            title={`Checkout this amazing product: ${productName}`}
          >
            <FaFacebookF
              size={20}
              className="group-hover:text-white text-stone-600"
            />
          </FacebookShareButton>
        </ShareButton>

        <ShareButton title="Share on Pinterest" color="bg-red-500">
          <PinterestShareButton
            media={productImage}
            url={url}
            title={`Checkout this amazing product: ${productName}`}
          >
            <FaPinterest
              size={20}
              className="group-hover:text-white text-stone-600"
            />
          </PinterestShareButton>
        </ShareButton>
        <ShareButton title="Share on Email" color="bg-stone-500">
          <EmailShareButton
            url={url}
            title={`Checkout this amazing product: ${productName}`}
          >
            <MdEmail
              size={20}
              className="group-hover:text-white text-stone-600"
            />
          </EmailShareButton>
        </ShareButton>

        {/* <ShareButton title="Share on WhatsApp" color="bg-green-500">
          <WhatsappShareButton
            url={url}
            title={`Checkout this amazing product: ${productName}`}
          >
            <SiWhatsapp
              size={20}
              className="group-hover:text-white text-stone-600"
            />
          </WhatsappShareButton>
        </ShareButton> */}

        <ShareButton title="Share on LinkedIn" color="bg-blue-900">
          <LinkedinShareButton
            url={url}
            title={`Checkout this amazing product: ${productName}`}
          >
            <FaLinkedinIn
              size={20}
              className="group-hover:text-white text-stone-600"
            />
          </LinkedinShareButton>
        </ShareButton>
      </div>
    </>
  );
}
