import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";

const Portfolio = () => {
  return (
    <div className=" h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-x-8">
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" h2 xl:mt-12"
            >
              Portfolio<span className=" text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" mb-4 mx-auto max-w-[400px] lg:mx-0"
            >
              Explore my work to see how I turn ideas into reality. From web applications to system
              optimizations, my portfolio showcases my passion for problem-solving and innovation.
              Check it out and get in touch to discuss how we can collaborate on your next project.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
