import Link from "next/link";

import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-2xl xl:text-3xl">
      <Link
        href="https://www.linkedin.com/in/albert-marrero-dev"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href="https://github.com/amarrero10"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <a
        href="/Albert-Resume.pdf"
        locale={false}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <FaWpforms className="hover:text-accent transition-all duration-300" />
      </a>
    </div>
  );
};

export default Socials;
