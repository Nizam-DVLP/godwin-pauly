import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-gray-200">
      <div className="flex justify-center items-center text-center">
        <Title title="FRAMEWORK & METHODOLOGY" des="Operating Principles & Mindset" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`${
              educationData
                ? "!bg-black !text-white !border-black shadow-md"
                : "bg-white text-gray-800 border-gray-200"
            } resumeLi rounded-lg border`}
          >
            Operating Principles
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`${
              skillData
                ? "!bg-black !text-white !border-black shadow-md"
                : "bg-white text-gray-800 border-gray-200"
            } resumeLi rounded-lg border`}
          >
            The 5 Core Filters
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
              setAchievementData(false);
            }}
            className={`${
              experienceData
                ? "!bg-black !text-white !border-black shadow-md"
                : "bg-white text-gray-800 border-gray-200"
            } resumeLi rounded-lg border`}
          >
            Execution Experience
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(true);
            }}
            className={`${
              achievementData
                ? "!bg-black !text-white !border-black shadow-md"
                : "bg-white text-gray-800 border-gray-200"
            } resumeLi rounded-lg border`}
          >
            Mission &amp; Milestones
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievement />}
    </section>
  );
};

export default Resume;