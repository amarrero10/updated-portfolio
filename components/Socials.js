import Link from "next/link";

import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-2xl xl:text-3xl">
      <Link
        href="https://www.linkedin.com/in/albert-marrero-dev"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href="https://github.com/amarrero10"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
