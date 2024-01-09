"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Database Management</li>
        <li>Web Development</li>
        <li>Project Design</li>
        <li>Development Methodologies</li>
        <li>Artificial Intelligence</li>
        <li>Programming</li>
      </ul>
    ),
  },
  {
    title: "Personal Traits",
    id: "personalTraits",
    content: (
      <ul className="list-disc pl-2">
        <li>Adaptability</li>
        <li>Continuous Learning</li>
        <li>Effective Communication</li>
        <li>Empathy</li>
        <li>Problem Solving</li>
        <li>Teamwork</li>
      </ul>
    ),
  },
  {
    title: "Technologies and Tools",
    id: "techTools",
    content: (
      <ul className="list-disc pl-2">
        <li>SQL</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Java</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>TOEFL ITP</li>
        <li>TOEFL Junior</li>
        <li>TOEIC</li>
        <li>TOEFL iBT</li>
        <li>TOEFL iBT</li>
        <li>CSEI 2020 - 2023</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={600} height={600} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello from Ambato, Ecuador! As a dedicated Software Engineering student at the Technical University of Ambato, I thrive on continuous learning and mastering new technologies. With skills in web development and a knack for adaptability, I'm ready to collaborate with global teams to innovate and craft the future of tech. Let's connect and create!
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
