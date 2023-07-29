import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"

//template_4x3pw7e
//service_o812g3e
//1N5z0IPry7HaeHOxr

const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target

    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_o812g3e',
      'template_4x3pw7e',
       {from_name: form.name,
        to_name: 'Dev',
        from_email: form.email,
        to_email: 'dev.dev.singh.chauhan@gmail.com',
        message: form.message,},
      '1N5z0IPry7HaeHOxr')
      .then(() => {
        setLoading(false)
        alert("Thank you. I will get back to you as soon as possible.")
        setForm({
          name: "",
          email: "",
          message: "",
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert("Something went wrong. Please try again.")
      }
    );
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p
          className={`${styles.sectionSubText}`}
        >
          Get in touch
        </p>
        <h3
          className={`${styles.sectionHeadText}`}
        >
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span
                className="text-white font-medium mb-4"
              >
                Your Name
              </span>
              <input
                onChange={handleChange}
                value={form.name}
                name="name"
                placeholder="What's your name?"
                type="text"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none fonnt-medium"
              />
            </label>

            <label className="flex flex-col">
              <span
                className="text-white font-medium mb-4"
              >
                Your Email
              </span>
              <input
                onChange={handleChange}
                value={form.email}
                name="email"
                placeholder="What's your Email?"
                type="email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none fonnt-medium"
              />
            </label>

            <label className="flex flex-col">
              <span
                className="text-white font-medium mb-4"
              >
                Your Message
              </span>
              <textarea
                rows={7}
                onChange={handleChange}
                value={form.message}
                name="message"
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none fonnt-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas /> 
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")