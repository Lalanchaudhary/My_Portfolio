import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { PinContainer } from "./ui/3d-pin";
import msd from '../assets/pro4.jpg';
import uride from '../assets/pro.png';
import comply from '../assets/pro3.jpg';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="w-full px-40 flex items-center justify-center">
        <div className="h-[60rem] w-full flex items-center justify-center">
          <PinContainer title="/Complymax.com" href="https://complymax.co.in/">
            <div
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                ComplyMax
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm leading-3">
                  Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.
                </span>
              </div>
              <img src={uride} className="my-2 rounded-md" />
            </div>
          </PinContainer>
        </div>

        <div className="h-[60rem] w-full flex items-center justify-center">
          <PinContainer title="/Uride.com" href="https://uride.in/">
            <div
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Uride
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm leading-3">
                  A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.
                </span>
              </div>
              <img src={uride} className="my-2 rounded-md" />
            </div>
          </PinContainer>
        </div>

        <div className="h-[60rem] w-full flex items-center justify-center">
          <PinContainer title="/MsdLab.com" href="https://github.com/Lalanchaudhary/msdLabs">
            <div
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                MSD Lab
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm leading-3">
                  MSD-Lab's online booking platform for convenient scheduling of blood, urine, and other tests, providing real-time slot availability, secure payments, and easy access to test results.
                </span>
              </div>
              <img src={uride} className="my-2 rounded-md" />
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
