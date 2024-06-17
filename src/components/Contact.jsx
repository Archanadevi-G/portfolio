import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const contact_info = [
    {
      name: "LinkedIn",
      icon: "logo-linkedin",
      url: "https://www.linkedin.com/in/g-archanadevi/",
    },
    {
      name: "GitHub",
      icon: "logo-github",
      url: "https://github.com/Archanadevi-G",
    },
    { name: "Mail", icon: "mail", url: "mailto:archanadevig10@gmail.com" },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (!userName || !userEmail || !message) {
      toast.error("All fields are required!");
      return;
    }

    emailjs
      .sendForm(
        "service_1lyw74u",
        "template_2da316r",
        form.current,
        "2Nlwy3D59ExByNvux"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!");
          console.log(result.text);
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <motion.h3
          className="text-4xl font-semibold"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Contact <span className="text-cyan-600">Me</span>
        </motion.h3>

        <div className="mt-6 flex flex-col md:flex-row gap-6 max-w-5xl md:p-6 p-2 rounded-lg mx-auto">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="hidden md:block text-4xl mt-4 text-sky-600">
                <ion-icon name="person-circle-outline"></ion-icon>
              </div>
              <motion.input
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="flex-1 border bg-transparent border-sky-600 p-2 rounded"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="hidden md:block text-4xl mt-4 text-sky-600">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <motion.input
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                type="email"
                name="user_email"
                placeholder="Your Email Address"
                className="flex-1 border bg-transparent border-sky-600 p-2 rounded"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="hidden md:block text-4xl mt-8 text-sky-600">
                <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              </div>
              <motion.textarea
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                name="message"
                placeholder="Message"
                rows={10}
                className="flex-1 border bg-transparent border-sky-600 p-2 rounded"
              />
            </div>
            <motion.button
              type="submit"
              className="bg-sky-600 font-semibold text-white md:mx-auto mx-auto rounded-full py-3 px-6 flex items-center gap-2 w-fit hover:bg-white hover:text-cyan-600 focus:bg-white"
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <div className="flex flex-col flex-col-sm gap-7 mt-20">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <motion.a
                  key={contact.icon}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[3rem] text-3xl min-h-[3rem] flex items-center justify-center bg-transparent text-sky-600 rounded-full border border-sky-600 transition-all duration-500 ease-in hover:bg-sky-600 hover:text-slate-800  hover:ring-2 hover:ring-sky-600"
                  variants={fadeIn("down", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <ion-icon name={contact.icon}></ion-icon>
                </motion.a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
