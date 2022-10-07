import React from "react";
import { motion } from "framer-motion";
import { DiReact } from "react-icons/di";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
    return (
        <motion.div className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[#fc7021] text-2xl">
                Skills
            </h3>

            <Skill />
        </motion.div>
    );
};

export default Skills;
