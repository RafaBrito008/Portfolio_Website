"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10 col-span-1">
        <h5 className="text-xl font-bold text-white my-2">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-lg lg:text-xl">
          Always on the lookout for exciting collaborations and opportunities, I&apos;m open for a chat. Feel free to reach out to me via my LinkedIn or GitHub profiles. Whether it&apos;s a project idea, a question, or just a friendly hello, I&apos;m eager to connect and respond to your messages!
        </p>
      </div>
      <div className="z-10 col-span-1 flex justify-end">
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/RafaBrito008" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Github Icon" width={200} height={200} />
          </a>
          <a href="https://www.linkedin.com/in/rafael-brito-rabh8080/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={200} height={200} />
          </a>
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    </section>
  );
};

export default ContactSection;
