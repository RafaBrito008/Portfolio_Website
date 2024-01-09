"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Restaurant Mobile App",
    description: "Project 1 description",
    image: "/images/projects/app_restaurant.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/RafaBrito008/App_Restaurant"
  },
  {
    id: 2,
    title: "Web Coffe Shop",
    description: "Project 2 description",
    image: "/images/projects/coffe_shop.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RafaBrito008/Web_Coffe_Shop"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Yep, this is exactly what you're loking at right now.",
    image: "/images/projects/portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RafaBrito008/Portfolio_Website"
  },
  {
    id: 4,
    title: "Uninformed Search Algorithms",
    description: "Project 4 description",
    image: "/images/projects/uninformed_search_algorithms.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/RafaBrito008/Uninformed_Search_Algorithms"
  },
  {
    id: 5,
    title: "Missionaries and Cannibals",
    description: "Authentication and CRUD operations",
    image: "/images/projects/missionaries_and_cannibals.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/RafaBrito008/Missionaries_Cannibals"
  },
  {
    id: 6,
    title: "8-Queens Hill Climbing",
    description: "Project 5 description",
    image: "/images/projects/8-queens_hill_climbing.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/RafaBrito008/8-Queens_Hill_Climbing"
  },
  {
    id: 7,
    title: "8-Queens Genetic Algorithm",
    description: "Project 5 description",
    image: "/images/projects/8-queens_genetic_algorithm.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/RafaBrito008/8-Queens_Genetic-Algorithm"
  },
  {
    id: 8,
    title: "PRISM Algorithm",
    description: "Project 5 description",
    image: "/images/projects/prism.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/RafaBrito008/PRISM-Algorithm"
  },
  {
    id: 9,
    title: "RGB Image Editor",
    description: "Project 5 description",
    image: "/images/projects/rgb_editor.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/RafaBrito008/RGB-ImageEditor"
  },
  {
    id: 10,
    title: "Image Geometry Properties",
    description: "Project 5 description",
    image: "/images/projects/geometry_properties.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/RafaBrito008/Image_Geometry_Properties"
  },
  {
    id: 11,
    title: "Image Smoothing Filters",
    description: "Project 5 description",
    image: "/images/projects/smoothing_filters.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/RafaBrito008/ImageSmoothingFilters"
  },
  {
    id: 12,
    title: "Image Sharpening Filters",
    description: "Project 5 description",
    image: "/images/projects/sharpening_filters.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/RafaBrito008/ImageSharpeningFilters"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
