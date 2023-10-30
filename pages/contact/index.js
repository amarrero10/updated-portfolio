import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setMessageSent] = useState(false);

  const myEmail = "albert.marrero10@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_zlanr09", "template_nupgdxh", form.current, "jwLUixlerwVK9ReDL").then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setMessageSent(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className=" h-full bg-primary/30">
      <div className=" container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className=" flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            ref={form}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            {isMessageSent ? (
              <p className=" text-center text-3xl text-white">Message Sent!</p>
            ) : (
              <>
                <div className=" flex gap-x-6 w-full">
                  <input
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="name"
                    className="input"
                  />
                  <input
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="email"
                    className="input"
                  />
                </div>
                <input
                  name="user_subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="subject"
                  className="input"
                />
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="message"
                  className="textarea sm:h-[180px]"
                  rows="2"
                ></textarea>
                <button
                  type="submit"
                  className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                >
                  <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                    Let&apos;s Talk
                  </span>
                  <BsArrowRight className=" -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Contact;
