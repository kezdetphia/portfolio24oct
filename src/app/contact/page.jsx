import ContactForm from "@/components/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <div className="py-20  ">
      <div className="text-center md:text-start pb-10">
        <p className="md:text-8xl text-5xl  font-bold">CONTACT</p>
        <p className="md:text-8xl text-5xl font-bold text-secondaryTitle">ME</p>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
