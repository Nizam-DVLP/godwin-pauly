import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-200"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="PROVEN TRACK RECORD & CASE STUDIES"
          des="Selected Execution Highlights"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Retail Wine Distribution"
          des="Generated ₹6,000 profit in 14 days by independently sourcing and distributing 23 premium wine units."
          src={projectOne}
        />
        <ProjectsCard
          title="Residential Property Deal"
          des="Closed a residential property transaction generating ₹10,000 commission income structured for long-term value."
          src={projectTwo}
        />
        <ProjectsCard
          title="Education Advisory (50+ Students)"
          des="Guided 50+ students in structured PG/UG admissions aligned with career clarity, background, and income potential."
          src={projectThree}
        />
        <ProjectsCard
          title="Soft Launch Platform"
          des="A structured income experimentation platform where entrepreneurs and operators test, execute, and scale revenue models."
          src={projectTwo}
        />
        <ProjectsCard
          title="Multi-Channel Asset Channels"
          des="Actively building and scaling diversified income channels across asset advisory, retail execution, and digital ventures."
          src={projectThree}
        />
        <ProjectsCard
          title="Business Analytics & Operations"
          des="Applying BBA Data Analytics & HR expertise to evaluate revenue strength, cost/margins, and scalable execution."
          src={projectOne}
        />
      </div>
    </section>
  );
};

export default Projects;