import Link from "next/link";
// import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

type Props = {
  iconSize?: number;
};

export default function QuickContactIcons({ iconSize }: Props) {
  return (
    <ul className="flex items-center gap-3 md:gap-5 text-white">
      <li className=" group p-2 md:p-1 rounded-full bg-stone-500/40 md:bg-transparent  hover:insta-bg transition-all duration-200">
        {/* <Link href="https://www.instagram.com/its_sylva/" target="_blank"> */}
        <Link href="https://www.instagram.com/" target="_blank">
          <FaInstagram size={iconSize} className="group-hover:rotate-side" />
        </Link>
        <span className="animated-social  group-hover:opacity-100 group-hover:scale-100 ">
          instagram
        </span>
      </li>

      <li className="group p-2 md:p-1 rounded-full bg-stone-500/40 md:bg-transparent  hover:bg-black transition-all duration-200">
        <Link href="https://twitter.com/ugochuk11369335" target="_blank">
          <FaXTwitter size={iconSize} className="group-hover:rotate-side" />
        </Link>
        <span className="animated-social  group-hover:opacity-100 group-hover:scale-100 ">
          Twitter / X
        </span>
      </li>

      <li className="group p-2 md:p-1 rounded-full bg-stone-500/40 md:bg-transparent  transition-all duration-200">
        <Link href="https://github.com/ugochukwuSylva" target="_blank">
          <FaGithub size={iconSize} className="group-hover:rotate-side" />
        </Link>
        <span className="animated-social -ml-2 group-hover:opacity-100 group-hover:scale-100 ">
          GitHub
        </span>
      </li>

      <li className="group p-2 md:p-1 rounded-full bg-stone-500/40 md:bg-transparent hover:bg-blue-900  transition-all duration-200">
        <Link
          href="https://www.linkedin.com/in/ugochukwu-nwaba-aat-aca-931b7a188"
          target="_blank"
        >
          <FaLinkedinIn size={iconSize} className="group-hover:rotate-side" />
        </Link>
        <span className="animated-social -ml-2 group-hover:opacity-100 group-hover:scale-100 ">
          Linkedin
        </span>
      </li>
      {/* <li className="group p-2 md:p-1 rounded-full bg-stone-500/40 md:bg-transparent hover:bg-red-600 transition-all duration-200">
            <Link href="">
            <FaYoutube size={iconSize20} className="group-hover:rotate-side"/>
            </Link>
            <span className="animated-social  group-hover:opacity-100 group-hover:scale-100 ">
            YouTube
            </span>
            </li> */}

      {/* <li className="  group p-2 md:p-1 rounded-full bg-stone-500/40 md:bg-transparent hover:bg-blue-500 transition-all duration-200">
        <Link href="">
          <FaFacebookF size={iconSize} className="group-hover:rotate-side" />
        </Link>
        <span className="animated-social  group-hover:opacity-100 group-hover:scale-100 ">
          facebook
        </span>
      </li> */}
    </ul>
  );
}
