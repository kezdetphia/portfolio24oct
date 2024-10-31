import ContactForm from "@/components/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <div className="pt-5  ">
      <div className="text-center md:text-start pb-5">
        <p className="md:text-8xl text-5xl  font-bold">CONTACT</p>
        <p className="md:text-8xl text-5xl font-bold text-secondaryTitle">ME</p>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
