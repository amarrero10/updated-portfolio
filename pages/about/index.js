import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAccessibleIcon,
  FaNpm,
  FaNodeJs,
  FaPython,
  FaLock,
  FaGitAlt,
  FaGithub,
  FaSlack,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiSqlite,
  SiFlask,
  SiCanva,
  SiPostman,
  SiVisualstudiocode,
  SiZoom,
  SiRender,
  SiNetlify,
} from "react-icons/si";

import { BsFiletypeSql } from "react-icons/bs";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
          <FaAccessibleIcon key={8} />,
          <FaNpm key={9} />,
          <SiTailwindcss key={10} />,
        ],
      },
      {
        title: "Back End Development",
        icons: [
          <FaNodeJs key={1} />,
          <SiExpress key={2} />,
          <SiPostgresql key={3} />,
          <SiSequelize key={4} />,
          <SiSqlite key={5} />,
          <FaPython key={6} />,
          <SiFlask key={7} />,
          <BsFiletypeSql key={8} />,
        ],
      },
      {
        title: "Developer Tools",
        icons: [
          <FaGitAlt key={1} />,
          <SiCanva key={2} />,
          <FaGithub key={3} />,
          <SiPostman key={4} />,
          <SiVisualstudiocode key={5} />,
          <FaSlack key={6} />,
          <SiZoom key={7} />,
          <SiRender key={8} />,
          <SiNetlify key={9} />,
        ],
      },
    ],
  },

  // IF NEEDED TO ADD i.e experience
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];

// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className=" h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" hidden xl:flex absolute bottom-0 -left-[100px] "
      >
        <Avatar className=" " />
      </motion.div>
      <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className=" flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className=" text-accent">stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I'm a software engineer with a passion for solving complex problems and creating
            innovative solutions. With a strong background in software development and a relentless
            pursuit of excellence, I've worked on a variety of projects, from building web
            applications to optimizing system performance. Whether it's writing efficient code,
            architecting scalable systems, or troubleshooting complex issues, I'm here to make a
            meaningful impact. My goal is to deliver software that not only meets your requirements
            but also exceeds your expectations. Explore my portfolio to see examples of my work and
            get in touch to discuss how I can contribute to your next project.
          </motion.p>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemidx) => {
              return (
                <div
                  className={` ${
                    index === itemidx &&
                    " text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  key={itemidx}
                  onClick={() => setIndex(itemidx)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="  py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className=" flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className=" font-light mb-2 md:mb-0">{item.title}</div>
                  <div className=" hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className=" flex gap-x-4">
                    {item.icons?.map((icon, idx) => {
                      return (
                        <div className="text-2xl text-white" key={idx}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
